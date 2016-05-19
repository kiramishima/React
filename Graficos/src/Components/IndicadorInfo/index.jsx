import React, {Component, PropTypes} from 'react'
import IndicadorItem from './indicador_item.jsx'

class IndicadorInfo extends Component {
    constructor (props) {
      super(props)
    }
    componentDidMount () {
        // this.setState({
            // route components are rendered with useful information, like URL params
            // historicos: findUserById(this.props.params.userId)
        // })
    }
    render () {
      console.log(this.props.Data.map((item) => item))
      return (
          <div className='row'>
            <div className='col-md-12'>
              <h3>Historico Mensual</h3>
              {
                  // this.props.Data.indicators.map((item) =>  <IndicadorItem key={JSON.stringify(item)} ItemData={item}/>)
              }
            </div>
          </div>
      )
    }
}

IndicadorInfo.propTypes = {
  Data: PropTypes.array
}

IndicadorInfo.defaultProps = {
  Data: []
}

export default IndicadorInfo
