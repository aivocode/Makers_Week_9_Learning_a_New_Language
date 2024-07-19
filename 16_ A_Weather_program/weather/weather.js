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
}

module.exports = Weather;
