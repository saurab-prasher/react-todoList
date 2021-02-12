import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import "./index.css";

const DATA = [
  {
    id: "todo-0",
    name: "First Task",
  },
  {
    id: "todo-1",
    name: "Second Task",
  },
  {
    id: "todo-2",
    name: "Third Task",
  },
];

ReactDOM.render(<App tasks={DATA} />, document.querySelector("#root"));
