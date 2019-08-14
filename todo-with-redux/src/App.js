import React from "react";
import "./App.css";

// components
import Test from "./components/Test";
import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  return (
    <div className="App">
      <Test />
      <AddTodo />
      <DisplayTodos />
    </div>
  );
}

export default App;
