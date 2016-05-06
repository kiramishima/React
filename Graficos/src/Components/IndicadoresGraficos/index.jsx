import React from 'react'
import FilterSection from './filtersection.jsx'
import ContentSection from './contentsection.jsx'

class GraphIndicadorApp extends React.Component {
	constructor (props){
		super(props)
		this.state = {}
	}
	render () {
		return (
			<div className='row'>
				<FilterSection />
				<ContentSection />
			</div>
		)
	}
}

GraphIndicadorApp.propTypes = {
  Url: PropTypes.string.isRequired
}

// GraphIndicadorApp.defaultProps = {}

export default GraphIndicadorApp
