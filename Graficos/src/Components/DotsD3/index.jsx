import React from 'react'
import d3 from 'd3'
import SVGDots from './Dots/index.jsx'

class DotsD3 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {data: {}}
    console.log(props)
  }
  componentDidMount () {
    this.svg = new SVGDots({
      target: this.refs.rowSVG,
      data: this.props.Data,
      margin: this.props.Margin,
      diameter: this.props.Diameter,
      format: this.props.Format
    })
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
  Color: React.PropTypes.any
}

DotsD3.defaultProps = {
  Margin: 20,
  Diameter: 70,
  Format: d3.format(',d'),
  Data: {}
}

export default DotsD3
