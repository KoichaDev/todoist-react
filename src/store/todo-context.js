import { createContext } from 'react';

const TodoContext = createContext({
  id: '',
  items: [],
  completed: false,
  addTodo: (todo) => {},
  removeTodo: (id) => {},
});

export default TodoContext;
