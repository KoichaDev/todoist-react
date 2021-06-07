import { useContext } from 'react';
import TodoContext from './../../store/todo-context';
import TasksList from './TasksList';
import classes from './DisplayTask.module.scss';

function DisplayTask() {
  const todoCtx = useContext(TodoContext);
  let todoTaskContent = '';
  if (todoCtx.localStorage.length > 0) {
    todoTaskContent = (
      <section className={classes['task-section']}>
        <h2>Total Task: {todoCtx.localStorage.length} </h2>
        <div className={classes['display-task']}>
          <TasksList />
        </div>
      </section>
    );
  }

  return <>{todoTaskContent}</>;
}

export default DisplayTask;
