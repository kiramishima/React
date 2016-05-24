import React, {Component, PropTypes} from 'react'
import IndicadorItem from './indicador_item.jsx'

class ProcessInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {name: '', indicators: []}
  }
  componentDidMount () {
    this.setState({name: this.props.Name, indicators: this.props.Indicators})
  }
  render () {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <h4 style={{textTransform: "capitalize"}}>{this.state.name}</h4>
          <hr style={{border: 'solid thin rebeccapurple'}}/>
          {
            this.state.indicators.map((item) => <IndicadorItem key={item.indicador} Indicador={item}/>)
          }
        </div>
      </div>
    )
  }
}

ProcessInfo.propTypes = {
  Name: PropTypes.string,
  Indicators: PropTypes.array
}

class IndicadorInfo extends Component {
    constructor (props) {
      super(props)
    }
    componentDidMount () {}
    render () {
      // console.log(this.props.Data.map((item) => item))
      return (
          <div className='row'>
            <div className='col-md-12'>
              <h3>Historico Mensual</h3>
              {
                this.props.Data.map((item) => <ProcessInfo key={item.name} Name={item.name} Indicators={item.indicators} />)
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
