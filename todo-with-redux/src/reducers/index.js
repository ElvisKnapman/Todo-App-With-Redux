// action types
import { ADD_TODO, MARK_TODO_COMPLETED } from "../actions";

const initialState = {
  title: "Todo App w/ Redux!",
  todos: [
    {
      title: "make todo list using Redux",
      completed: false,
      id: 1
    }
  ]
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { title: action.payload, completed: false, id: Date.now() }
        ]
      };

    case MARK_TODO_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: true };
          }
          return todo;
        })
      };

    default:
      return state;
  }
};
