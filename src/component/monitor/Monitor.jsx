import React, { useState, useEffect } from "react";
import "./Monitor.css";
import Map from "../ui/map/Map";
import Breadcrumb from "../ui/breadcrumb/Breadcrumb";
import { getRealTimeAirQuality } from "../../service/AirQualityService";


export default function Monitor() {
  const [realtimeAirQuality, setRealtimeAirQuality] = useState([]);
  const title = [
    {
      page: "Home",
      navigate: "/",
      currentPage: false
    },
    {
      page: "Monitor",
      navigate: "/monitor",
      currentPage: true
    },
  ];

  const fetchRealTimeAirQuality = async () => {
    const realtimeAQ = await getRealTimeAirQuality();
    setRealtimeAirQuality(realtimeAQ);
  }

  useEffect(() => {
    fetchRealTimeAirQuality()
  },[])

  return (
    <div className="ml-20 mr-20">
      {/* Breadcrumb */}
      <div className="mt-10 mb-8 flex justify start">
        <Breadcrumb title={title} />
      </div>
      {/* Title */}
      <div className="text-left mb-14">
        <h1 className="text-5xl text-gray-600 font-bold">Monitoring Mode</h1>
      </div>
      {/* Map Component */}
      <Map airQualityDataList={realtimeAirQuality} height="80vh" width="100%" />
    </div>
  );
}
