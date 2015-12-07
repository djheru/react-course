/*eslint-disable strict*///Disabling strict check for jquery

var React = require('react');
var Header = require('./common/Header');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header/>
        <div className="container-fluid">
          <RouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = App;
