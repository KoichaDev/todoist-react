import { useReducer, useEffect } from 'react';
import TodoContext from './todo-context';

const ACTION = {
  ADD_TODO: 'add-todo',
  REMOVE_TODO: 'remove-todo',
};

const todoReducer = (todo, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      // The concat() method is used to merge two or more arrays.
      // This method does not change the existing arrays, but instead returns a new array.
      // Concat gives us a brand new array instead of editing the old array in the memory, which is better solution
      // This means when you add one task, then there will be array [0]. Adding another task, it will be [1],
      // Adding one more task, it will be [2] etc.
      const updatedTasks = todo.items.concat(action.todo);

      return { ...todo, items: updatedTasks };
    case ACTION.REMOVE_TODO:
      return todo.items.filter((item) => item.id !== action.id);
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
