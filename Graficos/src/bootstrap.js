// Carga React :P
import React from 'react'
import ReactDOM from 'react-dom'
require('d3')
import c3 from 'c3'

console.log(React, ReactDOM)


ReactDOM.render(
<h1>Hello, world!</h1>,
document.getElementById('contenido')
)

var chart = c3.generate({
    bindto: '#contenido',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    }
})
