const Thermostat = require("./thermostat.js");

describe("class Thermostat test", () => {
  it(".getTemperature()", () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });
  it(".getTemperature() | .up() | down() | setPowerSavingMode(boolean)", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);

    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);

    thermostat.setPowerSavingMode(true);
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);

    thermostat.setPowerSavingMode(false);
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(26);

    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });
});
