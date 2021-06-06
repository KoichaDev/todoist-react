import { useContext } from 'react';
import TodoContext from './../../store/todo-context';
import { CheckBoxIcon, UnCheckBoxIcon } from './../UI/Icons/CheckBoxIcon';
import EditIcon from './../UI/Icons/EditIcon';
import ScheduleIcon from './../UI/Icons/ScheduleIcon';
import CommentIcon from './../UI/Icons/CommentIcon';
import TrashIcon from './../UI/Icons/TrashIcon';
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
                aria-label='Mark task as Complete'
                title='Mark as your Todo task is completed'>
                <UnCheckBoxIcon classname={classes['todo-list__action-uncheck-icon']} />
              </button>
              <p>{task}</p>
            </div>
          </li>
          <li>
            <div className={classes['todo-list__action']}>
              <button
                role='checkbox'
                aria-checked='false'
                aria-label='Mark task as Complete'
                title='Edit your task'>
                <EditIcon className={classes['todo-list__action-edit-icon']} />
              </button>
              <button
                role='edit'
                aria-checked='false'
                aria-label='Reschedule your todo task '
                title='Reschedule your task'>
                <ScheduleIcon className={classes['todo-list__action-schedule-icon']} />
              </button>
              <button
                role='edit'
                aria-checked='false'
                aria-label='Add extra comment your choice for the todo task'
                title='Comment your task'>
                <CommentIcon className={classes['todo-list__action-comment-icon']} />
              </button>
              <button
                role='delete'
                aria-checked='false'
                aria-label='Delete your todo task'
                title='Delete your task'>
                <TrashIcon className={classes['todo-list__action-trash-icon']} />
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
