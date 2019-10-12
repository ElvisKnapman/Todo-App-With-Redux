import { combineReducers } from "redux";

// reducers
import registerUser from "../reducers/registerUser";
import addTodo from "./addTodo";
import usersTodos from "./usersTodos";

export default combineReducers({
  addTodo,
  usersTodos,
  registerUser
});
