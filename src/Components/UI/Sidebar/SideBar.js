import React from 'react';
import classes from './SideBar.module.scss';

function SideBar() {
  return (
    <aside className={classes.sidebar}>
      <ul>
        <li>Inbox</li>
        <li>Today</li>
        <li>Upcoming</li>
      </ul>
    </aside>
  );
}

export default SideBar;
