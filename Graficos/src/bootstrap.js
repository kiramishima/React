// Carga React :P
require('babel-polyfill')
import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import Application from './Components/Application/App.jsx'
import d3 from 'd3'
// import c3 from 'c3'

function onRender(val) {
    return `This is my value: ${val}`
}


(async () => {
    try {
      let data = await fetch('data.json')
      var parsedData = await data.json()
      // console.log('ES7 Async+fetch/data >>>', parsedData)
      // buildHeader(parsedData.data)
      // ReactDOM.render(<DataTableSAR key={"UUID-12"} url={'data.json'} metadata={metadata}/>, document.querySelector('.table-responsive'))
      var metadata = [
            {data: "id", name: "data", label: "Id", hidden: true, render: onRender},
            {data: "iDate", name: "iDate", label: "Fh. Registro", hidden: false, render: onRender}
      ]
      ReactDOM.render(<Application key={"UUID-29"} Url={'data.json'} Metadata={metadata} />, document.querySelector('#filterContent'))
    } catch(error) {
        console.log(error)
    }
})()
/// D#

var margin = 20,
    diameter = 70,
    format = d3.format(",d");
    
var color = d3.scale.linear()
    .domain([-1, 5])
    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
    .interpolate(d3.interpolateHcl);

var pack = d3.layout.pack()
    // .children(function(d) {  return d.children1})
    .size([diameter - 4, diameter - 4])
    .value(function(d) { console.log(d); return d.total; })

var svg = d3.select('#mySVG')
.attr("width", diameter)
.attr("height", diameter)
.append("g")
.attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")")
// .attr("transform", "translate(2,2)")

var root = {
    UUID: "XXXD-YYYF-UUUG-IIIH",
    children: [
        {
            name: "Analitycs",
            children: [
                {
                    name: "Clusters",
                    children: [
                        {name: "Processors", total: 3954},
                        {name: "Memory", total: 5969}
                    ]
                },
                {
                    name: "Langs",
                    children: [
                        {name: "Elixir", total: 7840},
                        {name: "Go", total: 5914}
                    ]
                }
            ]
        }
    ]
}
var focus = root,
      nodes = pack.nodes(root),
      view
      
var circle = svg.selectAll("circle")
      .data(nodes)
    .enter().append("circle")
      .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
      .style("fill", function(d) { return d.children ? color(d.depth) : null; })
      .on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

  var text = svg.selectAll("text")
      .data(nodes)
    .enter().append("text")
      .attr("class", "label")
      .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
      .style("display", function(d) { return d.parent === root ? "inline" : "none"; })
      .text(function(d) { return d.name; });

  var node = svg.selectAll("circle,text");

  d3.select("body")
      // .style("background", color(-1))
      .on("click", function() { zoom(root); });

  zoomTo([root.x, root.y, root.r * 2 + margin]);

  function zoom(d) {
    var focus0 = focus; focus = d;

    var transition = d3.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween("zoom", function(d) {
          var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
          return function(t) { zoomTo(i(t)); };
        });

    transition.selectAll("text")
      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
        .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
        .each("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .each("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
  }

  function zoomTo(v) {
    var k = diameter / v[2]; view = v;
    node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
    circle.attr("r", function(d) { return d.r * k; });
  }

/* console.log('pack.nodes', pack.nodes(root))

var node = svg.datum(root).selectAll(".node")
      .data(pack.nodes)
    .enter().append("g")
      .attr("class", function(d) { 
          console.log('d', d);
          console.log('keys', Object.keys(d)); 
          return d.children1 ? "node" : "leaf node"; 
      })
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("title")
      .text(function(d) { return d.name + (d.children1 ? "" : ": " + format(d.total)); });

  node.append("circle")
      .attr("r", function(d) { return d.r; });

  node.filter(function(d) { return !d.children1; }).append("text")
      .attr("dy", ".3em")
      .style("text-anchor", "middle")
      .text(function(d) { return d.name.substring(0, d.r / 3); })
      
d3.select(self.frameElement).style("height", diameter + "px") */

