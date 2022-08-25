import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/index.js";
import Header from "./components/Header/index.jsx";
import Home from "./components/Home/index.js";
import Login from "./components/Login/index";

function App() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  return (
    <>
      {location.pathname !== "/" && (
        <NavBar
          setIsLoggedIn={setIsLoggedIn}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          movies={movies}
          setMovies={setMovies}
        />
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="home"
          element={
            <Home
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              movies={movies}
              setMovies={setMovies}
            />
          }
        />
        <Route path="home" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
