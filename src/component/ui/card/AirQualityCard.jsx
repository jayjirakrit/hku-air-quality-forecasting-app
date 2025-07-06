import React, { memo } from "react";
import "./AirQualityCard.css";

function AirQualityCard({ particle, value }) {
  const defineColor = (particle, value) => {
    if (particle === "PM2.5") {
      switch (true) {
        case 0 <= value && value < 16:
          return "bg-good";
        case 16 <= value && value < 40:
          return "bg-moderate";
        case 41 <= value && value < 65:
          return "bg-unhealthy";
        case 66 <= value:
          return "bg-very-unhealthy";
        default:
          return "bg-default";
      }
    } else {
      switch (true) {
        case 0 <= value && value < 51:
          return "bg-good";
        case 51 <= value && value < 101:
          return "bg-moderate";
        case 101 <= value && value < 151:
          return "bg-unhealthy";
        case 151 <= value:
          return "bg-very-unhealthy";
        default:
          return "bg-default";
      }
    }
  };
  const bgAirParticleColor = defineColor(particle, value);
  return (
    <div className="flex justify-evenly w-5/12 p-6 bg-[#F6F6F6] text-xl rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div
        className={`flex justify-center items-center w-5/12 ${bgAirParticleColor} border rounded text-gray-600 text-xl font-medium"`}
      >
        {particle}
      </div>
      <div className="flex justify-center items-center text-center text-gray-600 font-medium">
        {value} µg/m³
      </div>
    </div>
  );
}

export default memo(AirQualityCard);
