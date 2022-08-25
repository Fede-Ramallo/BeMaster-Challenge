import React, { useEffect } from "react";
import {params} from ''
import "./ContentCategory.css";
import axios from "../../utils/axios";
import requests from "../../utils/Requests";

const ContentCategory = ({ movies, setMovies }) => {
  const fetchURL = requests.fetchHorrorMovies;
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
