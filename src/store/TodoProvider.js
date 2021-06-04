import { useReducer, useEffect } from 'react';
import TodoContext from './todo-context';

const ACTION = {
  ADD_TODO: 'add-todo',
  REMOVE_TODO: 'remove-todo',
};

const todoReducer = (todo, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return { ...todo, items: action.todo };
    default:
      return todo;
  }
};

const defaultTodoState = {
  items: [],
  totalAmount: 0,
};

function TodoProvider({ children }) {
  const [todoState, dispatchTodoAction] = useReducer(todoReducer, defaultTodoState);

  const addTodoToListHandler = (todo) => {
    dispatchTodoAction({
      type: ACTION.ADD_TODO,
      todo,
    });
  };

  const removeTodoListHandler = (id) => {
    dispatchTodoAction({
      type: ACTION.REMOVE_TODO,
      id,
    });
  };

  const todoContext = {
    items: todoState.items,
    totalAmount: todoState.totalAmount,
    addTodo: addTodoToListHandler,
    removeTodo: removeTodoListHandler,
  };

  return <TodoContext.Provider value={todoContext}>{children}</TodoContext.Provider>;
}

export default TodoProvider;
