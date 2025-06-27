import React, { memo } from "react";
import { SearchSelect, SearchSelectItem, DatePicker } from "@tremor/react";

function Searchbar({ stations, onDateChange, onSelectStation }) {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowFormated = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(tomorrow);
  return (
    <div className="flex flex-row w-full lg:w-[450px] p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      {/* Date Selection */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <label className="flex block text-xl font-medium text-gray-700 ml-4 mb-4">
          Date:
        </label>
        <div className="flex">
          <div className="w-full ml-4 lg:w-9/10 relative flex justify-around bg-white">
            <DatePicker
              placeholder={tomorrowFormated}
              disabled
            />
          </div>
        </div>
      </div>

      {/* Station Selection */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <label className="flex block text-xl font-medium text-gray-700 mb-4 ml-4 ">
          Station:
        </label>
        <div className="flex">
          <div className="w-full ml-4 lg:w-9/10 relative flex justify-around bg-white">
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

export default memo(Searchbar);
