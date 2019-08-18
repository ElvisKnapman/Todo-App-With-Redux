import React, { useState } from "react";
import { connect } from "react-redux";

// actions
import { addNewTodo } from "../actions";

// Material UI
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const styles = {
  input: {
    fontSize: "2rem"
  },

  label: {
    fontSize: "2rem"
  }
};

const AddTodo = props => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.addNewTodo(todoText);
    setTodoText("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <div className="todo-text-field">
          <TextField
            fullWidth
            label="New Todo"
            InputProps={{ style: styles.input }}
            InputLabelProps={{ style: styles.label }}
            type="text"
            name="todo"
            onChange={e => setTodoText(e.target.value)}
            value={todoText}
          />
        </div>
        <div>
          <Button
            style={{ fontSize: "1.3rem" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Add New Todo
          </Button>
        </div>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addNewTodo }
)(AddTodo);
