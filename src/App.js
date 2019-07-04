import React, { useReducer, useState } from "react";

const initialState = {
  toDos: []
};

const ADD = "add";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload }] };
    default:
      return;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewToDo] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newTodo });
    setNewToDo("");
  };
  const onChange = e => {
    const {
      target: { value }
    } = e;
    setNewToDo(value);
  };
  return (
    <>
      <h1>Add to do</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={newTodo}
          placeholder="Write to do"
          type="text"
        />
      </form>

      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo, index) => (
          <li key={index}>{toDo.text}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
