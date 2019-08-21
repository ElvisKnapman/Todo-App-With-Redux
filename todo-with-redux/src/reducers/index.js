// action types
import { ADD_TODO, MARK_TODO_COMPLETED } from "../actions";

// moment for timestamp
import moment from "moment";

const initialState = {
  todos: [
    {
      title: "make todo list using Redux",
      completed: false,
      id: 1,
      createdAt: "2019-08-18T21:10:15.956Z",
      completedAt: ""
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
          {
            title: action.payload,
            completed: false,
            id: Date.now(),
            createdAt: moment()
          }
        ]
      };

    case MARK_TODO_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: true, completedAt: moment() };
          }
          return todo;
        })
      };

    default:
      return state;
  }
};
