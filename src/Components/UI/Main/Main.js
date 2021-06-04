import React from 'react';
import PlusIcon from './Icons/PlusIcon';
import classesMain from './Main.module.scss';

function Main() {
  return (
    <main className={classesMain.main}>
      <h1>
        <span>Inbox</span>
      </h1>
      <div className={classesMain['main__editor']}>
        <p>
          <span>
            <PlusIcon className={classesMain['plus-icon']} />
          </span>
          Add Task
        </p>
      </div>
    </main>
  );
}

export default Main;
