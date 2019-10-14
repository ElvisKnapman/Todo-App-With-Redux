// action types
import {
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  MARK_TODO_COMPLETED_START,
  MARK_TODO_COMPLETED_SUCCESS,
  MARK_TODO_COMPLETED_FAILURE
} from "../actions/todoActions";

const initialState = {
  isAdding: false,
  isMarking: false
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

    case MARK_TODO_COMPLETED_START:
      return {
        ...state,
        isMarking: true
      };

    case MARK_TODO_COMPLETED_SUCCESS:
      return {
        ...state,
        isMarking: false
      };

    case MARK_TODO_COMPLETED_FAILURE:
      return {
        ...state,
        isMarking: false
      };

    default:
      return state;
  }
};

export default todoReducer;
