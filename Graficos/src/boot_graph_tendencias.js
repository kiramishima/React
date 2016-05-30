require('babel-polyfill')
require('expose?$!expose?jQuery!jquery')
import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import d3 from 'd3'
import moment from 'moment'
import './sass/main.scss'
import TendenciasApp from './Components/TendenciasIndicador/TendenciasApp.jsx'

(async () => {
    try {
      var DataDefinition = [
            {data: "Id", label: "Id", hidden: true},
            {data: "macro_name", label: "Macroproceso", hidden: false},
            {data: "service_name", label: "Servicio", hidden: false},
            {data: "process_name", label: "Proceso", hidden: false},
            {data: "ind_name", label: "Indicador", hidden: false},
            {data: "value", label: "Valor", hidden: false},
            {data: "semaphore", label: "", hidden: false, type: "svg"}
      ]

      let urlTendencias = 'tendencia.json'
      ReactDOM.render(<TendenciasApp key={"UUID-79"} Url={urlTendencias} DataDefinition={DataDefinition} />, document.querySelector('#appContainer'))
    } catch(error) {
        console.log(error)
    }
})()
