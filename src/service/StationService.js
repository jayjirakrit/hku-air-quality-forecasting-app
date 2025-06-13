import axios from "axios";

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_BASE_URL = "https://api-dot-hku-capstone-project-458309.df.r.appspot.com";


export const getStations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/stations`);
    return response.data;
    // const response = [
    //   { station: "Causeway Bay", latitude: 22.2798, longitude: 114.1831 },
    //   { station: "Central", latitude: 22.2823, longitude: 114.1585 },
    //   { station: "Central/Western", latitude: 22.2866, longitude: 114.1455 },
    //   { station: "Eastern", latitude: 22.2812, longitude: 114.2228 },
    //   { station: "Kwai Chung", latitude: 22.3639, longitude: 114.1347 },
    //   { station: "Kwun Tong", latitude: 22.3122, longitude: 114.2255 },
    //   { station: "Mong Kok", latitude: 22.3193, longitude: 114.1694 },
    //   { station: "North", latitude: 22.5027, longitude: 114.1308 },
    //   { station: "Southern", latitude: 22.2477, longitude: 114.1584 },
    //   { station: "Sham Shui Po", latitude: 22.3307, longitude: 114.1622 },
    //   { station: "Shatin", latitude: 22.3823, longitude: 114.1892 },
    //   { station: "Tung Chung", latitude: 22.2887, longitude: 113.9424 },
    //   { station: "Tseung Kwan O", latitude: 22.3079, longitude: 114.2601 },
    //   { station: "Tap Mun", latitude: 22.4633, longitude: 114.3617 },
    //   { station: "Tuen Mun", latitude: 22.3916, longitude: 113.9736 },
    //   { station: "Tai Po", latitude: 22.448, longitude: 114.1612 },
    //   { station: "Tsuen Wan", latitude: 22.3709, longitude: 114.1135 },
    //   { station: "Yuen Long", latitude: 22.4455, longitude: 114.0226 },
    // ];
    // return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
