import React, {Component, PropTypes} from 'react'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import _ from 'lodash'
import Header from './Header.jsx'
import Body from './Body.jsx'
import TendenciasFiltro from './TendenciasFiltro/index.jsx'

class TendenciasApp extends Component {
  constructor (props) {
    super(props)
    this.state = {data: {}, filterData: {}}
    this.search = this.search.bind(this)
    this.findByValue = this.findByValue.bind(this)
  }
  initialize () {}
  search (m, y) {
      (async () => {
          try {
              var request = await fetch(this.props.Url)
              var response = await request.json()
              this.setState({data: response, filterData: response})
          } catch(error) {
            console.log('TendenciasApp Error: ', error)
          }
      })()
  }
  componentDidMount () {}
  _enableDisableRadioFilters () {}
  findByValue (pvalue, cvalue) {
     var cdata = Object.assign({}, this.state.data)
     if (cvalue !== null){
        if (cvalue === 'Todos'){
          var fdata = _.filter(cdata.tendencias, function(o){ return o.status != ''})
          cdata.tendencias = fdata
          this.setState({filterData: cdata})
        }else{
          var fdata = _.filter(cdata.tendencias, function(o){ return o.status == cvalue})
          cdata.tendencias = fdata
          this.setState({filterData: cdata})
        }
     }else {
        var fdata = _.filter(cdata.tendencias, function(o){ return o.status == ''})
        cdata.tendencias = fdata
        this.setState({filterData: cdata})
     }
  }
  render () {
    var linkData = this.linkState('data')
    var linkFilterData = this.linkState('filterData')
    return (
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6'>
             <TendenciasFiltro TendenciasData={linkData} onSearch={this.search} onFilter={this.findByValue}/>
          </div>
          <div className='col-md-6'>
            <table className={this.props.className}>
              <Header DataDefinition={this.props.DataDefinition} />
              <Body Data={linkFilterData} DataDefinition={this.props.DataDefinition}/>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

reactMixin(TendenciasApp.prototype, LinkedStateMixin)

TendenciasApp.propTypes = {
  Url: PropTypes.string.isRequired,
  DataDefinition: PropTypes.array.isRequired,
  className: PropTypes.string
}

TendenciasApp.defaultProps = {
  className: 'table table-bordered table-striped',
  DataDefinition: []
}

export default TendenciasApp
