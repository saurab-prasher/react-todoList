import React, { useState, useRef, useEffect } from "react";

const InputBar = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const searchFieldRef = useRef(null);

  useEffect(() => {
    searchFieldRef.current.focus();
  }, []);

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
    <form
      onSubmit={onFormSubmit}
      className="flex items-center justify-between max-w-xl mx-auto mt-5"
    >
      <input
        ref={searchFieldRef}
        type="text"
        className="rounded-md p-2 shadow-sm placeholder-gray-500 w-3/4"
        placeholder="Enter the task here"
        value={name}
        onChange={onInputChange}
      />
      <button
        className="px-2.5 py-2 bg-green-400 text-white rounded-md shadow-sm "
        type="submit"
      >
        Add New Task
      </button>
    </form>
  );
};

export default InputBar;
