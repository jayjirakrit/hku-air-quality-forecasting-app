export default class AirQualityRequest {
  constructor(data) {
    this.time = data.time || null;
    this.aqi = data.aqi || null;
    this.pm2_5 = data.pm2_5 || null;
    this.temperature = data.temperature || null;
  }

  // Time getter/setter
  get time() {
    return this._time;
  }

  set time(newTime) {
    this._time = newTime;
  }

  // AQI getter/setter with validation
  get aqi() {
    return this._aqi;
  }

  set aqi(newAqi) {
    this._aqi = newAqi;
  }

  // PM2.5 getter/setter
  get pm2_5() {
    return this._pm2_5;
  }

  set pm2_5(newPm2_5) {
    this._pm2_5 = newPm2_5;
  }

  // Temperature getter/setter
  get temperature() {
    return this._temperature;
  }

  set temperature(newTemp) {
    this._temperature = newTemp;
  }
}
