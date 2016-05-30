require('babel-polyfill')
require('expose?$!expose?jQuery!jquery')
import './sass/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import d3 from 'd3'
import moment from 'moment'
import IndicadorInfo from './Components/IndicadorInfo/index.jsx'

(async () => {
    try {
      let http = await fetch('process.json')
      var mockData = await http.json()
      
      ReactDOM.render(<IndicadorInfo key={"UUID-78"} Data={mockData.process} />, document.querySelector('#appContainer'))
    } catch(error) {
        console.log(error)
    }
})()
