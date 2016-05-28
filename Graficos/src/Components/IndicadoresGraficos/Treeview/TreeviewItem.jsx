import React, {Component, PropTypes} from 'react'

class ChildrenItem extends Component {
	constructor (props) {
		super(props)
		this._selected = this._selected.bind(this)
	}
	_selected () {
		if (typeof this.props.Selected === 'function'){
			this.props.Selected(this.props.ParentId, this.props.SubParentId, this.props.Id)
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
	SubParentId: PropTypes.number,
	Id: PropTypes.number,
	Text: PropTypes.string,
	Selected: PropTypes.func
}

class SubTreeview extends Component {
	constructor(props) {
		super(props)
		this.state = {toggle: false}
		this._toggle = this._toggle.bind(this)
		this._selected = this._selected.bind(this)
	}
	_toggle () {
		this.setState({toggle: !this.state.toggle})
	}
	_selected (parendId, subparentId, childId) {
		if (typeof this.props.Selected === 'function'){
			this.props.Selected(parendId, subparentId, childId)
		}
	}
	render () {
		return (
		<li>
			<div onClick={this._toggle}>
		   		{this.state.toggle ? <i className='glyphicon glyphicon-minus'></i> : <i className='glyphicon glyphicon-plus'></i>}
		   		{this.props.Text}
		   </div>
		   <ul style={{display: this.state.toggle ? '' : 'none'}}>
		      {this.props.Procesos.map((child) => <ChildrenItem key={`${this.props.ParentID}-${this.props.Id}-${child.id}`} ParentId={this.props.ParentId} SubParentId={this.props.Id} Id={child.id} Text={child.name} Selected={this._selected}/>)}
		   </ul>
	    </li>
	    )
	}
}

SubTreeview.propTypes = {
	ParentId: PropTypes.number,
	Id: PropTypes.number,
	Text: PropTypes.string,
	Selected: PropTypes.func,
	Procesos: PropTypes.any
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
	_selected (parendId, subparentId, childId) {
		if (typeof this.props.Selected === 'function'){
			this.props.Selected(parendId, subparentId, childId)
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
			      {this.props.Childrens.map((child) => <SubTreeview key={`${this.props.ParentID}-${child.id}`} Procesos={child.procesos} ParentId={this.props.ParentID} Id={child.id} Text={child.name} Selected={this._selected}/>)}
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