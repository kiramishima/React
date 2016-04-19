import React, {Component, PropTypes} from 'react'

class ItemStatus extends Component {
  constructor (props) {
    super(props)
  }
  _getItemStatus () {
    var {status_success: sucess, status_warning: warning, status_alert: alert} = this.props.Data
    var perc = 0
    var types = [typeof sucess, typeof warning, typeof alert]
    var items = types.map((item) => {
      var el = null
      switch (item.dato) {
        case item.data < 30:
          el = <div style='width: 30%;background: green;'>&nbsp;</div>
          break

        case item.data > 30 && item.data < 60:
          el = <div style='background: red; width: 20%;'>&nbsp;</div>
          break

        case item.data > 60 && item.data < 100:
          el = <div style='background: yellow; width: 50%;'>&nbsp;</div>
          break
        default:
          break
      }
      return el
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
