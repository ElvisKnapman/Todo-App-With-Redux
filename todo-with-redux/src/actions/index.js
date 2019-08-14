// action types
export const ADD_TODO = "ADD_TODO";

// action creators
export const addNewTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};
