import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ToDoProvider from "./context";

ReactDOM.render(
  <ToDoProvider>
    <App />
  </ToDoProvider>,
  document.querySelector("#root")
);
