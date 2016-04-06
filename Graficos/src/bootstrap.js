// Carga React :P
require('babel-polyfill')
import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import Application from './Components/Application/App.jsx'
// require('d3')
// import c3 from 'c3'

function onRender(val) {
    return `This is my value: ${val}`
}


(async () => {
    try {
      let data = await fetch('data.json')
      var parsedData = await data.json()
      // console.log('ES7 Async+fetch/data >>>', parsedData)
      // buildHeader(parsedData.data)
      // ReactDOM.render(<DataTableSAR key={"UUID-12"} url={'data.json'} metadata={metadata}/>, document.querySelector('.table-responsive'))
      var metadata = [
            {data: "id", name: "data", label: "Id", hidden: true, render: onRender},
            {data: "iDate", name: "iDate", label: "Fh. Registro", hidden: false, render: onRender}
      ]
      ReactDOM.render(<Application key={"UUID-29"} Url={'data.json'} Metadata={metadata} />, document.querySelector('#filterContent'))
    } catch(error) {
        console.log(error)
    }
})()

