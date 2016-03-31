import React, {Component} from 'react'
import _ from 'lodash'

export default class ItemHeader extends Component {
    constructor (props) {
      super(props)
    }
    render () {
      return (
          <th>{this.props.label}</th>
      )
    }
}

ItemHeader.propTypes = {
  dataKey: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  style: React.PropTypes.object
}
