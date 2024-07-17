class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  getTemperature() {
    return this.temperature;
  }

  setPowerSavingMode(boolean) {
    this.powerSavingMode = boolean;
  }

  up() {
    if (this.powerSavingMode == true && this.temperature < 25) {
      this.temperature += 1;
    } else if (this.powerSavingMode == false && this.temperature < 32) {
      this.temperature += 1;
    }
  }

  down() {
    if (this.temperature > 10) {
      this.temperature -= 1;
    }
  }

  reset() {
    this.temperature = 20;
  }

  getCurrentEnegyUsage() {
    if (this.getTemperature < 18) {
      return "low-usage";
    } else if (this.getTemperature <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}

module.exports = Thermostat;
