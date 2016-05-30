require('babel-polyfill')
require('expose?$!expose?jQuery!jquery')
import './sass/main.scss'
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
            {data: "name", name: "Project", label: "Proyecto", hidden: false},
            {data: "month", name: "iDate", label: "Fh. Registro", hidden: true},
            {data: "dProcesos", name: "dProcesos", label: "Desempeño de procesos", hidden: false, type: "semaphore"},
            {data: "dProductos", name: "dProductos", label: "Desempeño del producto/servicio", hidden: false, type: "semaphore"},
            {data: "sCliente", name: "sCliente", label: " Satisfacion del cliente", hidden: false, type: "semaphore"},
            {data: "dProveedor", name: "dProveedor", label: "Desempeño del proveedor", hidden: false, type: "semaphore"}
      ]
      ReactDOM.render(<Application key={"UUID-29"} UrlCatalogo='data_cat.json' Url={'data.json'} Metadata={metadata} />, document.querySelector('#appContainer'))
    } catch(error) {
        console.log(error)
    }
})()
