import React, {Component} from 'react'
import _ from 'lodash'
import ItemHeader from './itemHeader.jsx'
import ItemRow from './itemRow.jsx'

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
        (async () => {
            var data = await fetch(this.props.url)
            var dataParsed = await data.json()
            // console.log('d', dataParsed)
            this.setState({data: dataParsed.data})
        })()
    }
    componentDidMount () {
      this._loadDataFromServer()
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
  tbdClass: React.PropTypes.string
}

DataTableSAR.defaultProps = {
  tbClass: 'table table-bordered table-striped',
  tbdClass: 'table-hover'
}
