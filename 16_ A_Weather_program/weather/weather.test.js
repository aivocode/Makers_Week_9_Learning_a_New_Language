const Weather = require("./weather.js");

describe("class Weather test", () => {
  it("getWeatherData()", (done) => {
    const mockClient = {
      fetchWeatherData: jest.fn(),
    };

    mockClient.fetchWeatherData.mockResolvedValueOnce({
      coord: { lon: -71.1662, lat: 41.8334 },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      base: "stations",
      main: {
        temp: 24.04,
        feels_like: 24.04,
        temp_min: 22.73,
        temp_max: 25.5,
        pressure: 1018,
        humidity: 59,
        sea_level: 1018,
        grnd_level: 1014,
      },
      visibility: 10000,
      wind: { speed: 3.13, deg: 356, gust: 5.36 },
      clouds: { all: 1 },
      dt: 1721401938,
      sys: {
        type: 2,
        id: 2006747,
        country: "US",
        sunrise: 1721381190,
        sunset: 1721434506,
      },
      timezone: -14400,
      id: 4931378,
      name: "Bristol",
      cod: 200,
    });

    const weather = new Weather(mockClient);
    weather.load("Bristol");
    expect(weather.city).toEqual("Bristol");

    weather.getWeatherData().then((object) => {
      expect(mockClient.fetchWeatherData).toHaveBeenCalledWith(weather.city);
      expect(object).toEqual({
        coord: { lon: -71.1662, lat: 41.8334 },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
        ],
        base: "stations",
        main: {
          temp: 24.04,
          feels_like: 24.04,
          temp_min: 22.73,
          temp_max: 25.5,
          pressure: 1018,
          humidity: 59,
          sea_level: 1018,
          grnd_level: 1014,
        },
        visibility: 10000,
        wind: { speed: 3.13, deg: 356, gust: 5.36 },
        clouds: { all: 1 },
        dt: 1721401938,
        sys: {
          type: 2,
          id: 2006747,
          country: "US",
          sunrise: 1721381190,
          sunset: 1721434506,
        },
        timezone: -14400,
        id: 4931378,
        name: "Bristol",
        cod: 200,
      });
      done();
    });
  });
});
