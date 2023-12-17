import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/ui/header/header';
import HomePage from './pages/home-page';
import StockPage from './pages/stock-page';
import PersonalPage from './pages/personal-page';
import SupportPage from './pages/support-page';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/stock" element={<StockPage/>}/>
        <Route path="/personal" element={<PersonalPage/>}/>
        <Route path="/support" element={<SupportPage/>}/>
      </Routes>
    </>
  );
}

export default App;
