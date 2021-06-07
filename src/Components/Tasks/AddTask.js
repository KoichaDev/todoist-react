import { useState, useEffect, useContext } from 'react';
import uuid from 'react-uuid';
import classes from './Addtask.module.scss';
import TodoContext from './../../store/todo-context';

function AddTask() {
  const [toggleSubmitClass, setToggleSubmitClass] = useState('');
  const [task, setTask] = useState('');

  const todoCtx = useContext(TodoContext);

  // useEffect for toggling className on Add Task on the submit button
  useEffect(() => {
    const inputTask = task.length > 0;
    inputTask
      ? setToggleSubmitClass(classes['btn-red--enable'])
      : setToggleSubmitClass(classes['btn-red--disabled']);
    return inputTask;
  }, [task]);

  const submitHandler = (e) => {
    e.preventDefault();

    todoCtx.addTodo({ id: uuid(), task });

    setTask('');
  };

  const inputTaskHandler = (e) => setTask(e.target.value);

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='add-item' />
      <input
        type='text'
        id='add-item'
        placeholder='E.g, Buy Gift tomorrow at 6pm'
        value={task}
        onChange={inputTaskHandler}
      />
      <div className={classes['editor-area__actions']}>
        <button>
          <i className='fas fa-calendar-alt fa-xs'></i>
          <span> Schedule</span>
        </button>
        <button>
          <i className='fas fa-inbox'></i>
          <span> Inbox</span>
        </button>
      </div>
      <button
        type='submit'
        className={toggleSubmitClass}
        title='Add Task First'
        aria-roledescription='Add a task first before you can click on it'>
        Add Task
      </button>
      <button>Cancel</button>
    </form>
  );
}

export default AddTask;
