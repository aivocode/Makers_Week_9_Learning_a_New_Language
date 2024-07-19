const WeatherClient = require("./weather_client.js");
const Weather = require("./weather.js");

// const client = new WeatherClient();
// client.fetchWeatherData("London").then((weatherData) => {
//   console.log(`Weather data for ${weatherData.name}:`);
//   console.log(weatherData);
// });

async function main() {
  const client = new WeatherClient();
  const weather = new Weather(client);

  weather.load("Bristol");
  const data = await weather.getWeatherData();
  console.log(data);

  const compare = await weather.compareWith("Vilnius");
  console.log(compare);

  const display = await weather.displayWeather();
  console.log(display);

  
}

main();