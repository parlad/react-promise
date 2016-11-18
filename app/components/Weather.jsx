var React = require('react');
var WeatherForm = require('WeatherForm');
var Message = require('Message');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({

  getInitialState : function () {
      return {
        isLoading : false
      }
  },

  handleSearch: function(loaction) {
    var that = this;
    debugger;
    this.setState({isLoading : true});
    openWeatherMap.getTemp(loaction).then(function(temp) {
      that.setState({
      loaction : loaction,
      temp : temp,
      isLoading : false
      });
    }, function(errorMessage) {
      that.setState({isLoading : false})
      alert(errorMessage);
    })
  },

  render : function() {
    var {isLoading, temp, loaction} = this.state;

  function renderMessage() {
      if (isLoading) {
        return <h3 className = "text-center">Fetching weather .......</h3>;
      } else if (temp && loaction) {
        return   <Message temp = {temp} loaction = {loaction} />;
      }
  }

    return (
      <div>
          <h1 createClass= "text-center">Get Weather</h1>
          <WeatherForm onSearch = {this.handleSearch} />
           {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
