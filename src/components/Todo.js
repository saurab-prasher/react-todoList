import React, { useState, useRef, useEffect } from "react";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Todo = ({ name, deleteTask, id, editTask }) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  const wasEditing = usePrevious(isEditing);

  useEffect(() => {
    if (!wasEditing && isEditing) editFieldRef.current.focus();
    if (wasEditing && !isEditing) editButtonRef.current.focus();
  }, [wasEditing, isEditing]);

  const onInputChange = (e) => {
    setNewName(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!newName) return;
    editTask(id, newName);
    setNewName("");
    setEditing(false);
  };

  const editingTemplate = (
    <form onSubmit={onFormSubmit} className="flex my-2 items-center">
      <div className="form-group">
        <label>{name.charAt(0).toUpperCase() + name.slice(1)} : </label>
        <input
          className=" rounded-md p-2 shadow-sm placeholder-gray-500"
          type="text"
          id="name"
          onChange={onInputChange}
          value={newName}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="ml-1 bg-gray-400 text-white px-1.5 py-1.5 rounded-md  "
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="ml-1 px-1.5 py-1.5 rounded-md text-white bg-green-500 "
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
          className="ml-1 bg-yellow-400 px-1.5 py-1.5 text-gray-600 text-white rounded-md "
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          Edit
        </button>
        <button
          type="button"
          className="ml-1 bg-red-600 px-1.5 py-1.5 text-white rounded-md "
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
