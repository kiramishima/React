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
      return (
          <div className='row'>
            <h3>Historico Mensual</h3>
            {
                this.props.Data.map((item) => <IndicadorItem key={JSON.stringify(item)} ItemData={item}/>)
            }
          </div>
      )
    }
}

IndicadorInfo.propTypes = {
  Data: PropTypes.array
}

export default IndicadorInfo
