import React, { useState, useEffect } from "react";
import "./Monitor.css";
import Map from "../ui/map/Map";
import Breadcrumb from "../ui/breadcrumb/Breadcrumb";
import { getRealTimeAirQuality } from "../../service/AirQualityService";
import _ from "lodash";

export default function Monitor() {
  const [realtimeAirQuality, setRealtimeAirQuality] = useState([]);
  const title = [
    {
      page: "Home",
      navigate: "/",
      currentPage: false,
    },
    {
      page: "Monitor",
      navigate: "/monitor",
      currentPage: true,
    },
  ];

  const fetchRealTimeAirQuality = async () => {
    const realtimeAQ = await getRealTimeAirQuality();
    if (_.isEqual(realtimeAirQuality, realtimeAQ) || realtimeAQ != null) {
      setRealtimeAirQuality(realtimeAQ);
    }
  };

  useEffect(() => {
    fetchRealTimeAirQuality();
  }, []);

  return (
    <div className="ml-20 mr-20">
      {/* Breadcrumb */}
      <Breadcrumb title={title} className="mb-[2%] mt-[3%] flex" />
      {/* Title */}
      <div className="text-left mb-14">
        <h1 className="text-5xl text-gray-600 font-bold">Monitoring Mode</h1>
      </div>
      {/* Map Component */}
      <div className="mb-[5%] relative">
        <Map
          airQualityDataList={realtimeAirQuality}
          height="80vh"
          width="100%"
        />
        {/* Classification Color */}
        <div className="flex flex-col justify-evenly items-center w-[10%] h-[40%] z-2 rounded absolute bottom-6 right-6 font-bold bg-white shadow-md text-[0rem] sm:text-[0.5rem] lg:text-sm">
          <div className="flex items-center justify-center bg-[#FD5C01] w-[80%] h-[14%] rounded">
            Unheathly
          </div>
          <div className="flex items-center justify-center bg-[#FB9C05] w-[80%] h-[14%] rounded">
            High
          </div>
          <div className="flex items-center justify-center bg-[#FBDD4B] w-[80%] h-[14%] rounded">
            Moderate
          </div>
          <div className="flex items-center justify-center bg-[#B8E052] w-[80%] h-[14%] rounded">
            Good
          </div>
        </div>
      </div>
    </div>
  );
}
