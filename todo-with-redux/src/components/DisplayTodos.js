import React from "react";
import { connect } from "react-redux";

// components
import TodoItem from "./TodoItem";

const DisplayTodos = ({ todos }) => {
  return (
    <div>
      <h1 className="todo-category-header">Todo</h1>
      {todos.length > 0
        ? todos.map(todo => {
            return <TodoItem key={todo.id} todo={todo} />;
          })
        : "You currently have no items in your todo list."}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // pull out incomplete todos
    todos: state.todos.filter(todo => !todo.completed)
  };
};

export default connect(
  mapStateToProps,
  {}
)(DisplayTodos);
