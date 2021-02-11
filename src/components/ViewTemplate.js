import React, { useState } from "react";
import EditingTemplate from "./EditingTemplate";

const List = ({ list, setList, isEditing, setEditing }) => {
  const onDeleteClick = (i) => {
    const newList = list.filter((item) => item !== list[i]);
    setList(newList);
  };

  const onEditClick = (li) => {
    console.log("edit button clicked:", li);
    setEditing(true);
  };

  const viewTemplate = list.map((el, i) => {
    return (
      <ul className="flex items-center justify-between">
        <li key={i} className="list-none bg-white p-2 rounded-md my-2 w-60 ">
          {el}
        </li>

        <button
          type="button"
          className=" ml-1 bg-yellow-400 px-1.5 py-1.5 text-gray-600 text-white rounded-md focus:outline-none "
          onClick={() => onEditClick(el)}
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

  return (
    <div className=" mt-5 p-6 bg-indigo-300 max-w-sm mx-auto shadow-sm rounded-xl ">
      <div>
        {isEditing ? (
          <EditingTemplate
            listValue={list}
            isEditing={isEditing}
            setEditing={setEditing}
          />
        ) : (
          viewTemplate
        )}
      </div>
    </div>
  );
};

export default List;
