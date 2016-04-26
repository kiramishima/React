import React, {Component, PropTypes} from 'react'

class Header extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
        <thead>
           <tr>
           {
               this.props.DataDefinition.map((item) => <th key={item.label} style={{display: item.hidden ? 'none' : ''}}>{item.label}</th>)
           }
           </tr>
        </thead>
    )
  }
}

Header.propTypes = {
  DataDefinition: PropTypes.array.isRequired
}

export default Header
