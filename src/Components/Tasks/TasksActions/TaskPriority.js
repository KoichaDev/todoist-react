import React from 'react';
import { CheckBoxIcon, UnCheckBoxIcon } from '../../UI/Icons/CheckBoxIcon';
import classes from './TaskPriority.module.scss';

function TasksPriority({ isEditingMode, editContentMode, updateCheckboxTaskHandler, ...item }) {
  const { task, completed } = item;

  const toggleEditMode = isEditingMode ? editContentMode : <p>{task}</p>;

  const toggleCheckBoxIcon = completed ? (
    <CheckBoxIcon className={classes['todo-list__action-checked-icon']} />
  ) : (
    <UnCheckBoxIcon className={classes['todo-list__action-unchecked-icon']} />
  );
  return (
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
      {toggleEditMode}
    </div>
  );
}

export default TasksPriority;
