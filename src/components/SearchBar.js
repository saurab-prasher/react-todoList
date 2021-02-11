import React from "react";

const SearchBar = ({ term, setTerm }) => {
  const onTermChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <input
      onChange={onTermChange}
      value={term}
      type="text"
      className="focus:outline-none focus:ring focus:border-blue-50 rounded-md  p-1.5 shadow-sm w-64 placeholder-gray-500"
      placeholder="Enter the task here"
    />
  );
};

export default SearchBar;
