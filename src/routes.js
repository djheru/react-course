"use strict"

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var App = require('./components/App');
var HomePage = require('./components/HomePage');
var AboutPage = require('./components/about/AboutPage');
var AuthorPage = require('./components/authors/AuthorPage');
var NotFoundPage = require('./components/NotFoundPage');
var ManageAuthorPage = require('./components/authors/ManageAuthorPage');

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={HomePage} />
    <Route name="authors" handler={AuthorPage} />
    <Route name="addAuthor" path="author" handler={ManageAuthorPage} />
    <Route name="about" handler={AboutPage} />
    <NotFoundRoute handler={NotFoundPage} />
    <Redirect from="about-us" to="about" />
    <Redirect from="authrus" to="authors" />
    <Redirect from="about/*" to="about" />
  </Route>
);

module.exports = routes;
