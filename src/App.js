import React from 'react';
import Header from './Components/UI/Header/Header';
import Main from './Components/UI/Main/Main';
import SideBar from './Components/UI/Sidebar/SideBar';
import SortProvider from './store/SortProvider';

function App() {
  return (
    <SortProvider>
      <Header />
      <SideBar />
      <Main />
    </SortProvider>
  );
}

export default App;
