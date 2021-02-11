import React, { useState } from "react";

const EditingTemplate = ({ listValue, isEditing, setEditing }) => {
  console.log(listValue);
  const [value, setValue] = useState(listValue);
  const onCancelClick = () => {
    setEditing(false);
  };

  const onValueChange = (e) => {
    setValue(e.target.value);
  };

  const onSaveClick = (e) => {
    e.preventDefault();
    console.log("Save button clicked");
  };

  return (
    <form className="flex my-2">
      <div className="form-group">
        <input
          className="focus:outline-none focus:ring focus:border-blue-50 rounded-md  p-2 shadow-sm  placeholder-gray-500"
          type="text"
          id="name"
          onChange={(e) => onValueChange(e)}
          value={value}
        />
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="ml-1 bg-gray-400 text-white  px-1.5 py-1.5 rounded-md  focus:outline-none"
          onClick={() => onCancelClick()}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="ml-1  px-1.5 py-1.5 rounded-md text-white bg-green-500 focus:outline-none"
          onClick={(e) => onSaveClick(e)}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditingTemplate;
