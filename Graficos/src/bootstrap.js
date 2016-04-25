// Carga React :P
require('babel-polyfill')
import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import Application from './Components/Application/App.jsx'
import d3 from 'd3'
import moment from 'moment'
import IndicadorInfo from './Components/IndicadorInfo/index.jsx'

function onRender(val) {
    
    var dt = moment(parseInt(val)).format('L')
    return dt
}


(async () => {
    try {
      let data = await fetch('data.json')
      var parsedData = await data.json()
      // console.log('ES7 Async+fetch/data >>>', parsedData)
      // buildHeader(parsedData.data)
      // ReactDOM.render(<DataTableSAR key={"UUID-12"} url={'data.json'} metadata={metadata}/>, document.querySelector('#appContainer'))
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
      
      // let http = await fetch('indicador.json')
      // var mockData = await http.json()
      
      // ReactDOM.render(<IndicadorInfo key={"UUID-78"} Data={mockData.indicadores} />, document.querySelector('#pruebas'))
      var metadata = [
            {data: "UUID", name: "UUID", label: "Id", hidden: true},
            {data: "Project", name: "Project", label: "Proyecto", hidden: false},
            {data: "iDate", name: "iDate", label: "Fh. Registro", hidden: false, render: onRender},
            {data: "dProcesos", name: "dProcesos", label: "Desempeño de procesos", hidden: false, type: "children"},
            {data: "dProductos", name: "dProductos", label: "Desempeño del producto/servicio", hidden: false, type: "children"},
            {data: "sCliente", name: "sCliente", label: " Satisfacion del cliente", hidden: false, type: "children"},
            {data: "dProveedor", name: "dProveedor", label: "Desempeño del proveedor", hidden: false, type: "children"}
      ]
    } catch(error) {
        console.log(error)
    }
})()


