import React, {Component, PropTypes} from 'react'

class ItemStatus extends Component {
  constructor (props) {
    super(props)
  }
  _getItems () {
    var items = this.props.Data.map((item) => {
      switch (item.dato) {
        case item.data < 30:
          <div style='width: 30%;background: green;'>&nbsp;</div>
          break

        case item.data > 30 && item.data < 60:
          <div style='background: red; width: 20%;'>&nbsp;</div>
          break

        case item.data > 60 && item.data < 100:
          <div style='background: yellow; width: 50%;'>&nbsp;</div>
          break
        default:
          break
      }
    })
    return items
  }
  render () {
    var items = this._getItems()
    return (
      <div style='display: flex;font-weight: bold;width: 100%;'>
      {items}
      </div>
    )
  }
}

ItemStatus.propTypes = {
  Data: PropTypes.any
}

export default ItemStatus
