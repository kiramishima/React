var App = React.createClass({
	getInitialState: function() {
		return {
			data: [],
			appName: "Demo"
		};
	},
	getCharacter: function(){
		$.ajax({
			url:'http://gateway.marvel.com/v1/public/characters',
			data:{
				apikey:"5305e899796f531cdf9ac5bd9e43b39f",
				name: "Spider-Man",
				hash: "afcfbca2f2728b929cffe061b6e7364b",
				ts:5
			}
		}).bind(this);
	},
	componentDidMount: function() {
		this.getCharacter();
	},
	render: function() {
		return ( 
			<div className = "App">
				<h1> {this.state.appName}</h1> 
			</div>
		);
	}
});

var ResultList = React.createClass({
	render: function() {
		return ( 
		<div className = "resultList" >
			{commentNodes} 
		</div>);
	}
});


React.render( <App/> ,document.getElementById('content'));