import React, {Component, PropTypes} from 'react'

class ItemBar extends Component {
  render () {
    return (
      <div style={this.props.Style}>{this.props.Text}</div>
    )
  }
}

ItemBar.propTypes = {
  Style: PropTypes.any,
  Text: PropTypes.string
}

class ItemStatus extends Component {
  constructor (props) {
    super(props)
    // console.log(props)
    this._getItemStatus = this._getItemStatus.bind(this)
  }
  _getItemStatus () {
    var {status_success: success, status_warning: warning, status_error: alerta} = this.props.Data
    var types = [{value: success, type: typeof success, color: 'green'}, {value: warning, type: typeof warning, color: 'yellow'}, {value: alerta, type: typeof alerta, color: 'red'}]
    // console.log(types)
    var items = types.map((item, indx) => {
      // console.log(item)
      var el = null
      var perc = 33.333333333333336
      switch (item.type) {
        case 'string':
          el = <ItemBar Style={{width: perc + '%', background: item.color, textAlign: 'center', padding: '9px 0'}} Text={item.value}/>
          break

        case 'object':
          var str = item.value.reduce((a, b) => a + '\n\n\r' + b)
          el = <ItemBar Style={{width: perc + '%', background: item.color, textAlign: 'center', padding: '9px 0'}} Text={str}/>
          break
      }
      return el
    })
    return items
  }
  render () {
    var items = this._getItemStatus()
    return (
      <div style={{display: 'flex', fontWeight: 'bold', width: '100%'}} >
      {items}
      </div>
    )
  }
}

ItemStatus.propTypes = {
  Data: PropTypes.any
}

export default ItemBar
export default ItemStatus
