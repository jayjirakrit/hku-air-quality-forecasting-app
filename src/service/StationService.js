import axios from "axios";

// const API_BASE_URL = "http://localhost:8000";
const API_BASE_URL = "https://api-dot-hku-capstone-project-458309.df.r.appspot.com";

export const getStations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/stations`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
