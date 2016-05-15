import React, {Component} from 'react'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import Loader from 'react-loader'
import SearchBar from '../DataTableFilters/searchbar.jsx'
import FilterItemList from '../DataTableFilters/FilterItemList.jsx'
import DataTableSAR from '../DataTableSAR/dataTableSAR.jsx'
import '../../sass/main.scss'

class Application extends Component {
    constructor (props) {
      super(props)
      this.state = {loaded: true, data: [], dtStart: '', dtEnd: '', selectedItems: []}
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
          this.setState({data: data.data, loaded: true})
      })()
    }
    _selectedData (selectedItems) {
      console.log('selectedItems', selectedItems)
      this.setState({selectedItems: selectedItems})
    }
    onSearch () {
      this.setState({loaded: false})
      this._getData()
    }
    changeHandler (states) {
        // console.log('states', states)
        this.setState({dtStart: states.dtStart, dtEnd: states.dtEnd})
    }
    render () {
      var dt
      var linkData = this.linkState('selectedItems')
      if (this.state.selectedItems.length !== 0) {
        var props = {
            Metadata: this.props.Metadata,
            Data: linkData.value
        }
        dt = <DataTableSAR key={"UUID-12"} {...props}/>
      }
      
      return (
          <div className="row">
            <div className="col-md-4 col-sm-3">
                <SearchBar key={"UUID-22"} onChange={this.changeHandler} onSearch={this.onSearch}/>
                <FilterItemList key={"UUID-15"} Items={this.state.data} onSelected={this._selectedData} />
            </div>
            <div className="col-md-8 col-sm-9">
                <div className="table-responsive">
                    <Loader loaded={this.state.loaded}>
                      {dt}
                    </Loader>
                </div>
            </div>
          </div>
      )
    }
}
reactMixin(Application.prototype, LinkedStateMixin)

Application.propTypes = {
  Metadata: React.PropTypes.array.isRequired,
  Url: React.PropTypes.string.isRequired
}

export default Application