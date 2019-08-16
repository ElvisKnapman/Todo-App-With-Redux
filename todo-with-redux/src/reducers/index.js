// action types
import { ADD_TODO, MARK_TODO_COMPLETED } from "../actions";

const initialState = {
  title: "Todo App w/ Redux!",
  todos: {
    todo: [
      {
        title: "make todo list using Redux",
        completed: false,
        id: 1
      }
    ],
    completed: []
  }
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          todo: [
            ...state.todos.todo,
            { title: action.payload, completed: false, id: Date.now() }
          ]
        }
      };

    case MARK_TODO_COMPLETED:
      const [item] = state.todos.todo.filter(
        todo => todo.id === action.payload.id
      );
      console.log(item);

      return {
        ...state,
        todos: {
          todo: state.todos.todo.filter(todo => todo.id !== action.payload.id),
          completed: [...state.todos.completed, item]
        }
      };

    default:
      return state;
  }
};
