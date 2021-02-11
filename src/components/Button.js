import React from "react";

const Button = ({ props }) => {
  const onButtonClick = () => {};
  return (
    <button
      className="px-2.5 py-1.5 bg-green-400 text-white rounded-md items-center focus:outline-none shadow-sm"
      type="submit"
      onClick={onButtonClick}
    >
      Click Me
    </button>
  );
};

export default Button;
