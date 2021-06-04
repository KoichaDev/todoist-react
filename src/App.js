import React from 'react';
import Header from './Components/UI/Header/Header';
import Main from './Components/UI/Main/Main';
import SideBar from './Components/UI/Sidebar/SideBar';
import TodoProvider from './store/TodoProvider';

function App() {
  return (
    <TodoProvider>
      <Header />
      <SideBar />
      <Main />
    </TodoProvider>
  );
}

export default App;
