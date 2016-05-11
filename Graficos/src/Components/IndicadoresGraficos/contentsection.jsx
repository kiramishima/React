import React, {Component, PropTypes} from 'react'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import DataTable from './DataTable/index.jsx'

class ContentSection extends Component {
	constructor (props) {
		super(props)
		this.state = {data: [], headers: []}
	}
	componentWillReceiveProps (nextProps) {
		var dtf = []
		if (nextProps.Data.length > 0) {
			// de 1 elemento definiremos cuantas columnas crearemos.
			var item = nextProps.Data[0]
			var oCols = item.Schedule.map((item) => { return {"header": `${item.Month} ${item.Year}`}})
			dtf = [{"header": "Proceso"}, ...oCols]
			console.log('cols', dtf)
		}
		this.setState({headers: dtf, data: nextProps.Data})
	}
	componentDidMount () {
		var dtf = []
		console.log(this.props.Data)
		if (this.props.Data.length > 0) {
			// de 1 elemento definiremos cuantas columnas crearemos.
			var item = this.props.Data[0]
			var oCols = item.Schedule.map((item) => { return {"header": `${item.Month} ${item.Year}`}})
			dtf = [{"header": "Proceso"}, ...oCols]
			console.log('cols', dtf)
		}
		this.setState({headers: dtf, data: this.props.Data})
	}
	render () {
		var linkData = this.linkState('data')
		console.log(this.state.headers)
		return (
			<div className='col-sm-8 col-md-8'>
				<DataTable HeaderDefinition={this.state.headers} Data={linkData}/>
			</div>
		)
	}
}

reactMixin(ContentSection.prototype, LinkedStateMixin)

ContentSection.propTypes = {
  Data: PropTypes.array
}

export default ContentSection
