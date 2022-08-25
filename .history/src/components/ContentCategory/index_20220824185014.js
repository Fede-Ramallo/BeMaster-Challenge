import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ContentCategory.css";
import axios from "../../utils/axios";

const ContentCategory = () => {
  const category = useParams();
  const API_KEY = 'cc5a9d7cf4bac59dc6eb63d3cba779b3';
  const [movies, setMovies] = useState([]);

  const fetchURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${category}&with_watch_monetization_types=flatrate`
  
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
      <button onClick={}
    </div>
  );
};

export default ContentCategory;
