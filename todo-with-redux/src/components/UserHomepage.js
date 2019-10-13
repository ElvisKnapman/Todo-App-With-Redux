import React from "react";
import { connect } from "react-redux";

// Components
import AddTodo from "./AddTodo";
import DisplayTodos from "./DisplayTodos";
import DisplayCompletedTodos from "./CompletedTodos/DisplayCompletedTodos";

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
  const classes = useStyles();
  console.log("PROPS", props);

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <div className="app-container">
          <div className="add-todo-container">
            <AddTodo />
          </div>
          <Container classes={{ root: classes.container }} maxWidth="md">
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <DisplayTodos />
              </Grid>
              <Grid item xs={6}>
                <DisplayCompletedTodos />
              </Grid>
            </Grid>
          </Container>
        </div>
      </MuiThemeProvider>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userInfo.userAccount,
    todos: state.userInfo.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(UserHomepage);
