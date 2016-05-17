import React, {Component, PropTypes} from 'react'
import Loader from 'react-loader'
import FilterItemList from './FilterItemList.jsx'
import SearchBar from './searchbar.jsx'

class DataTableFilters extends Component {
	constructor (props){
		super(props)
		this.state = {loaded: false, list: [], selectedItems: []}
		this._getMacroprocesosList = this._getMacroprocesosList.bind(this)
		this.doSelected = this.doSelected.bind(this)
		this.doSearch = this.doSearch.bind(this)
	}
	componentDidMount () {
		this._getMacroprocesosList()
	}
	doSelected (items) {
		this.setState({selectedItems: items})
	}
	doSearch (dtStart, dtEnd) {
		if (typeof this.props.GetData == 'function'){
			this.props.GetData(dtStart, dtEnd, this.state.selectedItems)
		}
	}
	_getMacroprocesosList () {
		try {
			(async () => {
				this.setState({loaded: false})
				var http = await fetch(this.props.UrlCatalogo)
				var response = await http.json()
				this.setState({loaded: true, list: response.macroprocesos})
			})()
		}catch(e){
			console.log(`Error ${e}`)
		}
	}
	render () {
		return (
			<div className='row'>
				<div className='col-md-12 col-sm-12'>
					<SearchBar onSearch={this.doSearch} />
				</div>
			    <div className='col-md-12 col-sm-12'>
			    	<Loader loaded={this.state.loaded} top='60%'>
						<FilterItemList key='FilterItemList' Items={this.state.list} SelectedItem={this.doSelected} />
					</Loader>
				</div>
			</div>
		)
	}
}

DataTableFilters.propTypes = {
  GetData: PropTypes.func,
  UrlCatalogo: PropTypes.string
}

export default DataTableFilters