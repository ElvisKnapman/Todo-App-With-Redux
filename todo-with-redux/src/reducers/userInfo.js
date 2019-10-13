import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from "../actionCreators/userActions";

const initialState = {
  userAccount: {},
  todos: [],
  isLoggingIn: false,
  isLoggedIn: false,
  jwt: ""
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false,
        jwt: ""
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userAccount: { ...action.payload },
        isLoggingIn: false,
        isLoggedIn: true
      };
    default:
      return state;
  }
};

export default userInfo;
