const apiKey = require("./api_key.js");

class WeatherClient {
  constructor() {}

  async fetchWeatherData(city) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
    const data = await response.json();
    return data
  };
}

module.exports = WeatherClient;
