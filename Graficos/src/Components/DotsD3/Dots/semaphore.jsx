import d3 from 'd3'

class SVGSemaphore {
    constructor (config) {
      this.set(config)
      this.init()
    }
    set (config) {
      Object.assign(this, config)
    }
    init () {
    	console.log('Initialize', this)
	    this._svg = d3.select(this.target)
	    .attr('width', 50)
	    .attr('height', 100)
	    // .append('g')
	    // .attr('transform', 'translate(' + this.diameter / 2 + ',' + this.diameter / 2 + ')')

	    this.circles = this._svg.selectAll('circle')
	    .data(this.data)
	    .enter()
	    .append('circle')
	      .attr('class', function (d) {
	      	 return `circle_${d.name}`
	      })
	      .attr("cy", 15)
	      .attr("cx", function(d, i) { return i * 100 + 30 })
	      .attr("r", function(d) { return 12.5 })
    }
}

export default SVGSemaphore
