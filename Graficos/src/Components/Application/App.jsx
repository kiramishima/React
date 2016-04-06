import React, {Component} from 'react'
import SearchBar from '../DataTableFilters/searchbar.jsx'
import FilterItemList from '../DataTableFilters/FilterItemList.jsx'
import DataTableSAR from '../DataTableSAR/dataTableSAR.jsx'

export default class Application extends Component {
    constructor (props) {
      super(props)
      this.state = { data: [], dtStart: '', dtEnd: '', selectedItems: []}
      this.onSearch = this.onSearch.bind(this)
      this.changeHandler = this.changeHandler.bind(this)
      this._selectedData = this._selectedData.bind(this)
    }
    _getData () {
      (async () => {
          var {dtStart: dtStart, dtEnd: dtEnd} = this.state
          var req = await fetch(this.props.Url, { 
              method: 'GET' /* , 
              headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
              },
              body: JSON.stringify({dtStart: dtStart, dtEnd: dtEnd}) */
          })
          var data = await req.json()
          this.setState({data: data.data})
      })()
    }
    _selectedData (selectedItems) {
      console.log('selectedItems', selectedItems)
      this.setState({selectedItems: selectedItems})
    }
    onSearch () {
      // console.log(this.state)
      this._getData()
    }
    changeHandler (states) {
        console.log('states', states)
        this.setState({dtStart: states.dtStart, dtEnd: states.dtEnd})
    }
    render () {
      // this.onSearch()
      var props = {
          Metadata: this.props.Metadata,
          Data: this.state.data
      }
      return (
          <div className={"DataTableApplication"}>
            <div className={"DataTableContainerLayout"}>
                <SearchBar key={"UUID-22"} onChange={this.changeHandler} onSearch={this.onSearch}/>
                <FilterItemList key={"UUID-15"} Items={this.state.data} onSelected={this._selectedData} /> 
            </div>
            <div>
                <DataTableSAR key={"UUID-12"} {...props}/>
            </div>
          </div>
      )
    }
}
// 
Application.propTypes = {
  Metadata: React.PropTypes.array.isRequired,
  Url: React.PropTypes.string.isRequired
}
