const apiKey = require("./api_key.js");
const city = "London";
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

fetch(apiUrl)
  .then((response) => response.json())
  .then((weatherData) => {
    console.log(weatherData['main']);
    console.log(weatherData['weather'][0]['main']);
  });

console.log("Requesting weather data");
