import React, { useState, useEffect } from "react";
import "./Forecast.css";
import AirQuality from "../../model/AirQuality";
import Searchbar from "../ui/serachbar/Searchbar";
import ForecastTable from "../ui/table/ForecastTable";
import Breadcrumb from "../ui/breadcrumb/Breadcrumb";

export default function Forecast() {
  const [airQuality, setAirQuality] = useState([]);
  const [airQualityCal, setAirQualityCal] = useState({});

  useEffect(() => {
    let airQualityList = [];
    airQualityList.push(new AirQuality("00:00", 50, 20, "25"));
    airQualityList.push(new AirQuality("00:01", 50, 20, "25"));
    airQualityList.push(new AirQuality("00:02", 50, 20, "25"));
    airQualityList.push(new AirQuality("00:03", 50, 20, "25"));
    airQualityList.push(new AirQuality("00:04", 50, 20, "25"));
    airQualityList.push(new AirQuality("00:05", 50, 20, "25"));
    airQualityList.push(new AirQuality("00:06", 50, 20, "25"));
    airQualityList.push(new AirQuality("00:07", 50, 20, "25"));
    airQualityList.push(new AirQuality("00:08", 50, 20, "25"));
    airQualityList.push(new AirQuality("00:09", 50, 20, "25"));
    airQualityList.push(new AirQuality("00:10", 50, 20, "25"));
    setAirQuality(airQualityList);
  }, []);

  const title = [
    {
      page: "Home",
      navigate: "/",
      currentPage: false
    },
    {
      page: "Forecast",
      navigate: "/forecast",
      currentPage: true

    },
  ];

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
        <Searchbar />
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

function calculateAverages(airQualityData) {
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
}
