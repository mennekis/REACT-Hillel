import React from "react";

const Input = (props) => {
  const { type = "text", placeholder, value, onChange, checked } = props;
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        checked={checked}
        onChange={(e)=> onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
