import { createContext } from 'react';

const TodoContext = createContext({
  items: [],
  localStorage: [],
  totalAmount: 0,
  addTodo: (task) => {},
  removeTodo: (id) => {},
});

export default TodoContext;
