import { createContext } from 'react';

const TodoContext = createContext({
  items: [],
  localStorage: [],
  totalAmount: 0,
  addTodo: (task) => {},
  editTodo: (task) => {},
  toggleComplete: (id) => {},
  removeTodo: (id) => {},
});

export default TodoContext;
