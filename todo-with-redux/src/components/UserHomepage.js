import React, { useEffect } from "react";
import { connect } from "react-redux";

// Components
import AddTodo from "./AddTodo";
import DisplayTodos from "./DisplayTodos";
import DisplayCompletedTodos from "./CompletedTodos/DisplayCompletedTodos";

// action creators
import { fetchUserTodos } from "../actions/userActions";

// Material UI
import {
  createMuiTheme,
  MuiThemeProvider,
  makeStyles
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#39C"
    },
    secondary: {
      main: "#000"
    }
  },
  spacing: 10
});

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "5rem"
  }
}));

const UserHomepage = props => {
  const { id, username, firstName, lastName, email, token } = props.user;
  const { todos, fetchUserTodos, isAdding, isMarking } = props;
  const classes = useStyles();

  useEffect(() => {
    console.log("in use effect");
    fetchUserTodos(id, token);
  }, [isAdding, isMarking]);

  console.log("PROPS", props);

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <div className="app-container">
          <div className="add-todo-container">
            <h1>Todo List for {firstName}</h1>
            <AddTodo userID={id} token={token} />
          </div>
          <Container classes={{ root: classes.container }} maxWidth="sm">
            <DisplayTodos todos={todos} />
          </Container>
        </div>
      </MuiThemeProvider>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userInfo.userAccount,
    todos: state.userInfo.todos,
    isAdding: state.addTodo.isAdding,
    isMarking: state.addTodo.isMarking
  };
};

export default connect(
  mapStateToProps,
  { fetchUserTodos }
)(UserHomepage);
