import { useState } from 'react';
import PlusIcon from '../UI/Icons/PlusIcon';
import classes from './Addtask.module.scss';

function AddTask() {
  const [isDisplay, setIsDisplay] = useState(true);
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
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
        <input
          type='text'
          id='add-item'
          className={classes['']}
          placeholder='E.g, Buy Gift tomorrow at 6pm'
        />
        <div className={classes['editor-area__actions']}>
          <button>
            <i class='fas fa-calendar-alt fa-sm'></i>
            <span> Schedule</span>
          </button>
          <button>
            <i class='fas fa-inbox'></i>
            <span> Inbox</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
