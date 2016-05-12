import React, {Component, PropTypes} from 'react'
import TreeviewItem from './TreeviewItem.jsx'

class Treeview extends Component {
	constructor (props) {
		super(props)
		this._selected = this._selected.bind(this)
	}
	_selected (cat, subcat, parendId, childId) {
		if (typeof this.props.SelectedItem === 'function'){
			this.props.SelectedItem(cat, subcat, parendId, childId)
		}
	}
	render () {
		return (
			<div className='row'>
			   <div className='col-xs-12 col-sm-12 col-md-12'>
			   		<br />
					<ul>
						{ this.props.DataModel.map( (item) => <TreeviewItem key={`${item.cat_id}`} Selected={this._selected} ParentID={item.cat_id} Parent={item.category} Childrens={item.subcategories}/>)}
					</ul>
				</div>
			</div>
		)
	}
}

Treeview.propTypes = {
  DataModel: PropTypes.array,
  SelectedItem: PropTypes.func
}

export default Treeview