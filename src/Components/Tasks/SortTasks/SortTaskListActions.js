import { useContext } from 'react';
import AlphabeticalIcon from '../../UI/Icons/AlphabeticalIcon';
import SortSizeUpDown from '../../UI/Icons/SortSizeUpDown';
import CalendarIcon from '../../UI/Icons/CalendarIcon';
import TimeStamp from '../../UI/Icons/TimeStampIcon';
import TodoContext from '../../../store/todo-context';
import SortContext from '../../../store/sort-context';

import classes from './SortTaskListActions.module.scss';

function SortTaskList() {
  const sortCtx = useContext(SortContext);
  const todoCtx = useContext(TodoContext);

  const sortDateHandler = () => sortCtx.sortDate(todoCtx.localStorage);

  return (
    <ul className={classes.list}>
      <li>
        <SortSizeUpDown /> &nbsp;
        <label htmlFor='sort-todos' />
        <select name='todos' id='sort-todos'>
          <option value='all' style={{ marginBottom: '10em' }}>
            All
          </option>
          <option value='completed'>Completed</option>
          <option value='incompleted'>Incompleted</option>
        </select>
      </li>
      <li>
        <button onClick={sortDateHandler}>
          <CalendarIcon /> Sort by date
        </button>
      </li>
      <li>
        <button>
          <AlphabeticalIcon /> Sort by Alphabethical
        </button>
      </li>
      <li>
        <button>
          <TimeStamp />
          Sort by Timestamp
        </button>
      </li>
    </ul>
  );
}

export default SortTaskList;
