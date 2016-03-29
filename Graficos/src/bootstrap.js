// Carga React :P
import React from 'react'
import ReactDOM from 'react-dom'
// require('d3')
// import c3 from 'c3'
console.log(React, ReactDOM)
var data = await fetch('data.json')
var json = data.json()
console.log(json)
