import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./ContentCategory.css";
import axios from "../../utils/axios";
import { motion } from "framer-motion";
import { cardAnimation } from "../../utils/variants";

const ContentCategory = () => {
  const category = useParams();
  const API_KEY = "cc5a9d7cf4bac59dc6eb63d3cba779b3";
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const fetchURL = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${
    index + 1
  }&with_genres=${category.id}&with_watch_monetization_types=flatrate`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL]);

  let srcimg = "https://image.tmdb.org/t/p/original/";

  const handleAddition = () => {
    setIndex(index + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubtraction = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="category">
      <h1>category you are looking into: {category.slug}</h1>
      <ul className="categoryContainer">
        {movies.map((mov, i) => {
          return (
            <motion.li
              key={i}
              className="categoryMovies"
              variants={cardAnimation}
              whileHover="hover"
            >
              <Link to={`/movie/${mov.id}`}>
                <img
                  src={`${srcimg}${mov.backdrop_path}`}
                  alt={mov.original_title}
                  className="categoryImage"
                  key={mov.id}
                />
                <h2 className="categoryMovieTitle">{mov.title}</h2>
              </Link>
              <div className="categoryOverview">
                <p>
                  This is a movie provided by TMDB, if you want to know more
                  details about this movie, click the button below and get the
                  latest news, trailers and more about it!
                </p>
                <button
                  className="categoryButton"
                  onClick={() => navigate(`/movie/${mov.id}`)}
                >
                  View
                </button>
              </div>
            </motion.li>
          );
        })}
      </ul>
      <div className="categoryButtons">
        <button onClick={handleSubtraction}>Back</button>
        <button onClick={handleAddition}>Next</button>
      </div>
    </div>
  );
};

export default ContentCategory;
