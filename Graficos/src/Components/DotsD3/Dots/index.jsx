import d3 from 'd3'

class SVGDots {
  constructor (config) {
    this.zoom = this.zoom.bind(this)
    this.zoomTo = this.zoomTo.bind(this)
    this.set(config)
    this.init()
  }
  set (config) {
    Object.assign(this, config)
  }
  init () {
    console.log('Initialize', this)
    // JSON Data
    var root = this.data
    // Colors from D3
    var color = d3.scale.linear()
    .domain([-1, 5])
    .range(['hsl(152,80%,80%)', 'hsl(228,30%,40%)'])
    .interpolate(d3.interpolateHcl)
    // Pack Group
    var pack = d3.layout.pack()
    // .children(function(d) {  return d.children1})
    .size([this.diameter - 4, this.diameter - 4])
    .value(function (d) { console.log(d); return d.total })
    // SVG D3 Ref Element
    this.chart = d3.select(this.target)
    .attr('width', this.diameter)
    .attr('height', this.diameter)
    .append('g')
    .attr('transform', 'translate(' + this.diameter / 2 + ',' + this.diameter / 2 + ')')

    this.focus = root
    var nodes = pack.nodes(root)
    this.view

    var focus = root
    var zoom = this.zoom
    var zoomTo = this.zoomTo
    this.circle = this.chart.selectAll('circle')
      .data(nodes)
      .enter().append('circle')
        .attr('class', function (d) { return d.parent ? d.children ? 'node' : 'node node--leaf' : 'node node--root' })
        .style('fill', function (d) { return d.children ? color(d.depth) : null })
        .on('click', function (d) { if (focus !== d) zoom(d); d3.event.stopPropagation() })

    var text = this.chart.selectAll('text')
      .data(nodes)
      .enter().append('text')
       .attr('class', 'label')
       .style('fill-opacity', function (d) { return d.parent === root ? 1 : 0 })
       .style('display', function (d) { return d.parent === root ? 'inline' : 'none' })
       .text(function (d) { return d.name })

    this.node = this.chart.selectAll('circle,text')

    d3.select('body')
    .on('click', function () { zoom(root) })

    zoomTo([root.x, root.y, root.r * 2 + this.margin])
  }
  zoom (d) {
    var focus0 = this.focus; this.focus = d
    var margin = this.margin
    var view = this.view
    var focus = this.focus
    var zoomTo = this.zoomTo
    var transition = d3.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween('zoom', function (d) {
          var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin])
          return function (t) { zoomTo(i(t)) }
        })

    transition.selectAll('text')
      .filter(function (d) { return d.parent === focus || this.style.display === 'inline' })
        .style('fill-opacity', function (d) { return d.parent === focus ? 1 : 0 })
        .each('start', function (d) { if (d.parent === focus) this.style.display = 'inline' })
        .each('end', function (d) { if (d.parent !== focus) this.style.display = 'none' })
  }
  zoomTo (v) {
    var k = this.diameter / v[2]; this.view = v
    this.node.attr('transform', function (d) { return 'translate(' + (d.x - v[0]) * k + ',' + (d.y - v[1]) * k + ')' })
    this.circle.attr('r', function (d) { return d.r * k })
  }
}

export default SVGDots
