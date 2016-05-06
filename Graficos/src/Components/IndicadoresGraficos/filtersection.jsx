import React, {Component, PropTypes} from 'react'
import Filter from './Filter/index.jsx'

class FilterSection extends Component {
	constructor (props){
		super(props)
		this.state = {}
		this._search = this._search.bind(this)
	}
	_search () {

	}
	render () {
		return (
			<div className='col-sm-4 col-md-4'>
				<Filter DoSearch={this._search}/>
			</div>
		)
	}
}

FilterSection.propTypes = {}

// GraphIndicadorApp.defaultProps = {}

export default FilterSection
