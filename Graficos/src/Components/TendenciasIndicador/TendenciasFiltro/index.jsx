import React, {Component, PropTypes} from 'react'
import SearchForm from './searchform.jsx'
import ListFilter from './ListFilter.jsx'

class TendenciasFiltro extends Component {
  constructor (props) {
    super(props)
    this.findByValue = this.findByValue.bind(this)
  }
  findByValue (parent, child) {
    if (typeof this.props.onFilter === 'function') {
      if (child !== null) {
         this.props.onFilter(parent, child)
      }else {
         this.props.onFilter(parent, null)
      }
    }
  } 
  render () {
    var capturados = []
    var lists = []
    if (!_.isEmpty(this.props.TendenciasData.value)) {
      capturados = Object.keys(_.groupBy(this.props.TendenciasData.value.indicators, 'semaphore'))
      var subfilters = ['Todos', ..._.filter(capturados, function(o){ return o != ''})]
      lists = ['Capturado', 'No Capturado'].map((txt) => {
        if (txt !== 'No Capturado') {
          return <ListFilter key={txt} ParentText={txt} SubFilters={subfilters} onFilter={this.findByValue}/>
        }
        return <ListFilter key={txt} ParentText={txt} SubFilters={[]} onFilter={this.findByValue}/>
      })
    }
    return (
        <div>
           <SearchForm onSearch={this.props.onSearch}/>
           <hr />
           {lists}
        </div>
    )
  }
}

TendenciasFiltro.propTypes = {
  TendenciasData: PropTypes.any,
  OnChangeYear: PropTypes.func,
  OnChangeMonth: PropTypes.func,
  SelectedTendenciaFilter: PropTypes.func,
  onSearch: PropTypes.func,
  onFilter: PropTypes.func
}

TendenciasFiltro.defaultProps = {
  TendenciasData: []
}

export default TendenciasFiltro
