import React from "react";

const App = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Header */}
      <div className="p-6 mt-4 max-w-xl mx-auto bg-white rounded-xl shadow-md  space-x-20">
        <div>
          <div className="text-xl font-medium text-black">Add the Task</div>
          <p className="text-gray-500">Only for practice purpose</p>
        </div>
      </div>
      {/* Add the task InputBar */}
      <form onSubmit={(e) => onFormSubmit(e)} className="max-w-xl mx-auto mt-5">
        <input
          type="text"
          className="focus:outline-none rounded-md p-2 shadow-sm placeholder-gray-500"
          placeholder="Enter the task here"
        />
        <button
          className="px-2.5 py-1.5 bg-green-400 text-white rounded-md focus:outline-none shadow-sm ml-1"
          type="submit"
        >
          Add
        </button>
      </form>
      {/* View Template */}
      <div className=" mt-5 p-6 bg-indigo-300 max-w-xl mx-auto shadow-sm rounded-xl  ">
        <ul className="list-none">
          <div className="flex items-center">
            <li className="bg-white w-max p-2 rounded-md my-2 ">First Task</li>
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
              >
                Delete
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <li className="bg-white w-max p-2 rounded-md my-2 ">Second Task</li>
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
              >
                Delete
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <li className="bg-white w-max p-2 rounded-md my-2 ">Third Task</li>
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
              >
                Delete
              </button>
            </div>
          </div>
        </ul>
        {/* Edit Template */}
        <form className="flex my-2 items-center">
          <div className="form-group">
            <input
              className="focus:outline-none rounded-md p-2 shadow-sm placeholder-gray-500"
              type="text"
              id="name"
            />
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="ml-1 bg-gray-400 text-white  px-1.5 py-1.5 rounded-md  focus:outline-none"
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
      </div>
    </>
  );
};

export default App;
