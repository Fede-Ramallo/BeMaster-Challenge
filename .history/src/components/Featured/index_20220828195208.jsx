import React, { useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./Featured.css";
import starwars from "../../assets/images/starwars.jpg";

const Featured = () => {
  const [video, setVideo] = useState(false);

  return (
    <div className="featured">
      {video === false ? (
        <img src={starwars} alt="" />
      ) : (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ngElkyQ6Rhs?modestbranding=1&controls=0&autoplay=1&start=66&end=97"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture, autohide, controls, rel"
          allowfullscreen
        ></iframe>
      )}
      <div className="infoFeatured">
        <img
          src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
          alt=""
        />
        <div className="descFeatured">
          <p>
            The ship in which Princess Leia travels is captured by the imperial
            troops commanded by the fearsome Darth Vader. Before being caught,
            Leia manages to enter a message in her robot R2-D2, who, accompanied
            by his inseparable C-3PO, manages to escape. After landing on the
            planet Tattooine they are captured and sold to the young Luke
            Skywalker, who will discover the hidden message that is destined for
            Obi Wan Kenobi, a Jedi Master whom Luke must find to save the
            princess.
          </p>
        </div>
        <div className="buttonsFeatured">
          <button className="playbtn" onClick={() => setVideo(!video)}>
            <PlayArrowIcon />
            <div>Play</div>
          </button>
          <button className="infoBtn">
            <InfoOutlinedIcon />
            <div>Info</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
