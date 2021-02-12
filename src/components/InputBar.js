import React, { useState } from "react";

const InputBar = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    onSubmit(name);
    setName("");
  };

  const onInputChange = (e) => {
    setName(e.target.value);
  };
  return (
    <form onSubmit={onFormSubmit} className="max-w-xl mx-auto mt-5">
      <input
        type="text"
        className="focus:outline-none rounded-md p-2 shadow-sm placeholder-gray-500"
        placeholder="Enter the task here"
        value={name}
        onChange={onInputChange}
      />
      <button
        className="px-2.5 py-1.5 bg-green-400 text-white rounded-md focus:outline-none shadow-sm ml-1"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default InputBar;
