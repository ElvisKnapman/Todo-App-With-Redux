import axios from "axios";
// ACTION TYPES
export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const FETCH_TODOS_START = "FETCH_TODOS_START";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

export const registerUser = (user, history) => async dispatch => {
  dispatch({ type: REGISTER_USER_START });

  try {
    const result = await axios.post(
      "http://localhost:9100/api/users/register",
      user
    );
    dispatch({ type: REGISTER_USER_SUCCESS, payload: result });
    // redirect user to login page after successfully registering
    history.push("/login");
  } catch (err) {
    console.log(err);
    dispatch({ type: REGISTER_USER_FAILURE });
  }
};

export const loginUser = (credentials, history) => async dispatch => {
  dispatch({ type: LOGIN_USER_START });
  try {
    const result = await axios.post(
      "http://localhost:9100/api/users/login",
      credentials
    );
    dispatch({ type: LOGIN_USER_SUCCESS, payload: result.data.user });
    // redirect user to their home page after successfully logging in
    history.push("/home");
  } catch (err) {
    if (err.response.status === 401)
      dispatch({
        type: LOGIN_USER_FAILURE,
        payload: "Invalid username or password. Please try again"
      });
  }
};

export const fetchUserTodos = (id, token) => async dispatch => {
  dispatch({ type: FETCH_TODOS_START });

  try {
    const todos = await axios.get(
      `http://localhost:9100/api/todos/user/${id}`,
      {
        headers: {
          authorization: token
        }
      }
    );

    // const todos = await axios.get(`http://localhost:9100/api/todos/user/1`, {
    //   headers: {
    //     authorization: token
    //   }
    // });

    dispatch({ type: FETCH_TODOS_SUCCESS, payload: todos.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: FETCH_TODOS_FAILURE });
  }
};
