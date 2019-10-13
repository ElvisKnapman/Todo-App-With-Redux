import axios from "axios";
// action types
export const ADD_TODO_START = "ADD_TODO_START";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";

export const MARK_TODO_COMPLETED_START = "MARK_TODO_COMPLETED_START";
export const MARK_TODO_COMPLETED_SUCCESS = "MARK_TODO_COMPLETED_SUCCESS";
export const MARK_TODO_COMPLETED_FAILURE = "MARK_TODO_COMPLETED_FAILURE";

export const DELETE_TODO_START = "DELETE_TODO_START";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE";

export const addNewTodo = (todo, userID) => async dispatch => {
  dispatch({ type: ADD_TODO_START });

  try {
    console.log("ID", userID);
    console.log("TODO TITLE", todo);
    const result = await axios.post("http://localhost:9100/api/todos/create", {
      user_id: userID,
      title: todo,
      completed: false
    });
    dispatch({ type: ADD_TODO_SUCCESS, payload: result.data });
  } catch (err) {
    console.log("error", err);
    dispatch({ type: ADD_TODO_FAILURE });
  }
};
