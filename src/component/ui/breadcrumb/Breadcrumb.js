import React from "react";
import { useNavigate } from "react-router-dom";

export default function Breadcrumb({ title }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center">
      {title.map((data, index) => (
        <React.Fragment key={index}>
          <span
            className={`text-xl font-semibold cursor-pointer ${
              data.currentPage 
                ? "text-gray-700 hover:text-blue-500 underline underline-offset-4" 
                : "text-gray-700 hover:text-blue-500 hover:underline hover:underline-offset-4"
            }`}
            onClick={() => navigate(data.navigate)}
          >
            {data.page}
          </span>
          {/* Add separator if not the last item */}
          {index < title.length - 1 && (
            <span className="mx-2 text-gray-500">/</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}