import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/index.js';
import Header from './components/Header/index.jsx';
import Home from './components/Home/index.js';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Header>
          
        </Header>
      </Route>
    </Routes>
  );
}

export default App;
