import React from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem";

const DisplayTodos = props => {
  return (
    <div>
      {props.todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(DisplayTodos);
