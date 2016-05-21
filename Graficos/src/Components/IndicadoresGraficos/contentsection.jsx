import React, {Component, PropTypes} from 'react'
import reactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import DataTable from './DataTable/index.jsx'
import Graph from './Graph/index.jsx'

class ContentSection extends Component {
	constructor (props) {
		super(props)
		this.state = {data: [], headers: [], body: []}
	}
	componentWillReceiveProps (nextProps) {
		var dtf = []
		if (nextProps.Data.length > 0) {
			// de 1 elemento definiremos cuantas columnas crearemos.
			var item = nextProps.Data[0]
			var oCols = item.months.map((item) => { return {"header": `${item.month} ${item.year}`}})
			dtf = [{"header": "Proceso"}, ...oCols]
			console.log('cols', dtf)
		}

		// creamos los datos para el Body
		var body = []
		if (nextProps.Data.length > 0) {
			var items = nextProps.Data
			body = items.map((item) => {
				var res = [item.process, ...item.months.map((schedule) => { return schedule.value })]
				return res
			})
		}
		this.setState({headers: dtf, data: nextProps.Data, body: body})
	}
	componentDidMount () {
		var dtf = []
		if (this.props.Data.length > 0) {
			// de 1 elemento definiremos cuantas columnas crearemos.
			var item = this.props.Data[0]
			var oCols = item.months.map((item) => { return {"header": `${item.month} ${item.year}`}})
			dtf = [{"header": "Proceso"}, ...oCols]
			console.log('cols', dtf)
		}
		// creamos los datos para el Body
		var body = []
		if (this.props.Data.length > 0) {
			var items = this.props.Data
			body = items.map((item) => {
				var res = [item.process, ...item.months.map((schedule) => { return schedule.value })]
				return res
			})
		}
		this.setState({headers: dtf, data: this.props.Data, body: body})
	}
	render () {
		// var linkData = this.linkState('body')
		console.log(this.state.headers)
		console.log(this.state.body)
		return (
			<div className='col-sm-8 col-md-8'>
				<DataTable HeaderDefinition={this.state.headers} Data={this.state.body}/>
				<Graph Data={this.state.body} Categories={this.state.headers.slice(1).map((cat) => cat.header)}/>
			</div>
		)
	}
}

reactMixin(ContentSection.prototype, LinkedStateMixin)

ContentSection.propTypes = {
  Data: PropTypes.array
}

export default ContentSection
