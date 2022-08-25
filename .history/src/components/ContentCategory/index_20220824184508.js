import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ContentCategory.css";
import axios from "../../utils/axios";
import requests from "../../utils/Requests";

const ContentCategory = ({ movies, setMovies }) => {
  const category = useParams();

  fetchURL = ``/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=35&with_watch_monetization_types=flatrate``
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL, setMovies]);

  return (
    <div className="Category-Container">
      <h2>{movies.title}</h2>
    </div>
  );
};

export default ContentCategory;
