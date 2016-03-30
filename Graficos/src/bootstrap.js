// Carga React :P
require('babel-polyfill')
import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
// require('d3')
// import c3 from 'c3'

function onRender(val) {
    return `This is my value: ${val}`
}


(async () => {
    try {
      let data = await fetch('data.json')
      var parsedData = await data.json()
      console.log('ES7 Async+fetch/data >>>', parsedData)
      buildHeader(parsedData.data)
    } catch(error) {
        console.log(error)
    }
})()
console.log(React, ReactDOM)

var metadata = [
    {data: "id", hidden: true, render: onRender},
    {data: "iDate", hidden: false, render: onRender}
]

import Item from './Components/DataTableSAR/item.jsx'
function buildHeader (data) {
    var res = data.map((item) => {
        var keys = Object.keys(item)
        var props = {styles: {}, content: ''}
        keys.forEach((key) => {
            var stack = _.find(metadata, { 'data': key })
            console.log(key, stack, _.hasIn(stack, 'render'))
            
            props.styles.display = _.hasIn(stack, 'hidden') ? '' : 'none'
            props.content = _.hasIn(stack, 'render') ? stack.render(item[key]): onRender(item[key])
            
        })
        return <Item {...props} />
        /*var props = {}
        props.style = {}
        props.content = ":-P"
        metadata.forEach((obj) => {
            if (item.id === obj.data) {
                if (obj.hidden) {
                    props.style.display = 'none'
                }
                if (obj.hasOwnProperty('render')){
                    props.content = obj.render()
                }
            }
        })
        return <Item {...props} />
        // return '<tr></tr>';*/
    })
    console.log(res)
}
