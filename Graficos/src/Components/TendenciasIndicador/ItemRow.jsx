import React, {Component, PropTypes} from 'react'

class Item extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  _getStyle () {}
  render () {
    return (
        <td></td>
    )
  }
}

class ItemRow extends Component {
  constructor (props) {
    super(props)
    this._createElements = this._createElements.bind(this)
  }
  _createElements () {
    return this.props.DataDefinition.map((item, index) => {
      var curr = this.props.ItemData[index]
      console.log('currItem', curr)
    })
  }
  render () {
    this._createElements()
    return (
        <tr>
        </tr>
    )
  }
}

ItemRow.propTypes = {
  ItemData: PropTypes.object.isRequired,
  DataDefinition: PropTypes.array.isRequired
}

export default ItemRow
