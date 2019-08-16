// action types
export const ADD_TODO = "ADD_TODO";
export const MARK_TODO_COMPLETED = "MARK_TODO_COMPLETED";

// action creators
export const addNewTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const markTodoCompleted = todo => {
  return {
    type: MARK_TODO_COMPLETED,
    payload: todo
  };
};
