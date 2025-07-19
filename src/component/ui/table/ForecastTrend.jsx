import React, { memo } from "react";
import { LineChart } from "@tremor/react";

function ForecastTable({ airQuality }) {
  const aqhiData = airQuality.map((item) => {
    return {
      time: item.time,
      aqhi: item.aqi,
    };
  });

  const pm2_5Data = airQuality.map((item) => {
    return {
      time: item.time,
      pm2_5: item.pm2_5,
    };
  });

  return (
    <>
      <div className="font-inter flex flex-col justify-start max-w-full mb-[4%] p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        {/* Title */}
        <div className="text-left text-xl font-bold mb-4">
          AQHI Hourly Forecast (Next Day)
        </div>
        {/* Sub Title */}
        <div className="text-left">Hong Kong AQHI Forecast</div>
        {/* AQHI Graph */}
        <div className="flex flex-wrap justify-evenly gap-4 mt-4">
          <LineChart
            className="h-80"
            data={aqhiData}
            index="time"
            categories={["aqhi"]}
            colors={["indigo"]}
            valueFormatter={(number) =>
              `${Intl.NumberFormat().format(number).toString()}`
            }
            yAxisWidth={60}
            onValueChange={(v) => console.log(v)}
          ></LineChart>
        </div>
      </div>
      <div className="font-inter flex flex-col justify-start max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        {/* Title */}
        <div className="text-left text-xl font-bold mb-4">
          PM2.5 Hourly Forecast (Next Day)
        </div>
        {/* Sub Title */}
        <div className="text-left">Hong Kong PM2.5 Forecast</div>
        {/* PM 2.5 Graph */}
        <div className="flex flex-wrap justify-evenly gap-4 mt-4">
          <LineChart
            className="h-80"
            data={pm2_5Data}
            index="time"
            categories={["pm2_5"]}
            colors={["cyan"]}
            yAxisWidth={60}
            yAxisLabel="µg/m³"
          ></LineChart>
        </div>
      </div>
    </>
  );
}

export default memo(ForecastTable);
