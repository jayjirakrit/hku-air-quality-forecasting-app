import axios from "axios";
import AirQuality from "../model/AirQuality";

// const API_BASE_URL = "http://localhost:8000";
const API_BASE_URL =
  "https://api-dot-hku-capstone-project-458309.df.r.appspot.com";

export const getAirQualityForecast = async (stationInput) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/forecast-air-quality`
    );
    const airQualityDatas = response.data.map((item) => {
      return {
        station: item.station,
        time: item.time,
        aqi: 50,
        pm2_5: item.pm2_5,
        temperature: "25",
      };
    });
    return airQualityDatas;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
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
      `${API_BASE_URL}/api/real-time-air-quality`
    );
    const airQualityDatas = response.data.map((item) => new AirQuality(item));
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
