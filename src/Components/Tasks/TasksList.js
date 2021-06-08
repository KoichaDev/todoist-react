import { useState, useEffect, useContext } from 'react';
import TodoContext from './../../store/todo-context';
import TasksItem from './TaskItem';

function TasksList() {
  const todoCtx = useContext(TodoContext);

  const todoList = todoCtx.localStorage.map((item) => {
    return (
      <TasksItem
        key={item.id}
        deleteTask={todoCtx.removeTodo}
        editTask={todoCtx.editTodo}
        toggleCompleteTask={todoCtx.toggleComplete}
        {...item}
      />
    );
  });

  return <>{todoList}</>;
}

export default TasksList;
