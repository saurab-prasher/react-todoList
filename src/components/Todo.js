import React, { useState } from "react";

const Todo = ({ name, deleteTask, id, editTask }) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const onInputChange = (e) => {
    setNewName(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    editTask(id, newName);
    setNewName("");
    setEditing(false);
  };

  const editingTemplate = (
    <form onSubmit={onFormSubmit} className="flex my-2 items-center">
      <div className="form-group">
        <input
          className="focus:outline-none rounded-md p-2 shadow-sm placeholder-gray-500"
          type="text"
          id="name"
          onChange={onInputChange}
          value={newName}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="ml-1 bg-gray-400 text-white px-1.5 py-1.5 rounded-md  focus:outline-none"
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="ml-1 px-1.5 py-1.5 rounded-md text-white bg-green-500 focus:outline-none"
        >
          Save
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="flex items-center">
      <li id={id} className="bg-white w-max p-2 rounded-md my-2 ">
        {name}
      </li>
      <div className="btn-group">
        <button
          type="button"
          className="ml-1 bg-yellow-400 px-1.5 py-1.5 text-gray-600 text-white rounded-md focus:outline-none"
          onClick={() => setEditing(true)}
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

  return isEditing ? editingTemplate : viewTemplate;
};

export default Todo;
