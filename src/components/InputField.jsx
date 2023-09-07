import React from "react";

const InputField = ({ placeholder, type }) => {
  return (
    <div className="w-72 my-4">
      <input
        className="w-full border-2 border-black py-2 px-2 focus:outline-none font-biriyani"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
