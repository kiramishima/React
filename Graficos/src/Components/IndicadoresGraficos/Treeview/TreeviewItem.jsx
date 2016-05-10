import React, {Component, PropTypes} from 'react'

class ChildrenItem extends Component {
	constructor (props) {
		super(props)
		this._selected = this._selected.bind(this)
	}
	_selected () {
		if (typeof this.props.Selected === 'function'){
			this.props.Selected(this.props.Parent, this.props.Text, this.props.ParentId, this.props.Id)
		}
	}
	render () {
		return (
			<li>
		    	<label>
	               <input type='checkbox' onChange={this._selected}/> {this.props.Text}
		      	</label>
		    </li>
		)
	}
}

ChildrenItem.propTypes = {
	ParentId: PropTypes.number,
	Parent: PropTypes.string,
	Id: PropTypes.number,
	Text: PropTypes.string,
	Selected: PropTypes.func
}

class TreeviewItem extends Component {
	constructor (props) {
		super(props)
		this.state = {toggle: false}
		this._toggle = this._toggle.bind(this)
		this._selected = this._selected.bind(this)
	}
	_toggle () {
		this.setState({toggle: !this.state.toggle})
	}
	_selected (cat, subcat, parendId, childId) {
		if (typeof this.props.Selected === 'function'){
			this.props.Selected(cat, subcat, parendId, childId)
		}
	}
	render () {
		return (
			<li>
			   <div onClick={this._toggle}>
			   		{this.state.toggle ? <i className='glyphicon glyphicon-minus'></i> : <i className='glyphicon glyphicon-plus'></i>}
			   		{this.props.Parent}
			   </div>
			   <ul style={{display: this.state.toggle ? '' : 'none'}}>
			      {this.props.Childrens.map((child) => <ChildrenItem Parent={this.props.Parent} ParentId={this.props.ParentID} Id={child.scat_id} Text={child.subcategory} Selected={this._selected}/>)}
			   </ul>
			</li>
		)
	}
}

TreeviewItem.propTypes = {
  ParentID: PropTypes.number,
  Parent: PropTypes.string,
  Childrens: PropTypes.array,
  Selected: PropTypes.func
}

export default TreeviewItem