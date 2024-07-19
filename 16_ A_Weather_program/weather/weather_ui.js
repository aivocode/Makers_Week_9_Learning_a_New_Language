const apiKey = require("./api_key.js");

class WeatherUI {
  constructor() {}

  async fetchWeatherData(city) {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
    );
    const data = await response.json();
    return {
      City: data["name"],
      Weather: data["weather"][0]["main"],
      Temperature: data["main"]["temp"],
      Feels_like: data["main"]["feels_like"],
      Humidity: data["main"]["humidity"] + "%",
    };
  }
}

module.exports = WeatherUI;
