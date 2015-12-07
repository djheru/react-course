$ = jQuery = require('jquery');
var React = require('react');
var HomePage = require('./components/HomePage');
var AboutPage = require('./components/about/AboutPage');
var Header = require('./components/common/Header');
var AuthorPage = require('./components/authors/AuthorPage');

(function (win) {
  "use strict"

  var App = React.createClass({
    render: function () {
      var Child;
      switch(this.props.route) {
        case 'about':
          Child = AboutPage;
          break;
        case 'authors':
          Child = AuthorPage;
          break;
        default:
          Child = HomePage;
      }

      return (
        <div>
          <Header />
          <Child />
        </div>
      );
    }
  });

  function render() {
    var route = win.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
  }

  win.addEventListener('hashchange', render);
  render();

})(window);
