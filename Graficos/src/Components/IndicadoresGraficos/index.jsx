import React from 'react'
import FilterSection from './filtersection.jsx'
import ContentSection from './contentsection.jsx'
import Loader from 'react-loader'

class GraphIndicadorApp extends React.Component {
	constructor (props){
		super(props)
		this.state = {data: []}
		this._searchInformactionBySelected = this._searchInformactionBySelected.bind(this)
	}
	_searchInformactionBySelected (httpResponse) {
		this.setState({data: httpResponse})
	}
	render () {
		return (
			<div className='row'>
				<FilterSection Url={this.props.Url} UrlFiltros={this.props.UrlFiltros} SelectedObjects={this._searchInformactionBySelected} />
				<ContentSection Data={this.state.data}/>
			</div>
		)
	}
}

GraphIndicadorApp.propTypes = {
  Url: React.PropTypes.string.isRequired,
  UrlFiltros: React.PropTypes.string.isRequired
}

// GraphIndicadorApp.defaultProps = {}

export default GraphIndicadorApp
