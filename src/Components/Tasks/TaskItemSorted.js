import { useState, useRef, useEffect } from 'react';
import TasksPriority from './TasksActions/TaskPriority';
import classes from './TaskItem.module.scss';

function TaskItemSorted({ ...taskSorted }) {
  const { id, task, completed } = taskSorted;
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

  // const updateCheckboxTaskHandler = (id) => toggleCompleteTask(id);

  //   const deleteTaskHandler = (id) => deleteTask(id);

  const cancelEditModeHandler = () => setIsEditingMode(false);

  const escapeEditModeHandler = (e) => {
    const escKey = e.keyCode === 27;
    if (escKey) {
      setIsEditingMode(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredEditInput.length === 0) {
      return;
    }

    if (isEditingMode) {
      editClassName = classes['todo-list'];
    }

    // This is from the contextProvider for storing localStorage
    // editTask(id, enteredEditInput);

    setIsEditingMode(false);
  };

  // All of the condition check to render JSX
  if (isEditingMode) {
    toggleEditModeContent = (
      <>
        {/* <TaskEdit
          ref={editInputRef}
          onSubmit={submitHandler}
          onKeyPress={escapeEditModeHandler}
          onChange={editCurrentTaskHandler}
          onClick={cancelEditModeHandler}
          value={enteredEditInput}
          task={task}
        /> */}
      </>
    );
  } else {
    toggleEditModeContent = (
      <>
        <p>{task}</p>
      </>
    );
  }

  //   const isEditingContent = !isEditingMode ? (
  //     <TasksActions
  //       editTask={activateEditTaskHandler}
  //       deleteTask={deleteTaskHandler.bind(null, id)}
  //     />
  //   ) : (
  //     ''
  //   );

  return (
    <ul className={editClassName}>
      <li>
        <TasksPriority
          //   onClick={updateCheckboxTaskHandler.bind(null, id)}
          isEditingMode={isEditingMode}
          toggleEditMode={toggleEditModeContent}
          isCompleted={completed}
        />
      </li>
      {/* <li>{isEditingContent}</li> */}
    </ul>
  );
}

export default TaskItemSorted;
