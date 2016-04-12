import React, {Component} from 'react'
import ItemRow from './itemRow.jsx'

class DataTableBody extends Component {
  constructor (props) {
    super(props)
    this._createRows = this._createRows.bind(this)
  }
  _createRows () {
    return this.props.Data.map((item) => <ItemRow key={item.UUID} Metadata={this.props.Metadata} Item={item}/>)
  }
  render () {
    var rows = this._createRows()
    return (
      <tbody className={this.props.Styleclass}>
        {rows}
      </tbody>
    )
  }
}

DataTableBody.propTypes = {
  Metadata: React.PropTypes.array.isRequired,
  Styleclass: React.PropTypes.string,
  Data: React.PropTypes.array
}

DataTableBody.defaultProps = {
  Styleclass: 'table-hover',
  Data: []
}

export default DataTableBody
