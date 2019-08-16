import React from "react";

import { connect } from "react-redux";

// components
import CompletedTodoItem from "./CompletedTodoItem";

const CompletedTodos = ({ completedTodos }) => {
  return (
    <div>
      <h1>Completed Todos</h1>
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
    completedTodos: state.todos.completed
  };
};

export default connect(
  mapStateToProps,
  {}
)(CompletedTodos);
