import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Header } from './components/Header';
import { Details } from './components/pages/Details';
import { Movies } from './components/Movies';
import './List.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={`/`} element={<Movies />} />
        <Route path={`/details`} element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
