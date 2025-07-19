import React, { memo } from "react";
import { SearchSelect, SearchSelectItem, DatePicker } from "@tremor/react";
import { Switch } from "@headlessui/react";

function Searchbar({
  stations,
  onSelectStation,
  isToday,
  toggleEnabled,
  onToggleEnabled,
}) {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const dateFormated = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(isToday === true ? today : tomorrow);
  return (
    <div
      className={`flex flex-col lg:flex-row w-full ${
        toggleEnabled !== undefined ? "lg:w-[700px]" : "lg:w-[450px]"
      } p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer`}
    >
      {/* Date Selection */}
      <div className="w-full lg:w-1/2 flex flex-col mb-[4%]">
        <label className="flex block text-xl font-medium text-gray-700 ml-4 mb-4">
          Date:
        </label>
        <div className="flex">
          <div className="w-full ml-4 lg:w-9/10 relative flex justify-around bg-white">
            <DatePicker placeholder={dateFormated} disabled />
          </div>
        </div>
      </div>

      {/* Station Selection */}
      <div className="w-full lg:w-1/2 flex flex-col mb-[4%]">
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
                    {station.name}
                  </SearchSelectItem>
                ))
              ) : (
                <SearchSelectItem value="" disabled></SearchSelectItem>
              )}
            </SearchSelect>
          </div>
        </div>
      </div>

      {/* View Toggle */}
      {toggleEnabled !== undefined ? (
        <div className="w-full lg:w-1/2 flex flex-col mb-[4%]">
          <label className="flex block text-xl font-medium text-gray-700 ml-4 mb-4">
            View:
          </label>
          <div className="flex">
            <div className="flex block justify-center items-center space-x-3 text-xl font-medium text-gray-700 ml-4">
              <Switch
                checked={toggleEnabled}
                onChange={onToggleEnabled}
                className={`${toggleEnabled ? "bg-gray-500" : "bg-gray-200"}
          relative inline-flex h-[30px] w-[70px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    toggleEnabled ? "translate-x-0" : "translate-x-10"
                  }
            pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
              <label
                htmlFor="switch"
                className="text-sm text-gray-500 font-normal ml-4"
              >
                {toggleEnabled ? "Time" : "Trend"}
              </label>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default memo(Searchbar);
