import React, {Component} from 'react'
import SearchBar from '../DataTableFilters/searchbar.jsx'

export default class Application extends Component {
    constructor (props) {
      super(props)
      this.state = { data: [], dtStart: '', dtEnd: ''}
      this.onSearch = this.onSearch.bind(this)
      this.changeHandler = this.changeHandler.bind(this)
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
    onSearch () {
      console.log(this.state)
      this._getData()
    }
    changeHandler (state, value) {
        this.setState({[state]: value})
    }
    render () {
      // this.onSearch()
      return (
          <div className={"DataTableContainerLayout"}>
            <SearchBar key={"UUID-22"} onChange={this.changeHandler} onSearch={this.onSearch}/>
          </div>
      )
    }
}

Application.propTypes = {
  Url: React.PropTypes.string.isRequired
}
