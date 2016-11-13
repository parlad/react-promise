var axios = require('axios');

const OPEN_ERATHRT_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=87167c157267d2cd36694806535bfcf9&units=imperial';

module.exports = {
  getTemp : function(loaction) {
    var encodedLoaction = encodeURIComponent(loaction);
    var requestUrl = `${OPEN_ERATHRT_MAP_URL}&q=${encodedLoaction}`;
    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error (res.data.message);
    });
  }
}
