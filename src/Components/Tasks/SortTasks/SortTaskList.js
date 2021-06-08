import React from 'react';
import AlphabeticalIcon from '../../UI/Icons/AlphabeticalIcon';
import SortSizeUpDown from '../../UI/Icons/SortSizeUpDown';
import SortSizeDown from '../../UI/Icons/SortSizeDown';
import SortSizeUp from '../../UI/Icons/SortSizeUp';
import TimeStamp from '../../UI/Icons/TimeStampIcon';

import classes from './SortTaskList.module.scss';

function SortTaskList() {
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
        <button>
          <SortSizeUp /> Sort by date (Ascending)
        </button>
      </li>
      <li>
        <button>
          <SortSizeDown /> Sort by date (Descending)
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
