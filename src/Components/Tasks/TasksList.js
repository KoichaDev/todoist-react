import { useContext } from 'react';
import TodoContext from './../../store/todo-context';
import classes from './TasksList.module.scss';

function TasksList() {
  const todoCtx = useContext(TodoContext);

  console.log(todoCtx.items);
  const todoList = todoCtx.items.map((item) => {
    const { id, task } = item;
    return <li key={id}>{task}</li>;
  });

  return (
    <div>
      <ul>{todoList}</ul>
    </div>
  );
}

export default TasksList;
