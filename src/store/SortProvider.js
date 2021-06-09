import { useState, useEffect, useReducer, useContext } from 'react';
import TodoContext from './todo-context';
import SortContext from './sort-context';

const ACTION = {
  SORT: 'sort',
};

const sortReducer = (state, action) => {
  switch (action.type) {
    case ACTION.SORT:
      console.log(action);
      let countClicked = action.todoList.countClicked;

      // Check if number is even based on the number we counted amount of clicked from the mouse
      if (countClicked % 2 === 0) {
        return { ...state, items: action.todoList.items.sort((a, b) => a.timestamp - b.timestamp) };
      }
      // If not even, then it's odd number
      return { ...state, items: action.todoList.items.sort((a, b) => b.timestamp - a.timestamp) };
    default:
      return state;
  }
};

const defaultSortState = {
  items: [],
};

function SortProvider({ children }) {
  const [mouseClicked, setMouseClicked] = useState(false);
  const [countClicked, setCountClicked] = useState(0);
  const [sortState, dispatchSortAction] = useReducer(sortReducer, defaultSortState);

  const sortDateHandler = (items) => {
    setMouseClicked(true);
    setCountClicked(countClicked + 1);

    dispatchSortAction({
      type: ACTION.SORT,
      todoList: {
        mouseClicked,
        countClicked,
        items,
      },
    });
  };

  const sortContext = {
    items: sortState.items,
    mouseClicked: mouseClicked,
    sortDate: sortDateHandler,
    sortTimeStamp: (timeStamp) => {},
  };

  return <SortContext.Provider value={sortContext}>{children}</SortContext.Provider>;
}

export default SortProvider;
