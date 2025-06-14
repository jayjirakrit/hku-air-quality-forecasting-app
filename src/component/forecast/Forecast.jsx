import React, { useState, useEffect } from "react";
import "./Forecast.css";
import Searchbar from "../ui/searchbar/Searchbar";
import ForecastTable from "../ui/table/ForecastTable";
import Breadcrumb from "../ui/breadcrumb/Breadcrumb";
import { getAirQualityForecast } from "../../service/AirQualityService";
import { getStations } from "../../service/StationService";

const title = [
  {
    page: "Home",
    navigate: "/",
    currentPage: false,
  },
  {
    page: "Forecast",
    navigate: "/forecast",
    currentPage: true,
  },
];

export default function Forecast() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStation, setSelectedStation] = useState("Select station");
  const [airQuality, setAirQuality] = useState([]);
  const [airQualityCal, setAirQualityCal] = useState({});
  const [stations, setStations] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const fetchAirQualityData = async () => {
    try {
      const response = await getAirQualityForecast(
        selectedDate,
        selectedStation
      );
      setAirQuality(response);
    } catch (err) {
      // setError(err.message);
    } finally {
      // setLoading(false);
    }
  };

  const fetchStations = async () => {
    try {
      // const responseStations = JSON.parse(localStorage.get("stations"));
      const responseStations = await getStations();
      // console.log("response station" + JSON.stringify(responseStations));
      setStations(responseStations);
    } catch (err) {}
  };

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  const onStationChange = (station) => {
    setSelectedStation(station);
  };

  useEffect(() => {
    fetchAirQualityData();
    fetchStations();
  }, []);

  useEffect(() => {
    fetchAirQualityData();
  }, [selectedDate, selectedStation]);

  useEffect(() => {
    if (airQuality.length > 0) {
      setAirQualityCal(calculateAverages(airQuality));
    }
  }, [airQuality]);

  return (
    <div className="ml-20 mr-20">
      {/* Breadcrumb */}
      <div className="mt-10 mb-8 flex justify start">
        <Breadcrumb title={title} />
      </div>
      {/* Title */}
      <div className="text-left mb-8 mt-10">
        <h1 className="text-5xl text-gray-600 font-bold">Forecasting Mode</h1>
      </div>
      <div className="flex flex-row justify-between">
        {/* Searach Bar */}
        <Searchbar
          stations={stations}
          onDateChange={onDateChange}
          onSelectStation={onStationChange}
        />
        {/* AQI Result */}
        <div className="flex flex-row justify-evenly w-[320px] p-6 bg-[#FFE668] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <div className="w-[90px] bg-[#E3BD02] text-2xl flex justify-center rounded-lg items-center font-bold">
            {airQualityCal?.avgAqi ?? 0}
          </div>
          <h1 className="text-2xl flex justify-center items-center font-bold">
            {airQualityCal?.avgAqiResult ?? "Calculating ..."}
          </h1>
        </div>
      </div>
      {/* View Board */}
      <div className="mt-10">
        <ForecastTable airQuality={airQuality} />
      </div>
    </div>
  );
}

const calculateAverages = (airQualityData) => {
  if (!airQualityData || airQualityData.length === 0) {
    return null;
  }

  const sums = airQualityData.reduce(
    (acc, data) => {
      return {
        aqi: acc.aqi + data.aqi,
        count: acc.count + 1,
      };
    },
    { aqi: 0, count: 0 }
  );
  const avgAqi = sums.aqi / sums.count;
  const avgAqiResult = avgAqi > 50 ? "High" : "Moderate";

  return {
    avgAqi: avgAqi,
    avgAqiResult: avgAqiResult,
  };
};
