import React, {memo} from "react";

function AirQualityCard({ particle, value }) {
  return (
    <div className="flex justify-evenly w-5/12 p-6 bg-[#F6F6F6] text-xl rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="flex justify-center items-center w-5/12 bg-[#B8E052] border rounded text-gray-600 text-xl font-medium">
        {particle}
      </div>
      <div className="flex justify-center items-center text-center text-gray-600 font-medium">
        {value} µg/m³
      </div>
    </div>
  );
}

export default memo(AirQualityCard);
