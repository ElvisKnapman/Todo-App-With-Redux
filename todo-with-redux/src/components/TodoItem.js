import React from "react";

const TodoItem = props => {
  return (
    <>
      <p>{props.todo.title}</p>
    </>
  );
};

export default TodoItem;
