import React, {Component, PropTypes} from 'react'
import ItemRow from './ItemRow.jsx'

class Body extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this._createRows = this._createRows.bind(this)
  }
  componentDidMount () {
  }
  _createCell (value) {
     return <td>{value}</td>
  }
  _createRows () {
    var data = this.props.Data.value
    return data.map((items) => <ItemRow Data={items}/>)
  }
  render () {
    if (this.props.Data.value.length > 0) {
      return (
          <tbody>
             {this._createRows()}
          </tbody>
      )
    }
    return (<tbody></tbody>)
  }
}

Body.propTypes = {
  Data: PropTypes.any.isRequired
}

Body.defaultProps = {
  Data: []
}

export default Body