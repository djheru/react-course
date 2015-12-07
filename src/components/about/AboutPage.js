var React = require('react');

var AboutPage = React.createClass({

  statics: {
    willTransitionTo: function (transition, params, query, cb) {
      /*if (!confirm('Are you sure you want to read this boring crap?')) {
        transition.abort();
      } else {
        cb();
      }*/
      cb();
    },

    willTransitionFrom: function (transition, component) {
      /*if (!confirm('Are you sure you want to read this excitingness!?!')) {
        transition.abort();
      }*/
    }
  },

  render: function () {
    return (
      <div>
        <h1>About</h1>
        <p>
          This application uses the following technologies:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node.js</li>
            <li>Gulp</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    );
  }
});

module.exports = AboutPage;
