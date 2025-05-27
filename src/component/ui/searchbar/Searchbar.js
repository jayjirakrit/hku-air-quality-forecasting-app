import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

export default function Searchbar() {
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [isOpenStation, setIsOpenStation] = useState(false);
  const [selectedOptionDate, setSelectedOptionDate] = useState(null);
  const [selectedOptionStation, setSelectedOptionStation] =
    useState("Select station");

  const options = ["Station 1", "Station 2", "Station 3"];

  return (
    <div className="flex flex-row w-[450px] p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      {/* Date Selection */}
      <div className="w-full md:w-1/2 flex flex-col">
        <label className="block text-xl font-medium text-gray-700 mb-4">
          Date:
        </label>
        <div className="flex justify-center">
          <div className="w-full md:w-5/6 relative flex justify-around rounded-md bg-white border border-gray-300">
            <div className="w-100% rounded-1-md px-4 py-2">Select Date</div>
            <div className="relative">
              <button
                onClick={() => setIsOpenDate(!isOpenDate)}
                type="button"
                className="hover:text-gray-700 inline-flex 
                    h-full items-center justify-center rounded-r-md border-1"
              >
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* {isOpenDate && (
          <DatePicker
            selected={selectedOptionDate}
            onChange={(date) => setSelectedOptionDate(date)}
            className="shadow rounded p-2 border-gray-300"
            placeholderText="Select a date"
          />
        )} */}
      </div>

      {/* Station Selection */}
      <div className="w-full md:w-1/2 flex flex-col">
        <label className="block text-xl font-medium text-gray-700 mb-4">
          Station:
        </label>
        <div className="flex justify-center">
          <div className="w-full md:w-5/6  relative flex justify-around rounded-md bg-white border border-gray-300">
            <div className="w-100% rounded-1-md px-4 py-2">Select Station</div>
            <div className="relative">
              <button
                onClick={() => setIsOpenStation(!isOpenStation)}
                type="button"
                className="hover:text-gray-700 inline-flex 
                    h-full items-center justify-center rounded-r-md border-1"
              >
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpenStation && (
          <div className="absolute mt-16 z-10 w-full md:w-2/12 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            {options.map((option) => (
              <div
                key={option}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedOptionStation(option);
                  setIsOpenStation(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
