import React, {Component, PropTypes} from 'react'
import d3 from 'd3'
import SVGDots from './Dots/index.jsx'
import SVGSemaphore from './Dots/semaphore.jsx'

class DotsD3 extends Component {
  constructor (props) {
    super(props)
    this.state = {data: {}}
  }
  componentDidMount () {
    console.log(this.props.Type)
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
        this.svg = new SVGSemaphore({
          target: this.refs.rowSVG,
          key: this.props.Property,
          data: this.props.Data,
          margin: this.props.Margin,
          diameter: this.props.Diameter,
          query: this.props.Query
        })
        break
    }
  }
  render () {
    return (
      <svg ref='rowSVG'></svg>
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
  Type: PropTypes.string,
  Query: PropTypes.any
}

DotsD3.defaultProps = {
  Margin: 20,
  Diameter: 70,
  Format: d3.format(',d'),
  Data: {},
  Type: 'Children',
  Query: ''
}

export default DotsD3
