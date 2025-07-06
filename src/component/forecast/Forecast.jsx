import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./Forecast.css";
import Searchbar from "../ui/searchbar/Searchbar";
import ForecastTable from "../ui/table/ForecastTable";
import Breadcrumb from "../ui/breadcrumb/Breadcrumb";
import { getAirQualityForecast } from "../../service/AirQualityService";
import { getStations } from "../../service/StationService";
import _ from "lodash";

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
  const [selectedStation, setSelectedStation] = useState("Select station");
  const [airQuality, setAirQuality] = useState([]);
  const [stations, setStations] = useState([]);

  const fetchAirQualityData = useCallback(async () => {
    try {
      let response = await getAirQualityForecast(selectedStation);
      response = response.filter(
        (item) => {
          return (
            item.station?.toString()?.toUpperCase() ===
            selectedStation.toUpperCase()
          );
        }
      );
      // Update Air Quality State only reponse different
      if (!_.isEqual(airQuality, response)) {
        setAirQuality(response);
      }
    } catch (err) {
      // setError(err.message);
    } finally {
      // setLoading(false);
    }
  }, [selectedStation, airQuality]);

  const fetchStations = useCallback(async () => {
    try {
      // const responseStations = JSON.parse(localStorage.get("stations"));
      const responseStations = await getStations();
      // console.log("response station" + JSON.stringify(responseStations));
      setStations(responseStations);
    } catch (err) {}
  }, []);

  const onStationChange = useCallback((station) => {
    setSelectedStation(station);
  }, []);

  const memoCalculateAverages = useMemo(() => {
    return calculateAverages(airQuality);
  }, [airQuality]);

  useEffect(() => {
    fetchStations();
  }, []);

  useEffect(() => {
    fetchAirQualityData();
  }, [selectedStation, fetchAirQualityData]);

  return (
    <div className="ml-20 mr-20 mb-[5%]">
      {/* Breadcrumb */}
      <Breadcrumb title={title} className="mb-[2%] mt-[3%] flex" />
      {/* Title */}
      <div className="text-left mb-8 mt-10">
        <h1 className="text-5xl text-gray-600 font-bold">Forecasting Mode</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Searach Bar */}
        <Searchbar
          stations={stations}
          onSelectStation={onStationChange}
          isToday={false}
        />
        {/* AQI Result */}
        <div className="hidden lg:flex lg:flex-row justify-evenly w-[320px] p-6 bg-[#FFE668] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <div className="w-[90px] bg-[#E3BD02] text-2xl flex justify-center rounded-lg items-center font-bold">
            {memoCalculateAverages?.avgAqi ?? 0}
          </div>
          <h1 className="text-2xl flex justify-center items-center font-bold">
            {memoCalculateAverages?.avgAqiResult ?? "Calculating ..."}
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
