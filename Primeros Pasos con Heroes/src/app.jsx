var React = require('react');
var mui = require('material-ui');
var injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

var HomePage = require('./components/HomePage');

React.render(<HomePage />, document.body);