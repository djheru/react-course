"use strict"

var React = require('react');
var AuthorForm = require('./AuthorForm');

var ManageAuthorPage = React.createClass({
  getInitialState: function () {
    return {
      author: {id: '', firstName: '', lstName: ''}
    }
  },
  setAuthorState: function (e) {
    var field = e.target.name;
    var value = e.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },
  render: function () {
    //The controller component (this one) maintains the state and passes it to the children
    return (
      <AuthorForm
        author={this.state.author }
        onChange={this.setAuthorState} />
    );
  }
});

module.exports = ManageAuthorPage;
