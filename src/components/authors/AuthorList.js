"use strict"

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorActions = require('./../../actions/authorActions');
var toastr = require('toastr');

var AuthorList = React.createClass({

  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

  deleteAuthor: function (id, e) {
    e.preventDefault();
    AuthorActions.deleteAuthor(id);
    toastr.success('Author deleted successfully!')
  },

  render: function () {
    var createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td><Link to="editAuthor" params={{id: author.id }}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
          <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = AuthorList;
