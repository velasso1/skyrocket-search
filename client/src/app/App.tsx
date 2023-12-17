import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/ui/header/header';
import HomePage from './pages/home-page';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>

      </Routes>
    </>
  );
}

export default App;
