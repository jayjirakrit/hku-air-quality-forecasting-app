import axios from "axios";
import AirQuality from "../model/AirQuality";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAirQualityForecast = async (dateInput, stationInput) => {
  try {
    // const response = await axios.post(`${API_BASE_URL}/data`, {
    //   params: {
    //     date: dateInput,
    //     station: stationInput,
    //   },
    // });
    // return response.data;
    const response = [
      { time: "00:00", aqi: 50, pm2_5: 20, temperature: "25" },
      { time: "00:01", aqi: 50, pm2_5: 20, temperature: "25" },
      { time: "00:02", aqi: 50, pm2_5: 20, temperature: "25" },
      { time: "00:03", aqi: 50, pm2_5: 20, temperature: "25" },
      { time: "00:04", aqi: 50, pm2_5: 20, temperature: "25" },
      { time: "00:05", aqi: 50, pm2_5: 20, temperature: "25" },
      { time: "00:06", aqi: 50, pm2_5: 20, temperature: "25" },
      { time: "00:07", aqi: 50, pm2_5: 20, temperature: "25" },
    ];
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getRealTimeAirQuality = async () => {
  const header = {
    // params: {
    //   station: "station_1",
    // },
  };
  try {
    const response = await axios.get(
      `${API_BASE_URL}/real-time-air-quality`
    );
    const airQualityDatas = response.data.map(item => new AirQuality(item));
    return airQualityDatas;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getRecommendation = async () => {
  try {
    // const response = await axios.post(`${API_BASE_URL}/recommendations`);
    // return response.data;
    const response = [
      { image: "", recommend: "Sensitive groups should wear a mask outdoors" },
      {
        image: "",
        recommend: "Sensitive groups should reduce outdoor exercise",
      },
      { image: "", recommend: "Close your windows to avoid dirty outdoor air" },
    ];
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
