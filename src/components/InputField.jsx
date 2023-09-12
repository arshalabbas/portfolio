import React from "react";

const InputField = ({ placeholder, type, name }) => {
  return (
    <div className="w-72 my-4">
      <input
        name={name}
        className="w-full border-2 border-black py-2 px-2 focus:outline-none font-biriyani to-reveal from-l"
        type={type}
        placeholder={placeholder}
        required={true}
      />
    </div>
  );
};

export default InputField;
