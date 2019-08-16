import React from "react";
import { connect } from "react-redux";

// components
import TodoItem from "./TodoItem";
import CompletedTodos from "./CompletedTodos/CompletedTodos";

const DisplayTodos = ({ todos }) => {
  return (
    <div>
      <div>
        {todos.length > 0
          ? todos.map(todo => {
              return <TodoItem key={todo.id} todo={todo} />;
            })
          : "You currently have no items in your todo list."}
      </div>
      <CompletedTodos />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos.todo
  };
};

export default connect(
  mapStateToProps,
  {}
)(DisplayTodos);
