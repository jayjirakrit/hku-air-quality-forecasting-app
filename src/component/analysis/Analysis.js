import React from "react";
import "./Analysis.css";
import Breadcrumb from "../ui/breadcrumb/Breadcrumb";

export default function Analysis() {
  const title = [
    {
      page: "Home",
      navigate: "/",
      currentPage: false,
    },
    {
      page: "Analysis",
      navigate: "/analysis",
      currentPage: true,
    },
  ];

  return (
    <div className="ml-20 mr-20">
      {/* Breadcrumb */}
      <div className="mt-10 mb-8 flex justify start">
        <Breadcrumb title={title} />
      </div>
      {/* Title */}
      <div className="text-left mb-8 mt-10">
        <h1 className="text-5xl text-gray-600 font-bold">Analysis Mode</h1>
      </div>

      {/* Dashboard */}
      <div className="flex flex-col">
        <div className="flex flex-row justify-evenly">
          <div className="w-full md:w-1/2 p-6 m-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointe">
            <h1 className="flex font-semibold text-xl text-gray-700">
              AQI Indicator
            </h1>
            <h3 className="flex text-gray-600">
              Hong Kong Air Quality Indicator
            </h3>
          </div>
          <div className="w-full md:w-1/2 p-6 m-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointe">
            <div className="flex font-semibold text-xl text-gray-700">
              AQI Quality Particles <span className="font-medium">µg/m³</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row"></div>
      </div>
    </div>
  );
}
