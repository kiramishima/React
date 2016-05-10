require('babel-polyfill')
import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import d3 from 'd3'
import moment from 'moment'
import Application from './Components/Application/App.jsx'

function onRender(val) {
    
    var dt = moment(parseInt(val)).format('L')
    return dt
}


(async () => {
    try {
      let data = await fetch('data.json')
      var parsedData = await data.json()
      var metadata = [
            {data: "UUID", name: "UUID", label: "Id", hidden: true},
            {data: "Project", name: "Project", label: "Proyecto", hidden: false},
            {data: "iDate", name: "iDate", label: "Fh. Registro", hidden: false, render: onRender},
            {data: "dProcesos", name: "dProcesos", label: "Desempeño de procesos", hidden: false, type: "children"},
            {data: "dProductos", name: "dProductos", label: "Desempeño del producto/servicio", hidden: false, type: "children"},
            {data: "sCliente", name: "sCliente", label: " Satisfacion del cliente", hidden: false, type: "children"},
            {data: "dProveedor", name: "dProveedor", label: "Desempeño del proveedor", hidden: false, type: "children"}
      ]
      ReactDOM.render(<Application key={"UUID-29"} Url={'data.json'} Metadata={metadata} />, document.querySelector('#appContainer'))
    } catch(error) {
        console.log(error)
    }
})()
