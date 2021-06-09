import { createContext } from 'react';

const SortContext = createContext({
  items: [],
  sortDate: (todoList) => {},
});

export default SortContext;
