import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

// actions
import { addNewTodo } from "../actions";

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

const AddTodo = props => {
  const classes = useStyles();
  const [labelWidth, setLabelWidth] = useState(0);
  const labelRef = useRef(null);
  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

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
  { addNewTodo }
)(AddTodo);
