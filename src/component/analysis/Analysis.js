import React from "react";
import "./Analysis.css";
import Breadcrumb from "../ui/breadcrumb/Breadcrumb";
import BarVisual from "../ui/chart/BarVisual";
import CircleVisual from "../ui/chart/CircleVisual";
import AirQualityCard from "../ui/card/AirQualityCard";

const aqiColors = [
  {
    color: "#00e400",
    value: "Good",
  },
  {
    color: "#FFFF00",
    value: "Moderate",
  },
  {
    color: "#FF7E00",
    value: "Unhealthy Sensitive Groups",
  },
  {
    color: "#FF0000",
    value: "Unhealthy",
  },
  {
    color: "#99004C",
    value: "Very Unhealthy",
  },
  {
    color: "#4C0026",
    value: "Hazardous",
  },
];
const titles = [
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

const recommmends = [
  { image: "", value: "Sensitive groups should wear a mask outdoors" },
  { image: "", value: "Sensitive groups should reduce outdoor exercise" },
  { image: "", value: "Close your windows to avoid dirty outdoor air" },
];

export default function Analysis() {
  return (
    <div className="ml-20 mr-20">
      {/* Breadcrumb */}
      <div className="mt-10 mb-8 flex">
        <Breadcrumb title={titles} />
      </div>
      {/* Title */}
      <div className="text-left mb-8 mt-10">
        <h1 className="text-5xl text-gray-600 font-bold">Analysis Mode</h1>
      </div>
      {/* Dashboard */}
      <div className="flex flex-col">
        <div className="flex flex-row justify-evenly">
          {/* AQI Indicator */}
          <div className="w-full md:w-1/2 p-6 m-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h1 className="flex font-semibold text-xl text-gray-700">
              AQI Indicator
            </h1>
            <h3 className="flex text-gray-600">
              Hong Kong Air Quality Indicator
            </h3>
            <CircleVisual />
            {/* Color Indicator */}
            <div className="flex justift-evenly mt-6 gap-4">
              {aqiColors.map((aqiColor) => (
                <div className="w-full md:w-1/6 flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-[${aqiColor.color}]`}
                  ></div>
                  <p className="text-center text-xl">{aqiColor.value}</p>
                </div>
              ))}
            </div>
          </div>
          {/* AQI Quality Particle */}
          <div className="w-full md:w-1/2 p-6 m-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-left font-semibold text-xl text-gray-700 mb-5">
              AQI Quality Particles
              <span className="font-normal ml-2">µg/m³</span>
            </div>
            <div className="flex flex-col justify-evenly gap-12">
              {/* PM2.5 & NO */}
              <div className="flex flex-row justify-evenly">
                <AirQualityCard particle="PM2.5" value="25" />
                <AirQualityCard particle="NO" value="25" />
              </div>
              {/* O3 & NO2 */}
              <div className="flex flex-row justify-evenly">
                <AirQualityCard particle="O3" value="25" />
                <AirQualityCard particle="NO2" value="25" />
              </div>
              {/* SO2 & CO */}
              <div className="flex flex-row justify-evenly">
                <AirQualityCard particle="SO2" value="25" />
                <AirQualityCard particle="CO" value="25" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-evenly">
          {/* Statistic Analysis */}
          <div className="w-full md:w-1/2 p-6 m-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h1 className="flex font-semibold text-xl text-gray-700">
              Statistic Analysis
            </h1>
            <h3 className="flex text-gray-600">
              Hong Kong Air Quality Analysis
            </h3>
            <BarVisual />
          </div>
          {/* Health Recommendation */}
          <div className="w-full md:w-1/2 p-6 m-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h1 className="flex font-semibold text-xl text-gray-700 mb-4">
              Health Recommendation
            </h1>
            <div className="flex flex-col gap-8 justify-evenly">
              {recommmends.map((recommmend) => (
                <div className="flex w-full h-[95px] bg-[#F6F6F6]">
                  <div className="flex justify-center items-center w-full md:w-1/3">
                    <div className="w-full md:w-3/5 h-16 bg-[#D9D9D9]"></div>
                  </div>
                  <div className="flex justify-center items-center w-full md:w-2/3 text-xl">
                    {recommmend.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
