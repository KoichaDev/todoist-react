import { useContext } from 'react';
import TodoContext from './../../store/todo-context';
import Tasks from './Tasks';

import classes from './TasksList.module.scss';

function TasksList() {
  const todoCtx = useContext(TodoContext);

  const deleteTaskHandler = (id) => todoCtx.removeTodo(id);

  const todoList = todoCtx.items.map((item) => {
    const { id } = item;
    return (
      <li key={id}>
        <ul className={classes['todo-list']}>
          <Tasks {...item} deleteHandler={deleteTaskHandler.bind(null, id)} />
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
