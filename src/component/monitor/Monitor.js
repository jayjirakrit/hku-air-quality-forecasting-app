import React from "react";
import "./Monitor.css";
import Map from "../ui/map/Map";
import Breadcrumb from "../ui/breadcrumb/Breadcrumb";

export default function Monitor() {
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
      <Map height="650px" width="100%" />
    </div>
  );
}
