import React, {Component, PropTypes} from 'react'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import Header from './Header.jsx'
import Body from './Body.jsx'

class DataTable extends Component {
	constructor (props) {
		super(props)
		this.state = {header: [], body: []}
	}
	componentWillReceiveProps (nextprops) {
		this.setState({header: nextprops.HeaderDefinition, body: nextprops.Data})
	}
	render () {
		var linkHeader = this.linkState('header')
		var linkBody = this.linkState('body')
		return (
			<div className='row'>
				<div className='col-sm-12 col-md-12'>
					<table className={this.props.className}>
					    <Header key="myHeader" DataDefinition={linkHeader}/>
					    <Body key="myBody" Data={linkBody}/>
		            </table>
				</div>
			</div>
		)
	}
}

reactMixin(DataTable.prototype, LinkedStateMixin)

DataTable.propTypes = {
  HeaderDefinition: PropTypes.any,
  Data: PropTypes.any,
  className: PropTypes.string
}

DataTable.defaultProps = {
  className: 'table table-bordered table-striped',
  Data: []
}

export default DataTable