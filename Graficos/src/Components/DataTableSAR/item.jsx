import React, {Component} from 'react'

export default class Item extends Component {
    constructor (props) {
      super(props)
      this.state = {}
    }
    _getStyle () {
      var data = this.state
      console.log(data)
    }
    render () {
      return (
        <td style={this.props.style}>{this.props.content}</td>
      )
    }
}

Item.propTypes = {
  style: React.PropTypes.any,
  content: React.PropTypes.string.isRequired
}
