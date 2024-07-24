import React from "react";

const Button = ({ btnText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-8 bg-indigo-600 text-white hover:bg-indigo-500 rounded-md mt-3"
    >
      {btnText}
    </button>
  );
};

export default Button;
