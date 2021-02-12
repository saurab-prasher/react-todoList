import React, { useState } from "react";
import Todo from "./Todo";
import Header from "./Header";
import InputBar from "./InputBar";
import { nanoid } from "nanoid";

const App = (props) => {
  const [tasks, setTasks] = useState(props.tasks);

  const addTask = (name) => {
    const newTask = { id: `todo-${nanoid()}`, name: name };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    const remainingTask = tasks.filter((task) => id !== task.id);
    setTasks(remainingTask);
  };

  const editTask = (id, newName) => {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) return { ...task, name: newName };
      return task;
    });

    setTasks(editedTaskList);
  };
  const taskList = tasks.map((task) => (
    <Todo
      key={task.id}
      id={task.id}
      name={task.name}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  return (
    <div className="md:container mx-auto ">
      {/* Header */}
      <Header />
      {/* Add the task InputBar */}
      <InputBar onSubmit={addTask} />

      {/* View Template */}
      <div className=" mt-5 p-6 bg-indigo-300 max-w-xl mx-auto shadow-sm rounded-xl  ">
        <ul className="list-none">{taskList}</ul>
        {/* Edit Template */}
      </div>
    </div>
  );
};

export default App;
