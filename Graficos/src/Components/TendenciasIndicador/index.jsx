import React, {Component, PropTypes} from 'react'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import Header from './Header.jsx'
import Body from './Body.jsx'

class TendenciasIndicador extends Component {
  constructor (props) {
    super(props)
    this.state = {filterData: []}
  }
  render () {
    var linkData = this.linkState('filterData')
    console.log(linkData.value)
    return (
        <table className={this.props.className}>
           <Header DataDefinition={this.props.DataDefinition} />
           <Body Data={this.props.Data.tendencias} DataDefinition={this.props.DataDefinition}/>
        </table>
    )
  }
}

reactMixin(TendenciasIndicador.prototype, LinkedStateMixin)

TendenciasIndicador.propTypes = {
  className: PropTypes.string,
  Data: PropTypes.shape({
    status: PropTypes.string.isRequired,
    message: PropTypes.string,
    year: PropTypes.number,
    month: PropTypes.number,
    tendencias: PropTypes.array
  }),
  DataDefinition: PropTypes.array.isRequired
}

TendenciasIndicador.defaultProps = {
  className: 'table table-bordered table-striped',
  Data: {
    tendencias: []
  }
}

export default TendenciasIndicador
