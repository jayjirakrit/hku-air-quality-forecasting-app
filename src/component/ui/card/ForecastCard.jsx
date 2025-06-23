import React, { memo } from "react";
import clsx from "clsx";

function ForecastCard({ title, description, image, onClick, className }) {
  const internalClasses = "flex flex-row max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer";
  return (
    <div className={clsx(internalClasses, className)}
     onClick={onClick}>
      <div className="mr-12 ml-2">
        <img src={image} className="max-w-28" alt="Forecast" />
      </div>
      <div className="flex flex-col justify-center items-center text-center mb-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-700">{title}</h3>
        <p className="font-medium text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default memo(ForecastCard);
