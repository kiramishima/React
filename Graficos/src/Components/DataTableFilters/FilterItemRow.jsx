import React, {Component} from 'react'

export default class FilterItemRow extends Component {
    constructor (props) {
      super(props)
      this.state = {}
    }

    render () {
      return (
          <li>
          <input type='checkbox' id={this.props.UUID} />
          {this.props.Label}
          </li>
      )
    }
}

FilterItemRow.propTypes = {
  UUID: React.PropTypes.string.isRequired,
  Label: React.PropTypes.string.isRequired
}
