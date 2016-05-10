require('babel-polyfill')
import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import d3 from 'd3'
import moment from 'moment'
import './sass/main.scss'
import IndicadorInfo from './Components/IndicadorInfo/index.jsx'

function onRender(val) {
    
    var dt = moment(parseInt(val)).format('L')
    return dt
}


(async () => {
    try {
      let http = await fetch('indicador.json')
      var mockData = await http.json()
      
      ReactDOM.render(<IndicadorInfo key={"UUID-78"} Data={mockData.indicadores} />, document.querySelector('#appContainer'))
    } catch(error) {
        console.log(error)
    }
})()
