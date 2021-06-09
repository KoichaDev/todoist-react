import { useState, useContext } from 'react';
import TodoContext from './../../store/todo-context';
import SortContext from './../../store/sort-context';
import SortTaskMenu from './SortTasks/SortTaskMenu';
import SortTaskListActions from './SortTasks/SortTaskListActions';
import TasksList from './TasksList';
import TaskListSort from './TasksListSort';
import classes from './DisplayTask.module.scss';

function DisplayTask() {
  let todoTaskContent = '';
  let sortTaskListContent = '';
  const [isActive, setIsActive] = useState(false);

  const todoCtx = useContext(TodoContext);
  const sortCtx = useContext(SortContext);

  const sortTaskListHandler = () => setIsActive(!isActive);

  if (isActive) {
    sortTaskListContent = <SortTaskListActions className={classes['task-menu__list']} />;
  }

  const toggleTaskList = sortCtx.mouseClicked === true ? <TaskListSort /> : <TasksList />;

  if (todoCtx.localStorage.length > 0) {
    todoTaskContent = (
      <section className={classes['task-section']}>
        <header className={classes['task-section__header']}>
          <nav className={classes['task-section__nav']}>
            <h2>✨ Total Task: {todoCtx.localStorage.length} </h2>
            <SortTaskMenu onClick={sortTaskListHandler} />
          </nav>
          <nav className={classes['task-section__menu']}>{sortTaskListContent}</nav>
        </header>
        <div className={classes['display-task']}>{toggleTaskList}</div>
      </section>
    );
  }

  return <>{todoTaskContent}</>;
}

export default DisplayTask;
