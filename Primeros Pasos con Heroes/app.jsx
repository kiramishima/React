var App = React.createClass({
        getInitialState: function() {
          return {
          	data: [],
          	appName:"Demo"
          };
        },
        componentDidMount: function() {
        },
        render: function() {
          return (
            <div className="App">
              <h1>{this.state.appName}</h1>
            </div>
          );
        }
      });

var ResultList = React.createClass({
	render: function(){
		return(
			<div className="resultList">
              {commentNodes}
            </div>
		);
	}
});


React.render(
        <App />,
        document.getElementById('content')
      );