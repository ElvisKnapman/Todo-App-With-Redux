import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// CSS
import "./sass/index.scss";

// Moment
import Moment from "react-moment";

// Components
import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";
import DisplayCompletedTodos from "./components/CompletedTodos/DisplayCompletedTodos";

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

Moment.startPooledTimer(30000);

function App() {
  const classes = useStyles();
  return (
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
  );
}

export default App;
