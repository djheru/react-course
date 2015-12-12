"use strict";

var Dispatcher = require('./../dispatcher/appDispatcher');
var ActionTypes = require('./../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';
var _ = require('lodash')

var _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {

  addChangeListener: function (cb) {
    this.on(CHANGE_EVENT, cb);
  } ,

  removeChangeListener: function (cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  getAllAuthors: function () {
    return _authors;
  },

  getAuthorById: function (id) {
    return _.find(_authors, {id: id});
  }
});

Dispatcher.register(function (action) {

  switch (action.actionType) {

    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;

    case ActionTypes.UPDATE_AUTHOR:
      var existingAuthor = _.find(_authors, {id: action.author.id});
      var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
      _authors.splice(ExistingAuthorIndex, 1, action.author);
      AuthorStore.emitChange();
      break;

    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;

    default:
      //noop
  }

});

module.exports = AuthorStore;
