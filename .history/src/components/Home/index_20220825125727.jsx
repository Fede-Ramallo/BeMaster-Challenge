import React, { useState } from "react";
import "./Home.css";
import Featured from "../Featured/index";
import List from "../Lists/index";
import Footer from "../Footer/index";
import requests from "../../utils/Requests";

const Home = () => {
  //Componente principal de home, llama componente List para mostrar preview de categorias
  const [showModal, setShowModal] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieOverview, setMovieOverview] = useState("");
  const [movieImg, setMovieImg] = useState("");
  return (
    <div className="BrowseContainer">
      <div className="mainView">
        <Featured fetchTrending={requests.fetchTrending} />
        <List
          title="Sci-Fi Movies"
          slug="Sci-Fi"
          fetchURL={requests.fetchSciFi}
          isLargeRow
          setShowModal={setShowModal}
          setMovieTitle={setMovieTitle}
          setMovieOverview={setMovieOverview}
          setMovieImg={setMovieImg}
          showModal={showModal}
          movieTitle={movieTitle}
          
          category="35"
        />
        <List
          title="Horror Movies"
          slug="horror"
          fetchURL={requests.fetchHorrorMovies}
          setShowModal={setShowModal}
          setMovieTitle={setMovieTitle}
          setMovieOverview={setMovieOverview}
          setMovieImg={setMovieImg}
          category="27"
        />
        <List
          title="Romance Movies"
          slug="romance"
          fetchURL={requests.fetchRomanceMovies}
          setShowModal={setShowModal}
          setMovieTitle={setMovieTitle}
          setMovieOverview={setMovieOverview}
          setMovieImg={setMovieImg}
          category="10749"
        />
        <List
          title="Comedy Movies"
          slug="comedy"
          fetchURL={requests.fetchComedyMovies}
          setShowModal={setShowModal}
          setMovieTitle={setMovieTitle}
          setMovieOverview={setMovieOverview}
          setMovieImg={setMovieImg}
          category="878"
        />
        <List
          title="Documentaries"
          slug="documentaries"
          fetchURL={requests.fetchDocumentaries}
          setShowModal={setShowModal}
          setMovieTitle={setMovieTitle}
          setMovieOverview={setMovieOverview}
          setMovieImg={setMovieImg}
          category="99"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
