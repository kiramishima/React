import React, {Component, PropTypes} from 'react'

class Item extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
        <td>{this.props.Text}</td>
    )
  }
}

Item.propTypes = {
  Text: PropTypes.string
}

class ItemRow extends Component {
  constructor (props) {
    super(props)
    this._createElements = this._createElements.bind(this)
  }
  _createElements () {
    return this.props.Data.map((item, index) => {
      return <Item Text={item}/>
    })
  }
  render () {
    return (
        <tr>
          {this._createElements()}
        </tr>
    )
  }
}

ItemRow.propTypes = {
  Data: PropTypes.array.isRequired
}

export default ItemRow