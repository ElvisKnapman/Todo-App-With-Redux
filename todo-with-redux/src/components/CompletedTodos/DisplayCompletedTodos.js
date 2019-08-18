import React from "react";

import { connect } from "react-redux";

// components
import CompletedTodoItem from "./CompletedTodoItem";

const CompletedTodos = ({ completedTodos }) => {
  console.log("COMPLETED TODOS", completedTodos);

  return (
    <div>
      <h1 className="todo-category-header">Completed</h1>

      {completedTodos.length > 0 ? (
        completedTodos.map(todo => {
          return <CompletedTodoItem key={todo.id} todo={todo} />;
        })
      ) : (
        <p>No completed todos to display.</p>
      )}
    </div>
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
