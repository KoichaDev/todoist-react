import { createContext } from 'react';

const SortContext = createContext({
  items: [],
  mouseclicked: false,
  sortDate: (todoList) => {},
});

export default SortContext;
