import AddTask from './../../Tasks/AddTask';
import TasksList from './../../Tasks/TasksList';
import classes from './Main.module.scss';

function Main() {
  return (
    <main className={classes.main}>
      <h1>
        <span>Inbox</span>
      </h1>
      <AddTask />
      <TasksList />
    </main>
  );
}

export default Main;
