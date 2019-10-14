import React from "react";

// Material UI
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

// components
import TodoItem from "./TodoItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  h3: {
    fontSize: "2.7rem",
    padding: "1rem 2rem",
    backgroundColor: "#39C",
    color: "#fff"
  }
}));

const DisplayTodos = ({ todos }) => {
  const classes = useStyles();
  return (
    <>
      <Paper classes={{ root: classes.todoHeaders }}>
        <Typography variant="h3" align="center" classes={{ h3: classes.h3 }}>
          Todo
        </Typography>
      </Paper>
      {todos.length > 0 ? (
        todos.map(todo => {
          return (
            <TodoItem key={todo.id} todo={todo} completed={todo.completed} />
          );
        })
      ) : (
        <p>You currently have no items in your todo list.</p>
      )}
    </>
  );
};

export default DisplayTodos;
