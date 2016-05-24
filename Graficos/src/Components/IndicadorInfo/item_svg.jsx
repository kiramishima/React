import d3 from 'd3'

class ItemSVG {
  constructor (config) {
    this.set(config)
    this.init()
  }
  set (config) {
    Object.assign(this, config)
  }
  init () {
    // console.log('Initialize ItemSVG', this)
    var fnDetails = this.fnDetails
    // Creating Circle Status
    this.svg = d3.select(this.target)
    .attr('width', this.diameter)
    .attr('height', this.diameter)
    .append('g')
    .attr('transform', 'translate(' + this.diameter / 2 + ',' + this.diameter / 2 + ')')
    var className = `${this.color}`
    this.circles = this.svg.selectAll('circle')
     .data([50])
     .enter()
        .append('circle')
           .attr('fill', function (d) { return className })
           .attr('r', function (d) { return 15 })
           .on('click', fnDetails)
    var text = this.text
    this.text = this.svg.selectAll('text')
      .data([50])
      .enter().append('text')
       .attr('class', 'label')
       .style('fill-opacity', function (d) { return 1 })
       .text(function (d) { return text })
  }
}

export default ItemSVG
