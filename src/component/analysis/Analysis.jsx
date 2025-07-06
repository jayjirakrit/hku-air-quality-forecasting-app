import React, { useState, useEffect, useCallback } from "react";
import "./Analysis.css";
import Breadcrumb from "../ui/breadcrumb/Breadcrumb";
import Searchbar from "../ui/searchbar/Searchbar";
import BarVisual from "../ui/chart/BarVisual";
import CircleVisual from "../ui/chart/CircleVisual";
import AirQualityCard from "../ui/card/AirQualityCard";
import { getRealTimeAirQualityAnalysis } from "../../service/AirQualityService";
import _ from "lodash";

const aqiColors = [
  {
    color: "#00e400",
    range: "1-3",
    value: "Low",
  },
  {
    color: "#FFFF00",
    range: "4-6",
    value: "Moderate",
  },
  {
    color: "#FF7E00",
    range: "7-10",
    value: "High",
  },
  {
    color: "#FF0000",
    range: "10+",
    value: "Very High",
  },
];
const title = [
  {
    page: "Home",
    navigate: "/",
    currentPage: false,
  },
  {
    page: "Analysis",
    navigate: "/analysis",
    currentPage: true,
  },
];

const stations = [
  { name: "Central and Western" },
  { name: "Kowloon City" },
  { name: "Kwun Tong" },
  { name: "Sai Kung" },
  { name: "Wan Chai" },
  { name: "Yau Tsim Mong" },
];

export default function Analysis() {
  const [selectedStation, setSelectedStation] = useState("Select station");
  const [airQuality, setAirQuality] = useState([]);
  const [selectedAirQuality, setSelectedAirQuality] = useState(null);
  const [chartData, setChartData] = useState([]);

  const fetchRealTimeAirQuality = useCallback(async () => {
    try {
      let response = await getRealTimeAirQualityAnalysis();
      if (response.length > 0) {
        setAirQuality(response);
      }
    } catch (err) {
      // setError(err.message);
    } finally {
      // setLoading(false);
    }
  }, []);

  const onAirQualityChange = useCallback(() => {
    const aqChanged = airQuality?.filter((aq) => {
      return (
        aq.station?.toString()?.toUpperCase() === selectedStation?.toUpperCase()
      );
    });
    const chartData = [];
    if (aqChanged[0]?.pm2_5)
      chartData.push({
        name: "PM2.5",
        "Number of Air Quality Particles": aqChanged[0]?.pm2_5,
      });
    if (aqChanged[0]?.no)
      chartData.push({
        name: "NO",
        "Number of Air Quality Particles": aqChanged[0]?.no,
      });
    if (aqChanged[0]?.no2)
      chartData.push({
        name: "NO2",
        "Number of Air Quality Particles": aqChanged[0]?.no2,
      });
    setChartData(chartData);
    setSelectedAirQuality(aqChanged[0]);
  }, [airQuality, selectedStation]);

  const onStationChange = useCallback((station) => {
    setSelectedStation(station);
  }, []);

  useEffect(() => {
    fetchRealTimeAirQuality();
  }, []);

  useEffect(() => {
    onAirQualityChange();
  }, [selectedStation, onAirQualityChange]);

  return (
    <div className="ml-20 mr-20">
      {/* Breadcrumb */}
      <Breadcrumb title={title} className="mt-10 mb-8 flex" />
      {/* Title */}
      <div className="text-left mb-8 mt-10">
        <h1 className="text-5xl text-gray-600 font-bold">Analysis Mode</h1>
      </div>

      {/* Dashboard */}
      <div className="flex flex-col">
        {/* Searach Bar */}
        <Searchbar
          stations={stations}
          onSelectStation={onStationChange}
          isToday={true}
        />
        <div className="flex flex-col lg:flex-row justify-evenly">
          {/* AQI Indicator */}
          <div className="w-full lg:w-1/2 p-6 mr-[3%] my-[3%] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h1 className="flex font-semibold text-xl text-gray-700">
              AQHI Indicator
            </h1>
            <h3 className="flex text-gray-600">
              Hong Kong Air Quality Health Indicator
            </h3>
            <CircleVisual aqhi={selectedAirQuality?.aqi} />
            {/* Color Indicator */}
            <div className="hidden lg:flex justify-evenly mt-6 gap-4">
              {aqiColors.map((aqiColor) => (
                <div className="w-full lg:w-1/6 flex flex-col items-center">
                  <div
                    className="w-12 h-12 mb-[5%] flex text-white font-bold justify-center items-center"
                    style={{ backgroundColor: aqiColor.color }}
                  >
                    {aqiColor.range}
                  </div>
                  <p className="text-center text-md lg:text-lg">
                    {aqiColor.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* AQI Quality Particle */}
          <div className="w-full lg:w-1/2 p-6 m-[3%] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-left font-semibold text-xl text-gray-700">
              AQI Quality Particles
              <span className="font-normal ml-2">µg/m³</span>
            </div>
            <div className="h-full flex flex-col justify-evenly gap-2">
              {/* PM2.5 & NO */}
              <div className="h-1/5 flex flex-row justify-evenly">
                {selectedAirQuality?.pm2_5 != null && (
                  <AirQualityCard
                    particle="PM2.5"
                    value={selectedAirQuality?.pm2_5}
                  />
                )}
                {selectedAirQuality?.no != null && (
                  <AirQualityCard
                    particle="NO"
                    value={selectedAirQuality?.no}
                  />
                )}
              </div>
              {/* O3 & NO2 */}
              <div className="h-1/5 flex flex-row justify-evenly">
                {selectedAirQuality?.no2 ? (
                  <AirQualityCard
                    particle="NO2"
                    value={selectedAirQuality?.no2}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-evenly">
          {/* Statistic Analysis */}
          <div className="w-full p-6 mr-[3%] my-[3%] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h1 className="flex font-semibold text-xl text-gray-700">
              Statistic Analysis
            </h1>
            <h3 className="flex text-gray-600">
              Hong Kong Air Quality Analysis
            </h3>
            <BarVisual chartData={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
}
