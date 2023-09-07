import React from "react";

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="flex items-center">
      <div className="max-md:w-full lg:w-[70%] w-[75%] bg-gray-400 my-3 flex">
        <div
          className={`w-[${percentage}%] bg-white py-1 font-biriyani font-bold`}
        >
          <p className="text-black ml-3">{label}</p>
        </div>
      </div>
      <p className="mx-2 font-biriyani">{percentage}%</p>
    </div>
  );
};

export default ProgressBar;
