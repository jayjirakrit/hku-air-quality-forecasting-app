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
      <div className="ml-20 flex mt-10">
        <Breadcrumb title={title} />
      </div>
      <div className="min-h-screen flex">
        <div className="w-full md:w-2/5 flex flex-col justify-evenly ml-20">
          {/* Mode Option */}
          <Card
            title="Forecasting"
            description="Select this to view forecast data"
            image={ForecastImg}
            onClick={() => navigate("/forecast")}
          />
          <Card
            title="Monitoring"
            description="Select this to monitor data"
            image={MonitorImg}
            onClick={() => navigate("/monitor")}
          />
          <Card
            title="Analysis"
            description="Select this to view analysis data"
            image={AnalysisImg}
            onClick={() => navigate("/analysis")}
          />
        </div>

        {/* Home Title */}
        <div className="w-full md:w-3/5 flex flex-col justify-evenly items-center ml-24">
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
