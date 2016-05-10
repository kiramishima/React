import React, {Component, PropTypes} from 'react'
import Loader from 'react-loader'
import Filter from './Filter/index.jsx'
import Treeview from './Treeview/index.jsx'

class FilterSection extends Component {
	constructor (props){
		super(props)
		this.state = {loaded: false, response: null, list: [], tables: []}
		this._search = this._search.bind(this)
		this._listSearch = this._listSearch.bind(this)
		this._getContent = this._getContent.bind(this)
	}
	componentDidMount () {
		this._search()
	}
	_search (dtStart, dtEnd) {
		try {
	        (async () => {
	        	this.setState({loaded: false})

                let data = await fetch(this.props.Url)
      			var response = await data.json()

      			this.setState({loaded: true, response: response.data})
	        })()
    	} catch (e) {
    		console.log('FilterSection', e)
    	}
	}
	_listSearch (cat, subcat, parendId, childId) {
		if (typeof _.find(this.state.list, {c: parendId, sc: childId}) === 'object') {
			// quita el elemento
			var current = this.state.list.filter((item) => {
				return item.c !== parendId && item.sc !== childId
			})
			console.log('current', current)
			this.setState({list: current})
		} else {
			// agrega el elemento
			var current = [...this.state.list]
			current.push({c:parendId, sc:childId})
			this.setState({list: current})
		}
		// peticion a la API

	}
	_getContent () {
		try {
			(async () => {
				var http = await fetch(this.props.UrlFiltros)
				var response = await http.json()

				this.setState({tables: response.data})
			})()
		}catch(e){
			console.log(`Error ${e}`)
		}
	}
	render () {
		return (
			<div className='col-sm-4 col-md-4'>
				<Filter DoSearch={this._search}/>
				<Loader loaded={this.state.loaded} top='60%'>
				   <Treeview DataModel={this.state.response} SelectedItem={this._listSearch}/>
				</Loader>
			</div>
		)
	}
}

FilterSection.propTypes = {
  SelectedObjects: PropTypes.func,
  Url: PropTypes.string,
  UrlFiltros: PropTypes.string
}

FilterSection.defaultProps = {}

export default FilterSection
