import React, {Component} from 'react'
import _ from 'lodash'
import ItemHeader from './itemHeader.jsx'
import ItemRow from './itemRow.jsx'
import Rx from 'rx'

export default class DataTableSAR extends Component {
    constructor (props) {
      super(props)
      this.displayName = 'DTSAR'
      this.state = {data: []}
      this._createHeader = this._createHeader.bind(this)
      this._createRows = this._createRows.bind(this)
      this._loadDataFromServer = this._loadDataFromServer.bind(this)
    }
    _loadDataFromServer () {
        /* (async () => {
            var data = await fetch(this.props.url)
            var dataParsed = await data.json()
            // console.log('d', dataParsed)
            this.setState({data: dataParsed.data})
        })()*/
      return Rx.observable.create((observer) => {
        var req = new XMLHttpRequest()
        req.open('GET', this.props.url)

        req.onload = () => {
          if (req.status === 200) {
            observer.onNext(req.response)
            observer.onCompleted()
          } else {
            observer.onError(new Error(req.statusText))
          }
        }
        req.onerror = () => {
          observer.onError(new Error('Unknow Error'))
        }
        req.send()
      })
    }
    componentDidMount () {
      var tx = this._loadDataFromServer()
      tx.subscribe(
        function onNext (x) { console.log('Result: ' + x) },
        function onError (err) { console.log('Error: ' + err) },
        function onCompleted () { console.log('Completed') }
      )
    }
    componentDidUpdate () {
      console.log('Component Updated')
    }
    _createHeader () {
      return this.props.metadata.map((item) => {
        var style = {
          display: _.hasIn(item, 'hidden') ? item.hidden : ''
        }
        return <ItemHeader key={item.name} dataKey={item.data} label={item.label} style={style}/>
      })
    }
    _createRows () {
      return this.state.data.map((item) => <ItemRow key={item.id} metadata={this.props.metadata} item={item}/>)
    }
    render () {
      let headers = this._createHeader()
      return (
          <table className={this.props.tbClass}>
            <thead>
                <tr>
                   {headers}
                </tr>
            </thead>
            <tbody className={this.props.tbdClass}>
            </tbody>
          </table>
      )
    }
}

DataTableSAR.propTypes = {
  metadata: React.PropTypes.array.isRequired,
  tbClass: React.PropTypes.string,
  tbdClass: React.PropTypes.string,
  url: React.PropTypes.string
}

DataTableSAR.defaultProps = {
  tbClass: 'table table-bordered table-striped',
  tbdClass: 'table-hover'
}
