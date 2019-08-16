import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// components
import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";
import Home from "./components/Home";

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Route path="/" component={Home} />
    //     <Route path="/add" component={AddTodo} />
    //     <Route path="/view" component={DisplayTodos} />
    //   </div>
    // </Router>
    <div className="App">
      <Home />
      <AddTodo />
      <DisplayTodos />
    </div>
  );
}

export default App;
