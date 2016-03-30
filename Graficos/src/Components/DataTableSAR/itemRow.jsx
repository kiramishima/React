import React, {Component} from 'react'

export default class extends Component {
    constructor (props) {
      super(props)
      this.state = { items: [] }
      this._getItems = this._getItems.bind(this)
    }
    _getItems () {
      return []
    }
    render () {
      var items = this._getItems()
      return (
         <tr>
         {items}
         </tr>
      )
    }
}
