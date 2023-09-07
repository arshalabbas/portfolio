import React from "react";

function MessageField() {
  return (
    <div className="w-72 my-4">
      <textarea
        name="message"
        placeholder="Your message here..."
        className="w-full border-2 border-black py-2 px-2 focus:outline-none font-biriyani"
      >
        Message...
      </textarea>
    </div>
  );
}

export default MessageField;
