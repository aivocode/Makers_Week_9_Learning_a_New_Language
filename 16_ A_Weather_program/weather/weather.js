class Weather {
  constructor(client) {
    this.city = "";
    this.client = client;
  }

  load(city) {
    this.city = city;
  }

  getWeatherData() {
    return this.client.fetchWeatherData(this.city);
  }

  async compareWith(city) {
    const former = await this.getWeatherData();
    const latter = await this.client.fetchWeatherData(city);

    if (former["main"]["temp"] == latter["main"]["temp"]) {
      return `City ${former["name"]} temperature ${former["main"]["temp"]} is equal to city ${latter["name"]} temperature ${latter["main"]["temp"]}`;
    } else if (former["main"]["temp"] > latter["main"]["temp"]) {
      return `City ${former["name"]} temperature ${former["main"]["temp"]} is higher than city ${latter["name"]} temperature ${latter["main"]["temp"]}`;
    } else if (former["main"]["temp"] < latter["main"]["temp"]) {
      return `City ${former["name"]} temperature ${former["main"]["temp"]} is lower than city ${latter["name"]} temperature ${latter["main"]["temp"]}`;
    }
  }

  async displayWeather() {
    const data = await this.client.fetchWeatherData(this.city);
    return {
      City: data["name"],
      Weather: data["weather"][0]["main"],
      Temperature: data["main"]["temp"],
      Feels_like: data["main"]["feels_like"],
      Humidity: data["main"]["humidity"] + "%",
    };
  }

  async intervalDisplayWeather() {
    const begin = await this.displayWeather();
    console.log(begin);

    setInterval(async () => {
      const repeat = await this.displayWeather();
      console.log(repeat);
    }, 5000);
  }
}

module.exports = Weather;
