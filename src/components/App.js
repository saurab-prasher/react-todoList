import React, { useState } from "react";
import Todo from "./Todo";
import Header from "./Header";
import InputBar from "./InputBar";

const App = (props) => {
  const [tasks, setTasks] = useState(props.tasks);

  const AddTask = (name) => {
    const newTask = { id: "id", name: name };
    setTasks([...tasks, newTask]);
  };
  const taskList = tasks.map((task) => <Todo key={task.id} name={task.name} />);

  return (
    <>
      {/* Header */}
      <Header />
      {/* Add the task InputBar */}
      <InputBar onSubmit={AddTask} />

      {/* View Template */}
      <div className=" mt-5 p-6 bg-indigo-300 max-w-xl mx-auto shadow-sm rounded-xl  ">
        <ul className="list-none">{taskList}</ul>
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
