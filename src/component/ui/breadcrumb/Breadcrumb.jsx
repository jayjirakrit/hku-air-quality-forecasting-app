import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

function Breadcrumb({ title, className }) {
  const navigate = useNavigate();
  const internalClasses = "flex items-center mb-[2%] mt-[3%]";
  return (
    <div className={clsx(internalClasses, className)}>
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

export default memo(Breadcrumb);
