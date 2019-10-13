import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

// actions
import { addNewTodo } from "../actions/todoActions";
import { fetchUserTodos } from "../actions/userActions";

// Material UI
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  inputElement: {
    fontSize: "2.5rem"
  },

  inputLabel: {
    fontSize: "1.7rem"
  },

  formControl: {
    margin: theme.spacing(1)
  }
}));

const AddTodo = ({ userID, token, addNewTodo, fetchUserTodos }) => {
  const classes = useStyles();
  const [labelWidth, setLabelWidth] = useState(0);
  const labelRef = useRef(null);
  const [todoText, setTodoText] = useState("");
  const [todoAdded, setTodoAdded] = useState(0);

  useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    fetchUserTodos(userID, token);
  }, [todoAdded]);

  const handleSubmit = e => {
    e.preventDefault();
    addNewTodo(todoText, userID);
    // increment count for use effect
    setTodoAdded(todoAdded + 1);
    setTodoText("");
  };
  console.log("TODO ADDED", todoAdded);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="todo-text-field">
          <FormControl variant="outlined">
            <InputLabel
              classes={{ root: classes.inputLabel }}
              ref={labelRef}
              htmlFor="component-outlined"
            >
              Add Todo
            </InputLabel>
            <OutlinedInput
              classes={{ input: classes.inputElement }}
              name="todo"
              id="component-outlined"
              onChange={e => setTodoText(e.target.value)}
              value={todoText}
              labelWidth={labelWidth}
            />
          </FormControl>
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
  { addNewTodo, fetchUserTodos }
)(AddTodo);
