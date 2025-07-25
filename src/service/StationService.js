import axios from "axios";

const API_BASE_URL = "";
export const getStations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/stations`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
