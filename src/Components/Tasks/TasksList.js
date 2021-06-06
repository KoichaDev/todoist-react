import { useContext } from 'react';
import TodoContext from './../../store/todo-context';
import classes from './TasksList.module.scss';

function TasksList() {
  const todoCtx = useContext(TodoContext);

  const todoList = todoCtx.items.map((item) => {
    const { id, task } = item;
    return (
      <li key={id}>
        <ul>
          <li>
            <label htmlFor='checkbox'></label>
            <input type='checkbox' id='checkbox' />
          </li>
          <li>
            <p>{task}</p>
          </li>
          <li>
            <button>
              <i class='far fa-edit'></i>
              Edit
            </button>
          </li>
        </ul>
      </li>
    );
  });

  return (
    <div>
      <ul>{todoList}</ul>
    </div>
  );
}

export default TasksList;
