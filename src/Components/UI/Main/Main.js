import AddTask from './../../Tasks/AddTask';
import classes from './Main.module.scss';

function Main() {
  return (
    <main className={classes.main}>
      <h1>
        <span>Inbox</span>
      </h1>
      <AddTask />
    </main>
  );
}

export default Main;
