import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/index.js';
import Header from './components/Header/index.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/" element={<Footer />} /
    </Routes>
  );
}

export default App;
