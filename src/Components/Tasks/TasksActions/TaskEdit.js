import { forwardRef } from 'react';
import classes from './TaskEdit.module.scss';

function TaskEdit({ onSubmit, task, value, onChange, onClick, onKeyPress }, ref) {
  return (
    <form onSubmit={onSubmit} className={classes['edit-todo']} onKeyDown={onKeyPress}>
      <label htmlFor={`task-input-${task}`} />
      <input ref={ref} type='text' id={`task-input-${task}`} value={value} onChange={onChange} />
      <button
        type='submit'
        aria-label={`Edit your current todo task of '${task}'`}
        title={`Edit your current task '${task}'`}>
        Update
      </button>
      <button onClick={onClick}>Cancel</button>
    </form>
  );
}

export default forwardRef(TaskEdit);
