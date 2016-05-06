import React, {Component, PropTypes} from 'react'
import Pikaday from 'pikaday'
import moment from 'moment'

class Filter extends Component {
	constructor (props) {
		super(props)
		this.state = {dtStart: '', dtEnd: ''}
		this._search = this._search.bind(this)
	}
	componentDidMount () {
		this._dtStart = new Pikaday({
    		field: this.refs.dtStart,
        	format: 'DD/MM/YYYY'
      	})
      	this._dtEnd = new Pikaday({
        	field: this.refs.dtEnd,
        	format: 'DD/MM/YYYY'
      	})
      	var dt = moment().add(7, 'days').format('MM/DD/YYYY')
      	this._dtStart.setDate(moment().format('MM/DD/YYYY'))
      	this._dtEnd.setDate(dt)
	}
	_search () {
		if (typeof this.props.DoSearch === 'function') {
			console.log('refs', this.refs)
		}
	}
	handleDtStartChange (e) {
	    this.setState({dtStart: e.target.value});
	}
	handleDtEndChange (e) {
    	this.setState({dtEnd: e.target.value});
  	}
  	handleSubmit (e) {
	    e.preventDefault();
	    var dtStart = this.state.dtStart.trim();
	    var dtEnd = this.state.dtEnd.trim();
	    if (!dtEnd || !dtStart) {
	      return;
	    }
	    console.log('dtStart', dtStart)
	    console.log('dtEnd', dtEnd)
	    // TODO: send request to the server
	    // this.setState({author: '', text: ''});
	}
	render () {
		return (
			<div className='row'>
				<form className='form-inline' ref="form" onSubmit={this.handleSubmit}>
				  <div className='form-group'>
				    <div className='input-group'>
				      <input ref='dtStart' type='text' value={this.state.dtStart} className='form-control' placeholder='DD/MM/YYYY' onChange={this.handleDtStartChange} />
				      <div className='input-group-addon'><i className='glyphicon glyphicon-calendar'></i></div>
				    </div>
				  </div>
				  <div class='form-group'>
				    <div className='input-group'>
				      <input ref='dtEnd' type='text' value={this.state.dtEnd} className='form-control' placeholder='DD/MM/YYYY' onChange={this.handleDtEndChange} />
				      <div className='input-group-addon'><i className='glyphicon glyphicon-calendar'></i></div>
				    </div>
				  </div>
				  <button type='submit' class='btn btn-default'>Buscar</button>
				</form>
			</div>
		)
	}
}

Filter.propTypes = {
	DoSearch: PropTypes.func
}

export default Filter