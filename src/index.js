import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ToDoProvider from "./context";

ReactDOM.render(
  <ToDoProvider>
    <App />
  </ToDoProvider>,
  document.querySelector("#root")
);
