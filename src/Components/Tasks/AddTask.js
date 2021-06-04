import { useState, useEffect } from 'react';
import PlusIcon from '../UI/Icons/PlusIcon';
import classes from './Addtask.module.scss';

function AddTask() {
  let submitButtonContent = '';
  const [isDisplay, setIsDisplay] = useState(true);
  const [task, setTask] = useState([]);

  useEffect(() => {}, [task]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const addTaskHandler = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className={classes['add-item']}>
      <p>
        <span>
          <PlusIcon className={classes['plus-icon']} />
        </span>
        Add Task
      </p>

      <form onSubmit={submitHandler} className={classes['editor-area']}>
        <label htmlFor='add-item' />
        <textarea
          type='text'
          id='add-item'
          placeholder='E.g, Buy Gift tomorrow at 6pm'
          onChange={addTaskHandler}
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
          class={classes['btn-red--disable']}
          title='Add Task First'
          aria-roledescription='Add a task first before you can click on it'>
          Add Task
        </button>
        <button>Cancel</button>
      </form>
    </div>
  );
}

export default AddTask;
