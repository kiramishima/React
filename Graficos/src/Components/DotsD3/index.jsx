import React from 'react'
import d3 from 'd3'

var json = {
  'dtResultados': [],
  'dtLinear': [],
  'dtSVG': []
}

class DotsD3 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {data: {}}
  }
  componentDidMount () {
    this.setState({data: json})
    this._svg = d3.select("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .append("g")
    .attr("transform", "translate(" + this.props.Diameter / 2 + "," + this.props.Diameter / 2 + ")")
  }
  render () {
    return (
      <div className={"DotsD3_Container"}>
         <svg>
         </svg>
      </div>
    )
  }
}

DotsD3.propTypes = {}

export default DotsD3
