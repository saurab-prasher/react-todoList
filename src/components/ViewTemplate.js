import React, { useState } from "react";

const ViewTemplate = ({ listValue, setList, isEditing, setEditing }) => {
  const onDeleteClick = (i) => {
    const newList = listValue.filter((item) => item !== listValue[i]);
    setList(newList);
  };

  const onEditClick = (li, i) => {
    console.log("edit button clicked:", li, i);
    setEditing(true);
  };
  const renderView = listValue.map((el, i) => {
    return (
      <ul className="flex items-center justify-between">
        <li key={i} className="list-none bg-white p-2 rounded-md my-2 w-60 ">
          {el}
        </li>

        <button
          type="button"
          className=" ml-1 bg-yellow-400 px-1.5 py-1.5 text-gray-600 text-white rounded-md focus:outline-none "
          onClick={() => onEditClick(el, i)}
        >
          edit
        </button>
        <button
          type="button"
          className="ml-1 bg-red-600 px-1.5 py-1.5 text-white rounded-md focus:outline-none"
          onClick={() => onDeleteClick(i)}
        >
          delete
        </button>
      </ul>
    );
  });

  return <>{renderView}</>;
};

export default ViewTemplate;
