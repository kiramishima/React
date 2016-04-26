import React, {Component, PropTypes} from 'react'
import _ from 'lodash'

class TendenciasFiltro extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    var capturado = _.groupBy(this.props.TendenciasData, 'status')
    console.log('capturado', capturado)
  }
  render () {
    return (
        <div>
        {}
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
