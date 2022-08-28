import React, { useState } from "react";
import "./Home.css";
import Featured from "../Featured/index";
import List from "../Lists/index";
import Footer from "../Footer/index";
import requests from "../../utils/Requests";
import { listData } from "../../utils/mockData";

const Home = () => {
  //Componente principal de home, llama componente List para mostrar preview de categorias
  return (
    <div className="BrowseContainer">
      <div className="mainView">
        <Featured fetchTrending={requests.fetchTrending} />
        {listData &&
          listData.map((data, i) => {
            return (
              <List
                key={i}
                fetchData={data.request}
                title={data.title}
                slug={data.slug}
                category={data.category}
                isLargeRow
              />
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
