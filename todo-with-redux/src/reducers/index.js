// action types
import { ADD_TODO } from "../actions";

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
    default:
      return state;
  }
};
