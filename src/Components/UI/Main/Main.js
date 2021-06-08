import AddTask from './../../Tasks/TasksActions/AddTask';
import DisplayTask from './../../Tasks/DisplayTask';
import classes from './Main.module.scss';

function Main() {
  return (
    <main className={classes.main}>
      <h1>
        <span>📝 Add Task</span>
      </h1>
      <AddTask />
      <DisplayTask />
    </main>
  );
}

export default Main;
