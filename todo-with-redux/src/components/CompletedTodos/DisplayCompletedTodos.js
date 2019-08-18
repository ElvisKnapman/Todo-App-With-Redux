import React from "react";

import { connect } from "react-redux";

// components
import CompletedTodoItem from "./CompletedTodoItem";

// Material UI
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

// Material UI useStyles
// import useStyles from "../material/styles";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  h3: {
    fontSize: "2.7rem",
    padding: "1rem 2rem",
    backgroundColor: "#39C",
    color: "#fff"
  }
}));

const CompletedTodos = ({ completedTodos }) => {
  const classes = useStyles();
  console.log("COMPLETED TODOS", completedTodos);

  return (
    <>
      <Paper classes={{ root: classes.todoHeaders }}>
        <Typography variant="h3" align="center" classes={{ h3: classes.h3 }}>
          Completed
        </Typography>
      </Paper>

      {completedTodos.length > 0 ? (
        completedTodos.map(todo => {
          return <CompletedTodoItem key={todo.id} todo={todo} />;
        })
      ) : (
        <p>No completed todos to display.</p>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    // pull out completed todos
    completedTodos: state.todos.filter(todo => todo.completed)
  };
};

export default connect(
  mapStateToProps,
  {}
)(CompletedTodos);
