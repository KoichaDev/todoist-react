import { useContext } from 'react';
import TaskItemSorted from './TaskItemSorted';
import SortContext from './../../store/sort-context';

function TasksListSort() {
  const sortCtx = useContext(SortContext);

  return (
    <>
      {sortCtx.items.map((taskSorted) => {
        return <TaskItemSorted key={taskSorted.id} {...taskSorted} />;
      })}
    </>
  );
}

export default TasksListSort;
