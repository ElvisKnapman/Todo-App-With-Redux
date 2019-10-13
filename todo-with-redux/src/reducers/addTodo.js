// action types
import {
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE
} from "../actions/todoActions";

// moment for timestamp
import moment from "moment";

const initialState = {
  isAdding: false
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_START:
      return {
        ...state,
        isAdding: true
      };

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        isAdding: false
      };

    case ADD_TODO_FAILURE:
      return {
        ...state,
        isAdding: false
      };

    // case MARK_TODO_COMPLETED:
    //   return {
    //     ...state,
    //     todos: state.todos.map(todo => {
    //       if (todo.id === action.payload.id) {
    //         return { ...todo, completed: true, completedAt: moment() };
    //       }
    //       return todo;
    //     })
    //   };

    default:
      return state;
  }
};

export default todoReducer;
