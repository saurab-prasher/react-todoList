import React from "react";

const Todo = ({ name, deleteTask, id }) => {
  return (
    <div className="flex items-center">
      <li id={id} className="bg-white w-max p-2 rounded-md my-2 ">
        {name}
      </li>
      <div className="btn-group">
        <button
          type="button"
          className="ml-1 bg-yellow-400 px-1.5 py-1.5 text-gray-600 text-white rounded-md focus:outline-none "
        >
          Edit
        </button>
        <button
          type="button"
          className="ml-1 bg-red-600 px-1.5 py-1.5 text-white rounded-md focus:outline-none"
          onClick={() => deleteTask(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
