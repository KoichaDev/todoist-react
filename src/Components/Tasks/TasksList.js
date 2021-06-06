import { useContext } from 'react';
import TodoContext from './../../store/todo-context';
import Tasks from './Tasks';

import classes from './TasksList.module.scss';

function TasksList() {
  const todoCtx = useContext(TodoContext);

  const removeTaskHandler = (id) => {
    todoCtx.removeTodo(id);
  };

  const todoList = todoCtx.items.map((item) => {
    return (
      <li key={item.id}>
        <ul className={classes['todo-list']}>
          <Tasks {...item} />
        </ul>
      </li>
    );
  });

  return (
    <>
      <ul>{todoList}</ul>
    </>
  );
}

export default TasksList;
