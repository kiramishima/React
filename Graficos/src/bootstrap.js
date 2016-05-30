// Carga React :P
require('babel-polyfill')
require('expose?$!expose?jQuery!jquery')
// import './sass/Indicadores_Graficos.scss'
import './sass/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import d3 from 'd3'
import moment from 'moment'
// import Application from './Components/Application/App.jsx'
// import GraphIndicadorApp from './Components/IndicadoresGraficos/index.jsx'
// import IndicadorInfo from './Components/IndicadorInfo/index.jsx'
import TendenciasApp from './Components/TendenciasIndicador/TendenciasApp.jsx'

function onRender(val) {
    
    var dt = moment(parseInt(val)).format('L')
    return dt
}

 
(async () => {
    try {
      // let data = await fetch('data.json')
      // var parsedData = await data.json()
      // console.log('ES7 Async+fetch/data >>>', parsedData)
      // buildHeader(parsedData.data)
      // ReactDOM.render(<DataTableSAR key={"UUID-12"} url={'data.json'} metadata={metadata}/>, document.querySelector('#appContainer'))
      /*var metadata = [
            {data: "UUID", name: "UUID", label: "Id", hidden: true},
            {data: "name", name: "Project", label: "Proyecto", hidden: false},
            {data: "month", name: "iDate", label: "Fh. Registro", hidden: true},
            {data: "dProcesos", name: "dProcesos", label: "Desempeño de procesos", hidden: false, type: "semaphore"},
            {data: "dProductos", name: "dProductos", label: "Desempeño del producto/servicio", hidden: false, type: "semaphore"},
            {data: "sCliente", name: "sCliente", label: " Satisfacion del cliente", hidden: false, type: "semaphore"},
            {data: "dProveedor", name: "dProveedor", label: "Desempeño del proveedor", hidden: false, type: "semaphore"}
      ]
      ReactDOM.render(<Application key={"UUID-29"} UrlCatalogo='data_cat.json' Url={'data.json'} Metadata={metadata} />, document.querySelector('#appContainer'))
      */
      // Recibimos los parametros del otro tablero
      // let http = await fetch('process.json')
      // var mockData = await http.json()
      
      // ReactDOM.render(<IndicadorInfo key={"UUID-78"} Data={mockData.process} />, document.querySelector('#appContainer'))
      var DataDefinition = [
            {data: "Id", label: "Id", hidden: true},
            {data: "macro_name", label: "Macroproceso", hidden: false},
            {data: "service_name", label: "Servicio", hidden: false},
            {data: "process_name", label: "Proceso", hidden: false},
            {data: "ind_name", label: "Indicador", hidden: false},
            {data: "value", label: "Valor", hidden: false},
            {data: "semaphore", label: "", hidden: false, type: "svg"}
      ]
      // let http2 = await fetch('tendencia.json')
      // var tendenciaMock = await http2.json()
      let urlTendencias = 'tendencia.json'
      ReactDOM.render(<TendenciasApp key={"UUID-79"} Url={urlTendencias} DataDefinition={DataDefinition} />, document.querySelector('#appContainer'))
      // ReactDOM.render(<GraphIndicadorApp key={"UUID-99"} Url='info.json' UrlIndicadores='macroprocesos.json'/>, document.querySelector('#appContainer'))
    } catch(error) {
        console.log(error)
    }
})()


