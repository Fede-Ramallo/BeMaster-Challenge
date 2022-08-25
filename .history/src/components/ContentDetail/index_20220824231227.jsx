import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ContentDetail.css";
import axios from "../../utils/axios";
import {motion} from 'framer-motion';

const ContentDetail = () => {
  const p = useParams();
  const API_KEY = "cc5a9d7cf4bac59dc6eb63d3cba779b3";
  const [details, setDetails] = useState([]);

  const fetchURL = `/movie/${p.id}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setDetails(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL, setDetails]);

  const handleClick = () => {
    console.log(details);
  };

  let srcimg = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="Category">
      <ul className="Category-Container">
        {movies.map((mov, i) => {
          return (
            <motion.li key={i} className="Category-movies" variants={cardAnimation} whileHover="hover">
              <Link to={`/movie/${mov.id}`}>
                <img
                  src={`${srcimg}${mov.backdrop_path}`}
                  alt={mov.original_title}
                  className="Category-image"
                  key={mov.id}
                />
                <h2 className="Category-movie-title">{mov.title}</h2>
              </Link>
              <div className="Category-overview">
                <p>
                  This is a movie provided by TMDB, if you want to know more
                  details about this movie, click the button below and get the
                  latest news, trailers and more about it!
                </p>
                <button className="Category-button" onClick={handleClick}>View</button>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContentDetail;
