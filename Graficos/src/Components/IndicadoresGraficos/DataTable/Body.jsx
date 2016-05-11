import React, {Component, PropTypes} from 'react'

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
      var items = this.props.Data.value.tendencias
      return (
          <tbody>
             {
                 items.map((item) => <ItemRow key={`ItemRow_${item.UUID}`} ItemData={item} DataDefinition={this.props.DataDefinition}/>)
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