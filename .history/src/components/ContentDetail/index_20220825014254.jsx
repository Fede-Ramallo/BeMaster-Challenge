import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ContentDetail.css";
import axios from "../../utils/axios";
import { motion } from "framer-motion";
import { Details } from "@mui/icons-material";

const ContentDetail = () => {
  const { id } = useParams();
  const API_KEY = "cc5a9d7cf4bac59dc6eb63d3cba779b3";
  const [details, setDetails] = useState({});

  const fetchURL = `/movie/${id}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setDetails(request.data);
      return request;
    }

    fetchData();
  }, [fetchURL, setDetails]);

  const handleClick = () => {
    console.log(details);
  };

  let srcimg = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="Details">
      <img src={`${srcimg}${details.poster_path}`} alt="postermovie" />
      <div className="Details-Text">
        <h2>{Details.title}</h2>
      </div>
    </div>
  );
};

export default ContentDetail;
