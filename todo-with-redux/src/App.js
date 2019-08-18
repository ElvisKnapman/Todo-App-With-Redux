import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// CSS
import "./css/index.css";

// Components
import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";
import DisplayCompletedTodos from "./components/CompletedTodos/DisplayCompletedTodos";

// Material UI
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#39C"
    },
    secondary: {
      main: "#000"
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="app-container">
        <div className="add-todo-container">
          <AddTodo />
        </div>
        <div className="flex-divide-containers">
          <DisplayTodos />
          <DisplayCompletedTodos />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
