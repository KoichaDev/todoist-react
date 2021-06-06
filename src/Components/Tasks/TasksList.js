import { useContext } from 'react';
import TodoContext from './../../store/todo-context';
import { CheckBoxIcon, UnCheckBoxIcon } from './../UI/Icons/CheckBoxIcon';
import EditIcon from './../UI/Icons/EditIcon';
import ScheduleIcon from './../UI/Icons/ScheduleIcon';
import CommentIcon from './../UI/Icons/CommentIcon';
import classes from './TasksList.module.scss';

function TasksList() {
  const todoCtx = useContext(TodoContext);

  const todoList = todoCtx.items.map((item) => {
    const { id, task } = item;
    return (
      <li key={id}>
        <ul className={classes['todo-list']}>
          <li>
            <div className={classes['todo-list__action-priority']}>
              <button
                type='button'
                role='checkbox'
                aria-checked='false'
                aria-label='Mark task as Complete'>
                <UnCheckBoxIcon />
              </button>
              <p>{task}</p>
            </div>
          </li>
          <li>
            <div className={classes['todo-list__action']}>
              <button role='Checkbox' title='Edit your task'>
                <EditIcon />
              </button>
              <button role='re-schedule task' title='Reschedule your task'>
                <ScheduleIcon />
              </button>
              <button role='Comment task' title='Comment your task'>
                <CommentIcon />
              </button>
            </div>
          </li>
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
