import axios from "axios";
// action types
export const ADD_TODO_START = "ADD_TODO_START";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";

export const addNewTodo = todo => async dispatch => {
  dispatch({ type: ADD_TODO_START });

  try {
    const result = await axios.post("http://localhost:9100/api/todos/create", {
      user_id: 1,
      todo: todo
    });
    dispatch({ type: ADD_TODO_SUCCESS, payload: result });
  } catch (err) {
    console.log("error", err);
    dispatch({ type: ADD_TODO_FAILURE });
  }
};
