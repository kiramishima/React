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
              this.setState({data: response})
          } catch(error) {
            console.log('TendenciasApp Error: ', error)
          }
      })()
  }
  componentDidMount () {}
  _enableDisableRadioFilters () {}
  findByValue (value) {
    
  }
  render () {
    var linkData = this.linkState('data')
    return (
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6'>
             <TendenciasFiltro TendenciasData={linkData} onSearch={this.search} onFilter={this.findByValue}/>
          </div>
          <div className='col-md-6'>
            <table className={this.props.className}>
              <Header DataDefinition={this.props.DataDefinition} />
              <Body Data={linkData} DataDefinition={this.props.DataDefinition}/>
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
