import axios from "axios";
import AirQuality from "../model/AirQuality";

const API_BASE_URL = "";
export const getAirQualityForecast = async () => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/forecast-air-quality`
    );
    const airQualityDatas = response.data.map((item) => {
      return {
        station: item.station,
        time: item.time,
        aqi: item.aqi,
        pm2_5: item.pm2_5
      };
    });
    return airQualityDatas;
  } catch (error) {
    console.error("Error fetching data forecast air quality:", error);
    return [];
  }
};

export const getRealTimeAirQuality = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/real-time-air-quality`
    );
    const airQualityDatas = response.data.map((item) => new AirQuality(item));
    return airQualityDatas;
  } catch (error) {
    console.error("Error fetching data real-time air quality:", error);
    return [];
  }
};

export const getRealTimeAirQualityAnalysis = async () => {
try {
    const response = await axios.get(
      `${API_BASE_URL}/api/real-time-analysis-air-quality`
    );
    const airQualityAnalysisDatas = response.data.map((item) => {
      return {
        id: item.id,
        station: item.station,
        latitude: item.latitude,
        longitude:item.longitude,
        report_datetime:item.report_datetime,
        aqi: item.aqi,
        pm2_5: item.pm2_5,
        no: item.no,
        no2: item.no2
      };
    });;
    return airQualityAnalysisDatas;
  } catch (error) {
    console.error("Error fetching data real-time analysis air quality:", error);
    return [];
  }
};
