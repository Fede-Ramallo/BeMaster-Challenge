import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ContentCategory.css";
import axios from "../../utils/axios";

const ContentCategory = () => {
  const category = useParams();
  const API_KEY = "cc5a9d7cf4bac59dc6eb63d3cba779b3";
  const [movies, setMovies] = useState([]);

  const fetchURL = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${category.id}&with_watch_monetization_types=flatrate`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL, setMovies]);

  const handleClick = () => {
    console.log(movies);
  };

  let srcimg = "https://image.tmdb.org/t/p/original/"

  return (
    <div className="Category">
      <ul className="Category-Container">
        {movies.map((mov, i) => {
          return (
            <li key={i}>
              <Link to={``}
              <h2>{mov.title}</h2>
              <img
                src={`${srcimg}${mov.backdrop_path}`}
                alt={mov.original_title}
                className="dasd"
                key={mov.id}
              />
            </li>
          );
        })}
        <button onClick={handleClick}>Hola</button>
      </ul>
    </div>
  );
};

export default ContentCategory;
