import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ContentCategory from "./components/ContentCategory/index";
import ContentDetail from "./components/ContentDetail";
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";
import Home from "./components/Home/index";
import Login from "./components/Login/index";
import UnderConstruction from "./components/UnderConstruction/index";

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/under" && (
        <Header setIsLoggedIn={setIsLoggedIn} />
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="home" element={<Footer />} />
        <Route path="under" element={<UnderConstruction />} />
        <Route path="category/:id/:slug" element={<ContentCategory />} />
        <Route path="movie/:id" element={<ContentDetail />} />
      </Routes>
    </>
  );
}

export default App;
