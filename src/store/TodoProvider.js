import { useState, useReducer, useEffect } from 'react';
import useLocalStorage from './../state/hooks/useLocalStorage';
import TodoContext from './todo-context';

const ACTION = {
  ADD: 'add-todo',
  TOGGLE_COMPLETE: 'toggle-complete',
  REMOVE: 'remove-todo',
};

const todoReducer = (todo, action) => {
  switch (action.type) {
    case ACTION.ADD:
      // The concat() method is used to merge two or more arrays.
      // This method does not change the existing arrays, but instead returns a new array.
      // Concat gives us a brand new array instead of editing the old array in the memory, which is better solution
      // This means when you add one task, then there will be array [0]. Adding another task, it will be [1],
      // Adding one more task, it will be [2] etc.
      const updatedTasks = todo.items.concat(action.todo);

      return { ...todo, items: updatedTasks };
    case ACTION.REMOVE:
      const taskFiltered = todo.items.filter((item) => item.id !== action.id);

      return { ...todo, items: taskFiltered };
    case ACTION.TOGGLE_COMPLETE:
      // return todo.items.map((todo) => {
      //   if (todo.id === action.id) {
      //     return { ...todo, completed: !todo.complete };
      //   }
      //   return todo;
      // });
      return;
    default:
      return todo;
  }
};

const defaultTodoState = {
  items: [],
  localStorage: window.localStorage.getItem('todos'),
  totalAmount: 0,
};

function TodoProvider({ children }) {
  const [localStorageTodos, setLocalStorageTodos] = useLocalStorage('todos', []);
  const [todoState, dispatchTodoAction] = useReducer(todoReducer, defaultTodoState);

  const addTodoToListHandler = (todo) => {
    setLocalStorageTodos([...localStorageTodos, todo]);
    dispatchTodoAction({
      type: ACTION.ADD,
      todo,
    });
  };

  const toggleTodoHandler = (id) => {
    const checkBoxHandlerId = id;
    const toggleComplete = localStorageTodos.map((localStorageTodo) => {
      if (checkBoxHandlerId === localStorageTodo.id) {
        return { ...localStorageTodo, completed: !localStorageTodo.completed };
      }
      return localStorageTodo;
    });

    setLocalStorageTodos(toggleComplete);
  };

  const removeTodoListHandler = (id) => {
    setLocalStorageTodos(localStorageTodos.filter((todo) => todo.id !== id));
    dispatchTodoAction({
      type: ACTION.REMOVE,
      id,
    });
  };

  const todoContext = {
    items: todoState.items,
    localStorage: localStorageTodos,
    totalAmount: todoState.totalAmount,
    addTodo: addTodoToListHandler,
    toggleComplete: toggleTodoHandler,
    removeTodo: removeTodoListHandler,
  };

  return <TodoContext.Provider value={todoContext}>{children}</TodoContext.Provider>;
}

export default TodoProvider;
