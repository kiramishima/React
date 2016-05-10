import React, {Component, PropTypes} from 'react'
import Pikaday from 'pikaday'
import moment from 'moment'

class Filter extends Component {
	constructor (props) {
		super(props)
		this.state = {dtStart: '', dtEnd: ''}
		this._search = this._search.bind(this)
		this.handleDtStartChange = this.handleDtStartChange.bind(this)
		this.handleDtEndChange = this.handleDtEndChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	componentDidMount () {
		this._dtStart = new Pikaday({
    		field: this.refs.dtStart,
        	format: 'DD/MM/YYYY',
        	onSelect: this.handleDtStartChange
      	})
      	this._dtEnd = new Pikaday({
        	field: this.refs.dtEnd,
        	format: 'DD/MM/YYYY',
        	onSelect: this.handleDtEndChange
      	})
      	var dt = moment().add(7, 'days').format('MM/DD/YYYY')
      	this._dtStart.setDate(moment().format('MM/DD/YYYY'))
      	this._dtEnd.setDate(dt)
	}
	_search (dtStart, dtEnd) {
		if (typeof this.props.DoSearch === 'function') {
	        this.props.DoSearch(dtStart, dtEnd)
		}
	}
	handleDtStartChange (e) {
		var dt = moment(e).format('DD/MM/YYYY')
		this.setState({dtStart: dt})
	}
	handleDtEndChange (e) {
		var dt = moment(e).format('DD/MM/YYYY')
		this.setState({dtEnd: dt})
  	}
  	handleSubmit (e) {
	    e.preventDefault();
	    var dtStart = this.state.dtStart.trim();
	    var dtEnd = this.state.dtEnd.trim();
	    if (!dtEnd || !dtStart) {
	      return;
	    }
	    
	    this._search(dtStart, dtEnd)
	}
	render () {
		return (
			<div className='row'>
				<form className='form-inline' ref="form" onSubmit={this.handleSubmit}>
				  <div className='form-group'>
				    <div className='input-group'>
				      <input ref='dtStart' type='text' value={this.state.dtStart} className='form-control' placeholder='DD/MM/YYYY' />
				      <div className='input-group-addon'><i className='glyphicon glyphicon-calendar'></i></div>
				    </div>
				  </div>
				  <div className='form-group'>
				    <div className='input-group'>
				      <input ref='dtEnd' type='text' value={this.state.dtEnd} className='form-control' placeholder='DD/MM/YYYY' />
				      <div className='input-group-addon'><i className='glyphicon glyphicon-calendar'></i></div>
				    </div>
				  </div>
				  <button type='submit' className='btn btn-default'>Buscar</button>
				</form>
			</div>
		)
	}
}

Filter.propTypes = {
	DoSearch: PropTypes.func
}

export default Filter