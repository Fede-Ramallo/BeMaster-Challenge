import React, { useState } from "react";
import "./Home.css";
import Featured from "../Featured/index";
import List from "../Lists/index";
import Footer from "../Footer/index";
import requests from "../../utils/Requests";
import { listData } from "../../utils/mockData";

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
        {listData && listData.map((data) => {
          return(
            <List title={data.title} slug={data.slug} fetchURL={data.request} category={data.category} isLargeRow={data.isLargeRow} />
          )
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
