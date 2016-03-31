// Carga React :P
require('babel-polyfill')
import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import DataTableSAR from './Components/DataTableSAR/dataTableSAR.jsx'
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
      ReactDOM.render(<DataTableSAR key={"UUID-12"} url={'data.json'} metadata={metadata}/>, document.querySelector('.table-responsive'))
    } catch(error) {
        console.log(error)
    }
})()
console.log(React, ReactDOM)

var metadata = [
    {data: "id", name: "data", label: "Id", hidden: true, render: onRender},
    {data: "iDate", name: "iDate", label: "Fh. Registro", hidden: false, render: onRender}
]

import Item from './Components/DataTableSAR/item.jsx'
import ItemRow from './Components/DataTableSAR/itemRow.jsx'
function buildHeader (data) {
    // var items = []
    data.forEach((item) => {
        /* console.log(item)
        var keys = Object.keys(item)
        keys.forEach((key) => {
            var stack = _.find(metadata, { 'data': key })
            console.log(key, typeof stack, _.hasIn(stack, 'render'))
            
            if (typeof stack !== 'undefined'){
                var props = {styles: {}, content: ''}
                props.styles.display = _.hasIn(stack, 'hidden') ? '' : 'none'
                props.content = _.hasIn(stack, 'render') ? stack.render(item[key]): onRender(item[key])
                items.push(<Item {...props} />)
            }
        })*/
        ReactDOM.render(<ItemRow key={item.id} metadata={metadata} item={item}/>, document.querySelector('tbody'))
    })
    // console.log(items)
}
