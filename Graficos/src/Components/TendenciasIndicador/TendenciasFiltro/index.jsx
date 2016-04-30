import React, {Component, PropTypes} from 'react'
import _ from 'lodash'
import SearchForm from './searchform.jsx'
import ListFilter from './ListFilter.jsx'

class TendenciasFiltro extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    // var capturados = Object.keys(_.groupBy(this.props.TendenciasData, 'status'))
    // console.log('capturado', capturado)
    // this.setState({filtroCapturados: capturados})
  }
  render () {
    var capturados = []
    if (!_.isEmpty(this.props.TendenciasData.value)) {
      capturados = Object.keys(_.groupBy(this.props.TendenciasData.value.tendencias, 'status'))
    }
    return (
        <div>
           <SearchForm onSearch={this.props.onSearch}/>
           <hr />
           <ListFilter ParentText='Capturado' SubFilters={capturados} />
           <ListFilter ParentText='No Capturado' SubFilters={[]} />
        </div>
    )
  }
}

TendenciasFiltro.propTypes = {
  TendenciasData: PropTypes.array,
  OnChangeYear: PropTypes.func,
  OnChangeMonth: PropTypes.func,
  SelectedTendenciaFilter: PropTypes.func,
  onSearch: PropTypes.func
}

TendenciasFiltro.defaultProps = {
  TendenciasData: []
}

export default TendenciasFiltro
