import React from 'react'
import d3 from 'd3'

class Dots extends React.Component {
  constructor (props) {
    super(props)
    this.state = {data: {}}
  }
  componentDidMount () {
  }
  render () {
    return (
      <div ref={"svgLayout"} className={"DotsD3_Container"}>
      </div>
    )
  }
}

Dots.propTypes = {
  Margin: React.PropTypes.number
}

Dots.defaultProps = {
  Margin: 20,
  Diameter: 120,
  Data: []
}

export default Dots
