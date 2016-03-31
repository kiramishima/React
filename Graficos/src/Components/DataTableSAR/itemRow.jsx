import React, {Component} from 'react'
import _ from 'lodash'
import Item from './item.jsx'

export default class ItemRow extends Component {
    constructor (props) {
      super(props)
      this.state = { childs: [] }
      this._createChildrensItem = this._createChildrensItem.bind(this)
    }
    componentWillMount () {
      this._createChildrensItem()
    }
    _createChildrensItem () {
      var keys = Object.keys(this.props.item)
      var items = []
      keys.forEach((key) => {
        var stack = _.find(this.props.metadata, { 'data': key })
        console.log(key, typeof stack, _.hasIn(stack, 'render'))
        if (typeof stack !== 'undefined') {
          var props = {styles: {}, content: ''}
          props.style = {'color': 'red'}
          // props.style.display = _.hasIn(stack, 'hidden') ? '' : 'none'
          props.content = _.hasIn(stack, 'render') ? stack.render(this.props.item[key]) : this.props.item
          items.push(<Item key={this.props.item.id + ' ' + key} {...props} />)
        }
      })
      this.setState({childs: items})
    }
    render () {
      return (
         <tr>{this.state.childs}</tr>
      )
    }
}

ItemRow.propTypes = {
  metadata: React.PropTypes.array.isRequired,
  item: React.PropTypes.object.isRequired
}

/* ItemRow.defaultProps = {

}*/
