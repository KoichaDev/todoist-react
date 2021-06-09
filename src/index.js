import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoProvider from './store/TodoProvider';
import './assets/scss/main.scss';

ReactDOM.render(
  <TodoProvider>
    <App />
  </TodoProvider>,
  document.getElementById('root')
);
