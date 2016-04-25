import React, {Component, PropTypes} from 'react'
import ItemRow from './ItemRow.jsx'

class Body extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {
    var def = Object.keys(this.props.DataDefinition)
    this.setState({definition: def})
  }
  render () {
    return (
        <tbody>
           {
               this.props.Data.map((item) => <ItemRow ItemData={item} DataDefinition={this.props.DataDefinition}/>)
           }
        </tbody>
    )
  }
}

Body.propTypes = {
  Data: PropTypes.array.isRequired,
  DataDefinition: PropTypes.array.isRequired
}

export default Body
