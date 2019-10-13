import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from "../actions/userActions";

const initialState = {
  userAccount: {},
  todos: [],
  isLoggingIn: false,
  isLoggedIn: false,
  fetchingTodos: false
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userAccount: { ...action.payload },
        isLoggingIn: false,
        isLoggedIn: true
      };

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false
      };

    case FETCH_TODOS_START:
      return {
        ...state,
        fetchingTodos: true
      };

    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...action.payload],
        fetchingTodos: false
      };

    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        fetchingTodos: false
      };
    default:
      return state;
  }
};

export default userInfo;
