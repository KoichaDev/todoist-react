import React from 'react';
import { CheckBoxIcon, UnCheckBoxIcon } from './../UI/Icons/CheckBoxIcon';
import EditIcon from './../UI/Icons/EditIcon';
import ScheduleIcon from './../UI/Icons/ScheduleIcon';
import CommentIcon from './../UI/Icons/CommentIcon';
import TrashIcon from './../UI/Icons/TrashIcon';
import classes from './Tasks.module.scss';

function Tasks({ updateCheckboxTaskHandler, deleteHandler, ...item }) {
  const { task, completed } = item;

  let toggleCheckBoxIcon = completed ? (
    <CheckBoxIcon className={classes['todo-list__action-checked-icon']} />
  ) : (
    <UnCheckBoxIcon className={classes['todo-list__action-unchecked-icon']} />
  );

  return (
    <>
      <li>
        <div className={classes['todo-list__action-priority']}>
          <button
            type='button'
            role='checkbox'
            aria-checked='false'
            aria-label='Mark task as Complete'
            title='Mark as your Todo task is completed'
            onClick={updateCheckboxTaskHandler}>
            {toggleCheckBoxIcon}
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
            title='Delete your task'
            onClick={deleteHandler}>
            <TrashIcon className={classes['todo-list__action-trash-icon']} />
          </button>
        </div>
      </li>
    </>
  );
}

export default Tasks;
