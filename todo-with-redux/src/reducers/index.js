import { combineReducers } from "redux";

// reducers
import registerUser from "../reducers/registerUser";
import addTodo from "./addTodo";
import userInfo from "./userInfo";

export default combineReducers({
  addTodo,
  userInfo,
  registerUser
});
