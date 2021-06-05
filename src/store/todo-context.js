import { createContext } from 'react';

const TodoContext = createContext({
  items: [],
  totalAmount: 0,
  addTodo: (task) => {},
  removeTodo: (id) => {},
});

export default TodoContext;
