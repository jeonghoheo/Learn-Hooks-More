import React from "react";
import { COMPLETE, UNCOMPLETE, DEL } from "../actions";
import { useDispatch } from "../context";
export default ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  const renderCompletedDel = () => {
    if (!isCompleted) {
      return (
        <span
          role="img"
          aria-label=""
          onClick={() => dispatch({ type: DEL, payload: id })}
        >
          ❌
        </span>
      );
    }
  };
  return (
    <li>
      <span>{text}</span>
      {renderCompletedDel()}
      <span
        role="img"
        aria-label=""
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })
        }
      >
        {isCompleted ? "🙅🏻‍♂️" : "✅"}
      </span>
    </li>
  );
};
