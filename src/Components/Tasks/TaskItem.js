import { useState, useRef, useEffect } from 'react';
import TaskEdit from './TasksActions/TaskEdit';
import TasksPriority from './TasksActions/TaskPriority';
import TasksActions from './TasksActions/TaskActions';
import classes from './TaskItem.module.scss';

function Tasks({ deleteTask, editTask, toggleCompleteTask, ...item }) {
  const { id, task, completed } = item;
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [enteredEditInput, setEnteredEditInput] = useState(task);
  const editInputRef = useRef(null);

  let toggleEditModeContent = '';
  let editClassName = !isEditingMode ? classes['todo-list'] : classes['todo-list--edit-mode'];

  useEffect(() => {
    if (isEditingMode) {
      editInputRef.current.focus();
    }
  }, [isEditingMode]);

  // All of the Event Handler
  const activateEditTaskHandler = () => setIsEditingMode(!isEditingMode);

  const editCurrentTaskHandler = (e) => {
    editInputRef.current.focus();
    setEnteredEditInput(e.target.value);
  };

  const updateCheckboxTaskHandler = (id) => toggleCompleteTask(id);

  const deleteTaskHandler = (id) => deleteTask(id);

  const submitHandler = (e) => {
    e.preventDefault();

    // This is from the contextProvider for storing localStorage
    editTask(id, enteredEditInput);

    setIsEditingMode(false);

    if (isEditingMode) editClassName = classes['todo-list'];
  };

  // All of the condition check to render JSX
  if (isEditingMode) {
    toggleEditModeContent = (
      <>
        <TaskEdit
          ref={editInputRef}
          onSubmit={submitHandler}
          onChange={editCurrentTaskHandler}
          value={enteredEditInput}
          task={task}
        />
      </>
    );
  } else {
    toggleEditModeContent = (
      <>
        <p>{task}</p>
      </>
    );
  }

  const isEditingContent = !isEditingMode ? (
    <TasksActions
      editTask={activateEditTaskHandler}
      deleteTask={deleteTaskHandler.bind(null, id)}
    />
  ) : (
    ''
  );

  return (
    <ul className={editClassName}>
      <li>
        <TasksPriority
          onClick={updateCheckboxTaskHandler.bind(null, id)}
          toggleEditMode={toggleEditModeContent}
          isCompleted={completed}
        />
      </li>
      <li>{isEditingContent}</li>
    </ul>
  );
}

export default Tasks;
