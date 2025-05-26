import React from "react";
import { useNavigate } from "react-router-dom";

export default function Breadcrumb({ title }) {
  const navigate = useNavigate();
  return (
    <>
      {title.map((data, index) => (
        <React.Fragment key={index}>
          <span
            className="text-xl font-semibold text-gray-700 cursor-pointer"
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
    </>
  );
}
