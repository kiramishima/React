import React, {Component, PropTypes} from 'react'

class Header extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    // console.log(this.props.DataDefinition.value.length)
    if (this.props.DataDefinition.value.length > 0) {
      var items = this.props.DataDefinition.value
      return (
          <thead>
             <tr>
             {
                 items.map((item) => <th key={item.header}>{item.header}</th>)
             }
             </tr>
          </thead>
      )
    }
    return (<thead></thead>)
  }
}

Header.propTypes = {
  DataDefinition: PropTypes.any
}

export default Header