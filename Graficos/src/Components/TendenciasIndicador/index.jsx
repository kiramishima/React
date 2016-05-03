import React, {Component, PropTypes} from 'react'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import _ from 'lodash'
import Header from './Header.jsx'
import Body from './Body.jsx'
import TendenciasFiltro from './TendenciasFiltro/index.jsx'

class TendenciasIndicador extends Component {
  constructor (props) {
    super(props)
    this.state = {data: []}
  }
  componentDidMount () {
    console.log(_.isEmpty(this.props.Data))
    if (!_.isEmpty(this.props.Data)) {
      this.setState({data: this.props.Data.tendencias})
    }
  }
  render () {
    var linkData = this.linkState('data')
    console.log('data', linkData.value)
    return (
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6'>
             <TendenciasFiltro TendenciasData={linkData} onSearch={this.props.onSearch}/>
          </div>
          <div className='col-md-6'>
            <table className={this.props.className}>
              <Header DataDefinition={this.props.DataDefinition} />
              <Body Data={linkData.value} DataDefinition={this.props.DataDefinition}/>
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
    status: PropTypes.string,
    message: PropTypes.string,
    year: PropTypes.number,
    month: PropTypes.number,
    tendencias: PropTypes.array
  }),
  DataDefinition: PropTypes.array.isRequired,
  onSearch: PropTypes.func
}

TendenciasIndicador.defaultProps = {
  className: 'table table-bordered table-striped',
  Data: {
    tendencias: []
  }
}

export default TendenciasIndicador
