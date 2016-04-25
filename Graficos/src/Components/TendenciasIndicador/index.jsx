import React, {Component, PropTypes} from 'react'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import Header from './Header.jsx'

class TendenciasIndicador extends Component {
  constructor (props) {
    super(props)
    this.state = {filterData: []}
  }
  render () {
    var linkData = this.linkState('filterData')
    console.log(linkData.value)
    return (
        <table>
           <Header DataDefinition={this.props.DataDefinition} />
           
        </table>
    )
  }
}

reactMixin(TendenciasIndicador.prototype, LinkedStateMixin)

TendenciasIndicador.propTypes = {
  Data: PropTypes.object.isRequired,
  DataDefinition: PropTypes.array.isRequired
}

export default TendenciasIndicador
