import React from "react";
import { connect } from "react-redux";

// actions
import { markTodoCompleted } from "../actions";

const TodoItem = ({ markTodoCompleted, todo }) => {
  return (
    <>
      <p onClick={() => markTodoCompleted(todo)}>{todo.title}</p>
    </>
  );
};

export default connect(
  null,
  { markTodoCompleted }
)(TodoItem);
