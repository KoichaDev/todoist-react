import React from 'react';
import { CheckBoxIcon, UnCheckBoxIcon } from '../../UI/Icons/CheckBoxIcon';
import classes from './TaskPriority.module.scss';

function TasksPriority({ toggleEditMode, onClick, isEditingMode, isCompleted }) {
  let taskContent = '';
  const toggleCheckBoxIcon = isCompleted ? (
    <CheckBoxIcon className={classes['todo-list__action-checked-icon']} />
  ) : (
    <UnCheckBoxIcon className={classes['todo-list__action-unchecked-icon']} />
  );

  if (!isEditingMode) {
    taskContent = (
      <>
        <button
          type='button'
          role='checkbox'
          aria-checked='false'
          aria-label='Mark task as Complete'
          title='Mark as your Todo task is completed'
          onClick={onClick}>
          {toggleCheckBoxIcon}
        </button>
        {toggleEditMode}
      </>
    );
  } else {
    taskContent = <>{toggleEditMode}</>;
  }

  return <div className={classes['todo-list__action-priority']}>{taskContent}</div>;
}

export default TasksPriority;
