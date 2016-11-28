var React = require('react');
var WeatherForm = require('WeatherForm');
var Message = require('Message');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({

  getInitialState : function () {
      return {
        isLoading : false
      }
  },

  handleSearch: function(loaction) {
    var that = this;
    this.setState({
        isLoading : true,
        errorMessage : undefined
    });

    openWeatherMap.getTemp(loaction).then(function(temp) {
      that.setState({
      loaction : loaction,
      temp : temp,
      isLoading : false

      });

    }, function(e) {
      that.setState({
        isLoading : false,
        errorMessage : e.message
      });
    })
  },

  render : function() {
    var {isLoading, temp, loaction , errorMessage} = this.state;

  function renderMessage() {
      if (isLoading) {
        return <h3 className = "text-center">Fetching weather .......</h3>;
      } else if (temp && loaction) {
        return   <Message temp = {temp} loaction = {loaction} />;
      }
  }

    function renderError() {
        if (typeof errorMessage === 'string') {
            return (
            <div>
              <ErrorModal message={errorMessage} />
            </div>
          );
        }
    }

    return (
      <div>
          <h1 createClass= "text-center page-title">Get Weather</h1>
          <WeatherForm onSearch = {this.handleSearch} />
          {renderMessage()}
          {renderError()}

      </div>
    );
  }
});

module.exports = Weather;
