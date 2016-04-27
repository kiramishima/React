import React, {Component, PropTypes} from 'react'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import Header from './Header.jsx'
import Body from './Body.jsx'
import TendenciasFiltro from './TendenciasFiltro/index.jsx'

class TendenciasIndicador extends Component {
  constructor (props) {
    super(props)
    this.state = {filterData: []}
  }
  render () {
    var linkData = this.linkState('filterData')
    console.log(linkData.value)
    return (
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6'>
             <TendenciasFiltro TendenciasData={this.props.Data.tendencias} />
          </div>
          <div className='col-md-6'>
            <table className={this.props.className}>
              <Header DataDefinition={this.props.DataDefinition} />
              <Body Data={this.props.Data.tendencias} DataDefinition={this.props.DataDefinition}/>
            </table>
          </div>
        </div>
      </div>
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
