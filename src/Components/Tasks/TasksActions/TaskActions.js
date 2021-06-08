import React from 'react';
import EditIcon from '../../UI/Icons/EditIcon';
import ScheduleIcon from '../../UI/Icons/ScheduleIcon';
import CommentIcon from '../../UI/Icons/CommentIcon';
import TrashIcon from '../../UI/Icons/TrashIcon';
import classes from './TaskActions.module.scss';

function TasksActions({ editTask, deleteTask }) {
  return (
    <div className={classes['todo-list__actions']}>
      <button
        role='checkbox'
        aria-checked='false'
        aria-label='Mark task as Complete'
        title='Edit your task'
        onClick={editTask}>
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
        onClick={deleteTask}>
        <TrashIcon className={classes['todo-list__action-trash-icon']} />
      </button>
    </div>
  );
}

export default TasksActions;
