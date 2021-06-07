import { useState, useRef, useEffect } from 'react';
import { CheckBoxIcon, UnCheckBoxIcon } from '../UI/Icons/CheckBoxIcon';
import TasksActions from './TasksActions/TasksActions';
import classes from './TaskItem.module.scss';

function Tasks({ deleteHandler, editTodo, updateCheckboxTaskHandler, ...item }) {
  const { id, task, completed } = item;
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [enteredEditInput, setEnteredEditInput] = useState(task);
  const editInputRef = useRef(null);

  let editClassName = !isEditingMode ? classes['todo-list'] : classes['todo-list--edit-mode'];

  useEffect(() => {
    if (isEditingMode) {
      editInputRef.current.focus();
    }
  }, [isEditingMode]);

  const activateEditTaskHandler = () => setIsEditingMode(!isEditingMode);

  const editCurrentTaskHandler = (e) => {
    editInputRef.current.focus();
    setEnteredEditInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // This is from the contextProvider for storing localStorage
    editTodo(id, enteredEditInput);
    setIsEditingMode(false);

    if (isEditingMode) editClassName = classes['todo-list'];
  };

  const editContentMode = (
    <form onSubmit={submitHandler} className={classes['edit-todo']}>
      <label htmlFor={`task-input-${task}`} />
      <input
        ref={editInputRef}
        type='text'
        id={`task-input-${task}`}
        value={enteredEditInput}
        onChange={editCurrentTaskHandler}
      />
      <button
        type='submit'
        aria-label={`Edit your current todo task of '${task}'`}
        title={`Edit your current task '${task}'`}>
        Update
      </button>
    </form>
  );

  const toggleEditMode = isEditingMode ? editContentMode : <p>{task}</p>;

  const toggleCheckBoxIcon = completed ? (
    <CheckBoxIcon className={classes['todo-list__action-checked-icon']} />
  ) : (
    <UnCheckBoxIcon className={classes['todo-list__action-unchecked-icon']} />
  );

  return (
    <ul className={editClassName}>
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
          {toggleEditMode}
        </div>
      </li>
      <li>
        <TasksActions editTask={activateEditTaskHandler} deleteTask={deleteHandler} />
      </li>
    </ul>
  );
}

export default Tasks;
