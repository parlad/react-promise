var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit : function (e) {
      e.preventDefault();
      var loaction = this.refs.loaction.value;
      if (loaction.length > 0) {
        this.refs.loaction.value = '';
        this.props.onSearch(loaction);
      }
   },

  render : function() {
    return (
    <div>
      <form onSubmit = {this.onFormSubmit}>
          <div>
              <input type = "search" ref = "loaction" placeholder = "search the city"/>
          </div>
            <button className = "button expanded hollow">Get Weather</button>
          <div>
          </div>
      </form>
    </div>
    );
  }
});


module.exports = WeatherForm;
