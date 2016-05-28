import React, {Component, PropTypes} from 'react'
import Loader from 'react-loader'
import Filter from './Filter/index.jsx'
import Treeview from './Treeview/index.jsx'

class FilterSection extends Component {
	constructor (props){
		super(props)
		this.state = {loaded: false, response: null, list: []}
		this._search = this._search.bind(this)
		this._listSearch = this._listSearch.bind(this)
		this._getIndicadoresList = this._getIndicadoresList.bind(this)
	}
	componentDidMount () {
		this._getIndicadoresList()
	}
	_search (dtStart, dtEnd) {
		try {
	        this.props.GetData(dtStart, dtEnd, this.state.list)
    	} catch (e) {
    		console.log('FilterSection', e)
    	}
	}
	_listSearch (parendId, subparentId, childId) {
		if (typeof _.find(this.state.list, {parendId: parendId, subparentId: subparentId, childId: childId}) === 'object') {
			// quita el elemento
			var current = this.state.list.filter((item) => {
				return item.parendId !== parendId && item.subparentId !== subparentId && item.childId !== childId
			})
			// console.log('current', current)
			this.setState({list: current})
		} else {
			// agrega el elemento
			var current = [...this.state.list]
			current.push({parendId:parendId, subparentId: subparentId, childId:childId})
			this.setState({list: current})
		}
	}
	_getIndicadoresList () {
		try {
			(async () => {
				this.setState({loaded: false})
				var http = await fetch(this.props.UrlIndicadores)
				var response = await http.json()
				this.setState({loaded: true, response: response.macroprocesos})
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
				   <Treeview key='Treeview' DataModel={this.state.response} SelectedItem={this._listSearch}/>
				</Loader>
			</div>
		)
	}
}

FilterSection.propTypes = {
  GetData: PropTypes.func,
  UrlIndicadores: PropTypes.string
}

FilterSection.defaultProps = {}

export default FilterSection
