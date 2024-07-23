import React from "react";

const Input = ({ value, type, name, placeholder, id, onChange, style }) => {
  return (
    <input
      style={style}
      className="w-full h-8 border rounded-md p-2 outline-none mt-3"
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      id={id}
    />
  );
};

export default Input;