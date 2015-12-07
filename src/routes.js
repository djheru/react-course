"use strict"

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var App = require('./components/App');
var HomePage = require('./components/HomePage');
var About = require('./components/about/AboutPage');
var Authors = require('./components/authors/AuthorPage');

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={HomePage} />
    <Route name="authors" handler={Authors} />
    <Route name="about" handler={About} />
  </Route>
);

module.exports = routes;
