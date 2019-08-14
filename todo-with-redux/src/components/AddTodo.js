import React, { useState } from "react";
import { connect } from "react-redux";

// actions
import { addNewTodo } from "../actions";

const AddTodo = props => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.addNewTodo(todoText);
    setTodoText("");
  };

  return (
    <div>
      <h1>Add New Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          onChange={e => setTodoText(e.target.value)}
          value={todoText}
          placeholder="New todo..."
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addNewTodo }
)(AddTodo);
