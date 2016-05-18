import React, {Component, PropTypes} from 'react'
import d3 from 'd3'
import SVGDots from './Dots/index.jsx'

class DotsD3 extends Component {
  constructor (props) {
    super(props)
    this.state = {data: {}}
  }
  componentDidMount () {
    switch (this.props.Type) {
      case 'Children':
        this.svg = new SVGDots({
          target: this.refs.rowSVG,
          key: this.props.Property,
          data: this.props.Data,
          margin: this.props.Margin,
          diameter: this.props.Diameter,
          format: this.props.Format
        })
        break
      case 'Semaphore':
        break
    }
  }
  render () {
    return (
      <div className={"DotsD3_Container"}>
         <svg ref='rowSVG' >
         </svg>
      </div>
    )
  }
}

DotsD3.propTypes = {
  Data: React.PropTypes.any,
  Margin: React.PropTypes.number,
  Diameter: React.PropTypes.number,
  Format: React.PropTypes.any,
  Color: React.PropTypes.any,
  Property: PropTypes.any,
  Type: PropTypes.string
}

DotsD3.defaultProps = {
  Margin: 20,
  Diameter: 70,
  Format: d3.format(',d'),
  Data: {},
  Type: 'Children'
}

export default DotsD3
