import React, {Component} from 'react'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import ItemHeader from './itemHeader.jsx'
import DataTableBody from './datatablebody.jsx'
// import ItemRow from './itemRow.jsx'
// import Rx from 'rx'

class DataTableSAR extends Component {
    constructor (props) {
      super(props)
      this.displayName = 'DTSAR'
      this.state = {data: props.Data}
      this._createHeader = this._createHeader.bind(this)
      // this._createRows = this._createRows.bind(this)
      this._loadDataFromServer = this._loadDataFromServer.bind(this)
    }
    _loadDataFromServer () {
        (async () => {
            var data = await fetch(this.props.url)
            var dataParsed = await data.json()
            // console.log('d', dataParsed)
            this.setState({data: dataParsed.data})
        })()
      /* return Rx.observable.create((observer) => {
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
      })*/
    }
    componentDidMount () {
      // this._loadDataFromServer()
      /* tx.subscribe(
        function onNext (x) { console.log('Result: ' + x) },
        function onError (err) { console.log('Error: ' + err) },
        function onCompleted () { console.log('Completed') }
      )*/
    }
    /* componentWillReceiveProps (nextProps) {
        this.setState({
            data: nextProps.Data.length > this.props.Data.length ? nextProps.Data : []
        });
    } */
    componentDidUpdate () {
      // console.log('Component Updated')
    }
    _createHeader () {
      return this.props.Metadata.map((item) => {
        var style = {
          display: _.hasIn(item, 'hidden') ? item.hidden ? 'none' : '' : ''
        }
        return <ItemHeader key={item.name} DataKey={item.data} Label={item.label} Style={style}/>
      })
    }
    /* _createRows () {
      return this.state.data.map((item) => <ItemRow key={item.UUID} Metadata={this.props.Metadata} Item={item}/>)
    } */
    render () {
      var linkData = this.linkState('data')
      let headers = this._createHeader()
      /* let rows = []
      if (_.size(this.state.data) !== 0) {
          console.log('stateData', this.state.data)
          rows = this._createRows()
      } */
      // console.log('linkData', linkData)
      return (
          <table className={this.props.tbClass}>
            <thead>
                <tr>
                   {headers}
                </tr>
            </thead>
            <DataTableBody key='UUID-10' Query={this.props.Query} Data={linkData.value} Metadata={this.props.Metadata}/>
          </table>
      )
    }
}
reactMixin(DataTableSAR.prototype, LinkedStateMixin)

DataTableSAR.propTypes = {
  Metadata: React.PropTypes.array.isRequired,
  tbClass: React.PropTypes.string,
  tbdClass: React.PropTypes.string,
  Data: React.PropTypes.array,
  Query: React.PropTypes.any,
}

DataTableSAR.defaultProps = {
  tbClass: 'table table-bordered table-striped',
  tbdClass: 'table-hover',
  Data: [],
  Query: {}
}

export default DataTableSAR