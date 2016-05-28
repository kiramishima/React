import React from 'react'
import FilterSection from './filtersection.jsx'
import ContentSection from './contentsection.jsx'
import Loader from 'react-loader'

class GraphIndicadorApp extends React.Component {
	constructor (props){
		super(props)
		this.state = {query: []}
		this._searchInformactionBySelected = this._searchInformactionBySelected.bind(this)
	}
	_searchInformactionBySelected (listQuery) {
		try {
	        (async () => {
	        	this.setState({loaded: false})
	        	// TODO inyectar el listado en la consulta
	        	console.log(arguments)
                let data = await fetch(this.props.Url)
      			var response = await data.json()
      			this.setState({loaded: true, query: response.data})
	        })()
    	} catch (e) {
    		console.log('FilterSection', e)
    	}
	}
	render () {
		return (
			<div className='row'>
				<FilterSection UrlIndicadores={this.props.UrlIndicadores} GetData={this._searchInformactionBySelected} />
				<ContentSection Data={this.state.query}/>
			</div>
		)
	}
}

GraphIndicadorApp.propTypes = {
  Url: React.PropTypes.string.isRequired,
  UrlIndicadores: React.PropTypes.string.isRequired
}

// GraphIndicadorApp.defaultProps = {}

export default GraphIndicadorApp
