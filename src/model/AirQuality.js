export default class AirQuality {
  constructor(data) {
    this.id = data.id || null;
    this.report_datetime = data.report_datetime || null;
    this.station = data.station || null;
    this.latitude = data.latitude || null;
    this.longitude = data.longitude || null;
    this.aqi = data.aqi || null;
    this.pm2_5 = data.pm2_5 || null;
    this.temperature = data.temperature || null;
  }

  // ID getter/setter
  get id() {
    return this._id;
  }

  set id(newId) {
    this._id = newId;
  }

  // Time getter/setter
  get report_datetime() {
    return this._report_datetime;
  }

  set report_datetime(newTime) {
    this._report_datetime = newTime;
  }

  // Station getter/setter
  get staion() {
    return this._staion;
  }

  set staion(newStation) {
    this._staion = newStation;
  }

  // Latitude getter/setter
  get latitude() {
    return this._latitude;
  }

  set latitude(newLatitude) {
    this._latitude = newLatitude;
  }

  // Longitude getter/setter
  get longitude() {
    return this._longitude;
  }

  set longitude(newLongitude) {
    this._longitude = newLongitude;
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
