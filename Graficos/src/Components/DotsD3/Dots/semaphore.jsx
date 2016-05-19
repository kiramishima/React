import d3 from 'd3'
import qs from 'qs'

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
       var query = this.query
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
				query.semaphore = d.semaphore
				window.open(`url?${qs.stringify(query)}`)
				// console.log('Circle', d, query)
			})
    }
}

export default SVGSemaphore
