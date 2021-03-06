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
    if (!_.isEmpty(this.props.Data.value)) {
      var items = this.props.Data.value.indicators
      return (
          <tbody>
             {
                 items.map((item) => <ItemRow key={`ItemRow_${item.Id}`} ItemData={item} DataDefinition={this.props.DataDefinition}/>)
             }
          </tbody>
      )
    }
    return (<tbody></tbody>)
  }
}

Body.propTypes = {
  Data: PropTypes.any.isRequired,
  DataDefinition: PropTypes.array.isRequired
}

Body.defaultProps = {
  Data: [],
  DataDefinition: []
}

export default Body
