import React from 'react';
import SortIcon from '../../UI/Icons/SortIcon';
import classes from './SortTaskMenu.module.scss';

function SortTaskMenu({ onClick }) {
  return (
    <>
      <button className={classes.sort} onClick={onClick}>
        <div className={classes['sort__item']}>
          <SortIcon />
          <span>Sort &nbsp; </span>
        </div>
      </button>
    </>
  );
}

export default SortTaskMenu;
