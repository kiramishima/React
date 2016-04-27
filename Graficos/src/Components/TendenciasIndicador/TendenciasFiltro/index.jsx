import React, {Component, PropTypes} from 'react'
import _ from 'lodash'
import SearchForm from './searchform.jsx'

class TendenciasFiltro extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    var capturados = Object.keys(_.groupBy(this.props.TendenciasData, 'status'))
    // console.log('capturado', capturado)
    this.setState({filtroCapturados: capturados})
  }
  render () {
    return (
        <div>
           <SearchForm />
           <hr />
        </div>
    )
  }
}

TendenciasFiltro.propTypes = {
  TendenciasData: PropTypes.array,
  OnChangeYear: PropTypes.func,
  OnChangeMonth: PropTypes.func,
  SelectedTendenciaFilter: PropTypes.func
}

TendenciasFiltro.defaultProps = {
  TendenciasData: []
}

export default TendenciasFiltro
