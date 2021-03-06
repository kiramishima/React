import React, {Component} from 'react'

export default class FilterItemRow extends Component {
    constructor (props) {
      super(props)
      this.state = {}
      this.onClick = this.onClick.bind(this)
    }
    onClick (e) {
      if (typeof this.props.onClick === 'function') {
        this.props.onClick(this.props.Item, e.target.checked)
      }
    }
    render () {
      return (
          <li>
            <div className='checkbox'>
                <label>
                   <input type='checkbox' onClick={this.onClick} id={this.props.UUID}/> {this.props.Label}
                </label>
            </div>
          </li>
      )
    }
}

FilterItemRow.propTypes = {
  Item: React.PropTypes.object.isRequired,
  UUID: React.PropTypes.any.isRequired,
  Label: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
}
