import { useState, useRef, useEffect } from 'react';
import TaskEdit from './TasksActions/TaskEdit';
import TasksPriority from './TasksActions/TaskPriority';
import TasksActions from './TasksActions/TaskActions';
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
    <TaskEdit
      task={task}
      onSubmit={submitHandler}
      ref={editInputRef}
      value={enteredEditInput}
      onChange={editCurrentTaskHandler}
    />
  );

  return (
    <ul className={editClassName}>
      <li>
        <TasksPriority
          updateCheckboxTaskHandler={updateCheckboxTaskHandler}
          isEditingMode={isEditingMode}
          editContentMode={editContentMode}
          {...item}
        />
      </li>
      <li>
        <TasksActions editTask={activateEditTaskHandler} deleteTask={deleteHandler} />
      </li>
    </ul>
  );
}

export default Tasks;
