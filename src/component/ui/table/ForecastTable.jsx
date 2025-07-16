import React, { memo } from "react";

function ForecastTable({ airQuality }) {
  return (
    <div className="font-inter flex flex-col justify-start max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      {/* Title */}
      <div className="text-left text-xl font-bold mb-4">Hourly Forecast (Next Day)</div>
      {/* Sub Title */}
      <div className="text-left">Hong Kong Air Quality Forecast</div>
      {/* Table */}
      <div className="flex flex-wrap justify-evenly gap-4 mt-4">
        {airQuality?.map((data, index) => (
          <div
            key={index}
            className="flex-1 min-w-[150px] max-w-[200px] p-3 rounded-lg hover:bg-gray-50"
          >
            <div className="space-y-2 flex flex-col gap-y-2 items-center">
              <p className="font-semibold text-gray-600">{data.time}</p>
              <h1 className="font-semibold text-gray-600">AQI:</h1>
              <h1 className="font-medium flex items-center justify-center w-12 h-8 bg-[#FFD400] rounded-md">
                {data.aqi}
              </h1>
              <h1 className="font-semibold text-gray-600">PM 2.5:</h1>
              <h1 className="font-medium">{data.pm2_5} µg/m³</h1>
              <h1 className="font-semibold text-gray-600">Temp:</h1>
              <h1 className="font-medium">{data.temperature}°C</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ForecastTable);
