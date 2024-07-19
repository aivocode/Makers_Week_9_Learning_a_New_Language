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
  data = await weather.getWeatherData();

  console.log(data);
}

main();