import React, {Component} from 'react'

export default class ItemHeader extends Component {
    constructor (props) {
      super(props)
    }
    render () {
      return (
          <th style={this.props.Style}>{this.props.Label}</th>
      )
    }
}

ItemHeader.propTypes = {
  DataKey: React.PropTypes.string.isRequired,
  Label: React.PropTypes.string.isRequired,
  Style: React.PropTypes.object
}
