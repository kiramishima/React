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
	    .attr('width', 120)
	    .attr('height', 60)
	    // .append('g')
	    // .attr('transform', 'translate(' + this.diameter / 2 + ',' + this.diameter / 2 + ')')

	    this.circles = this._svg.selectAll('circle')
	    .data(this.data)
	    .enter()
	    .append('circle')
	    .attr('class', function (d) {
	      return `circle_${d.name}`
	    })
	    .attr('cy', 30)
	    .attr('cx', function (d, i) { return i * 25 + 30 })
	    .attr('r', function (d) { return d.total })
			.on('click', function (d) {
				console.log('Circle', d)
			})
    }
}

export default SVGSemaphore
