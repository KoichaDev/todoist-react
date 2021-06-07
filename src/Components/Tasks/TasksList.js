import { useState, useEffect, useContext } from 'react';
import TodoContext from './../../store/todo-context';
import Tasks from './TaskItem';

function TasksList() {
  const todoCtx = useContext(TodoContext);
  const deleteTaskHandler = (id) => todoCtx.removeTodo(id);

  const updateCheckboxTaskHandler = (id) => {
    todoCtx.toggleComplete(id);
  };

  const todoList = todoCtx.localStorage.map((item, index) => {
    const { id } = item;
    return (
      <Tasks
        key={id}
        {...item}
        updateCheckboxTaskHandler={updateCheckboxTaskHandler.bind(null, id)}
        deleteHandler={deleteTaskHandler.bind(null, id)}
        editTodo={todoCtx.editTodo}
      />
    );
  });

  return (
    <>
      <ul>
        <li>{todoList}</li>{' '}
      </ul>
    </>
  );
}

export default TasksList;
