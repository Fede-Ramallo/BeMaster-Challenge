import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/index.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
  );
}

export default App;
