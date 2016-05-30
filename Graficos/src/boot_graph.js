require('babel-polyfill')
require('expose?$!expose?jQuery!jquery')
import './sass/main.scss'
import './sass/Indicadores_Graficos.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import d3 from 'd3'
import moment from 'moment'
import GraphIndicadorApp from './Components/IndicadoresGraficos/index.jsx'


(async () => {
    try {
      ReactDOM.render(<GraphIndicadorApp key={"UUID-99"} Url='info.json' UrlIndicadores='macroprocesos.json'/>, document.querySelector('#appContainer'))
    } catch(error) {
        console.log(error)
    }
})()
