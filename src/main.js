var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

//You can use the html 5 history api or the default hash based url
//Router.run(routes, Router.HistoryLocation, function (Handler) {
Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('app'));
});
