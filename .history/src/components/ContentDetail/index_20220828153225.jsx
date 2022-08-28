import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ContentDetail.css";
import axios from "../../utils/axios";
import { motion } from "framer-motion";
import { fadeIn, fadeInImage } from "../../utils/variants";

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

  let srcimg = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="details">
      <div className="detailsImage">
        <motion.div
          className="detailsImageContainer"
          variants={fadeInImage}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={`${srcimg}${details.poster_path}`}
            alt="postermovie"
            variants={fadeInImage}
            initial="hidden"
            animate="visible"
            whileHover={{ width, transition: { duration: 0.3 } }}
          />
        </motion.div>
      </div>
      <motion.div
        className="detailsText"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h2>
          TITLE: <span>{details.title}</span>
        </h2>
        <h2>
          RELEASED: <span>{details.status}</span>
        </h2>
        <h2>
          SYNOPSIS: <span>{details.overview}</span>
        </h2>
        <h3>
          MORE DETAILS UNDER CONSTRUCCION, COME BACK LATER, THERE MIGHT BE SOME
          UPGRADES!
        </h3>
        <p>"The force will be with you. Always"</p>
      </motion.div>
    </div>
  );
};

export default ContentDetail;
