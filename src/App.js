import React, { useReducer, useState } from "react";
import uuid from "uuid";

const initialState = {
  toDos: []
};

const ADD = "add";
const DEL = "del";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload, id: uuid() }] };
    case DEL:
      return {
        toDos: state.toDos.filter(toDo => {
          return toDo.id !== action.payload;
        })
      };
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
        {state.toDos.map(toDo => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <button onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
