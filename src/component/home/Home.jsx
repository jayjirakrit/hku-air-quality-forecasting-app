import React from "react";
import "./Home.css";
import Card from "../ui/card/ForecastCard";
import ForecastImg from "../../img/forecast_img.png";
import MonitorImg from "../../img/monitor_img.png";
import AnalysisImg from "../../img/analysis_img.png";
import HomeImg from "../../img/home_img.png";
import Breadcrumb from "../ui/breadcrumb/Breadcrumb";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const title = [
    {
      page: "Home",
      navigate: "/",
      currentPage: true,
    },
  ];
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb title={title} className="flex ml-20 mb-[5%] mt-[2%]" />
      <div className="min-h-screen mb-[3%] md:flex">
        {/* Mode Option */}
        <div className="w-full md:w-2/5 flex flex-col md:justify-around items-center md:items-start md:ml-20">
          <Card
            title="Forecasting"
            description="Select this to view forecast data"
            image={ForecastImg}
            onClick={() => navigate("/forecast")}
            className="w-full mb-[10%] max-w-sm mx-auto md:max-w-md md:mx-[0]"
          />
          <Card
            title="Monitoring"
            description="Select this to monitor data"
            image={MonitorImg}
            onClick={() => navigate("/monitor")}
            className="w-full mb-[10%] max-w-sm mx-auto md:max-w-md md:mx-[0]"
          />
          <Card
            title="Analysis"
            description="Select this to view analysis data"
            image={AnalysisImg}
            onClick={() => navigate("/analysis")}
            className="w-full mb-[10%] max-w-sm mx-auto md:max-w-md md:mx-[0]"
          />
        </div>

        {/* Home Title */}
        <div className="w-full md:w-3/5 flex flex-col md:justify-evenly items-center md:ml-24">
          <h1 className="home-title font-bold text-7xl text-gray-600">
            HKU AQF
          </h1>
          <div className="home-img">
            <img src={HomeImg} className="max-w-lg" alt="Forecast" />
          </div>
        </div>
      </div>
    </>
  );
}
