import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from "../actions/userActions";

const initialState = {
  isRegistering: false,
  successfullyRegistered: false
};

const registerUser = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_START:
      return {
        ...state,
        isRegistering: true
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        successfullyRegistered: true
      };

    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        successfullyRegistered: false
      };

    default:
      return state;
  }
};

export default registerUser;
