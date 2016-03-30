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
        <td>{this.props.content}</td>
      )
    }
}

React.propTypes = {
  content: React.PropTypes.string
}
