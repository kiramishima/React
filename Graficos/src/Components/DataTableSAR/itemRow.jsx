import React, {Component} from 'react'
import Item from './item.jsx'
import DotsD3 from '../DotsD3/index.jsx'

export default class ItemRow extends Component {
    constructor (props) {
      super(props)
      this.state = {childs: []}
      this._createChildrensItem = this._createChildrensItem.bind(this)
    }
    componentWillMount () {
      this._createChildrensItem()
    }
    _createChildrensItem () {
      var keys = Object.keys(this.props.Item)
      var items = []
      keys.forEach((key) => {
        var stack = _.find(this.props.Metadata, {'data': key})
        if (typeof stack !== 'undefined') {
          var props = {styles: {}, content: ''}
          var style = {
            display: _.hasIn(stack, 'hidden') ? stack.hidden ? 'none' : '' : ''
          }
          props.style = style // {'color': 'red'}
          // props.style.display = _.hasIn(stack, 'hidden') ? '' : 'none'
          if (_.hasIn(stack, 'type') && stack.type === 'children') {
            // console.log('T', semaphores)
            var dataset = this.props.Item[key]
            props.content = <DotsD3 key={'SVG_' + this.props.Item.UUID} Data={dataset} Property={key}/>
          } else if (_.hasIn(stack, 'type') && stack.type === 'semaphore') {
            var semaphores = this.props.Item[key].semaphores
            // console.log('T', semaphores)
            props.content = <DotsD3 Query={this.props.Query} Type='Semaphore' Data={semaphores} Property={key}/>
          } else {
            props.content = _.hasIn(stack, 'render') ? stack.render(this.props.Item[key]) : this.props.Item[key]
          }
          items.push(<Item key={key + '_' + this.props.Item.UUID} {...props} />)
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
  Metadata: React.PropTypes.array.isRequired,
  Item: React.PropTypes.object.isRequired,
  Query: React.PropTypes.any
}

/* ItemRow.defaultProps = {

}*/
