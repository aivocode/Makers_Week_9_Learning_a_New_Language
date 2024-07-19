const WeatherClient = require("./weather_client.js");
const Weather = require("./weather.js");

const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter the city: ", (city) => {
  async function main() {
    const client = new WeatherClient();
    const weather = new Weather(client);
    weather.load(city);
    const data = await weather.displayWeather();
    console.log(data);
  }
  main();
  rl.close();
});

