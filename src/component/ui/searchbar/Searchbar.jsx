import React, { useState, useEffect } from "react";
import { SearchSelect, SearchSelectItem, DatePicker } from "@tremor/react";

export default function Searchbar({ stations, onDateChange, onStationChange }) {
  const onSelectDate = (date) => {
    if (onDateChange) onDateChange(date);
  };

  const onSelectStation = (station) => {
    if (onStationChange) onStationChange(station);
  };

  return (
    <div className="flex flex-row w-[450px] p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      {/* Date Selection */}
      <div className="w-full md:w-1/2 flex flex-col">
        <label className="flex block text-xl font-medium text-gray-700 ml-4 mb-4">
          Date:
        </label>
        <div className="flex">
          <div className="w-full ml-4 md:w-9/10 relative flex justify-around bg-white">
            <DatePicker
              placeholder="Select Date"
              onValueChange={onSelectDate}
            />
          </div>
        </div>
      </div>

      {/* Station Selection */}
      <div className="w-full md:w-1/2 flex flex-col">
        <label className="flex block text-xl font-medium text-gray-700 mb-4 ml-4 ">
          Station:
        </label>
        <div className="flex">
          <div className="w-full ml-4 md:w-9/10 relative flex justify-around bg-white">
            <SearchSelect
              placeholder="Select Station"
              onValueChange={onSelectStation}
            >
              {stations?.length > 0 ? (
                stations.map((station, index) => (
                  <SearchSelectItem key={index} value={station.name}>
                    {station.station}
                  </SearchSelectItem>
                ))
              ) : (
                <SearchSelectItem value="" disabled></SearchSelectItem>
              )}
            </SearchSelect>
          </div>
        </div>
      </div>
    </div>
  );
}
