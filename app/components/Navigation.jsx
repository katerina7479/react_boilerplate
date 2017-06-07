var React = require('react');
var {Link} = require('react-router');

var Navigation = React.createClass({

  render: function() {
      return (
        <div>
          <h3>Navigation</h3>
          <Link to="/">Page One</Link>
          <Link to="/page_two">Page Two</Link>
        </div>
      );
  }
});

module.exports = Navigation;
