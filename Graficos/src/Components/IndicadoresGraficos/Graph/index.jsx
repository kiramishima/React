import React, {Component, PropTypes} from 'react'
import Chart from 'react-c3-component';
import 'c3/c3.css';

class Graph extends Component {
	constructor (props) {
		super(props)
	}
	render () {
		var cats = this.props.Categories
		return (
			<Chart
		      config={{
		        // Add your C3 config excluding bindto here 
		        // http://c3js.org/reference.html 
		        data: {
				    columns: this.props.Data
				  },
		        tooltip: {
				  format: {
				    title: function (x) { return cats[x]; }
				  }
				},
				axis: {
			        x: {
			            type: 'category',
			            categories: this.props.Categories
			        }
			    }
		      }}
		    />
		)
	}
}


Graph.propTypes = {
  Data: PropTypes.any,
  Categories: PropTypes.any
}

export default Graph