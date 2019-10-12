import { combineReducers } from "redux";

// reducers
import addTodo from "./addTodo";
import usersTodos from "./usersTodos";

export default combineReducers({
  addTodo,
  usersTodos
});
