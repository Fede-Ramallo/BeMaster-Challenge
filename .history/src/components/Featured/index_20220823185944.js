import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "./Featured.css";
import starwars from '../../assets/images/starwars.jpg'
export default function Featured() {
  return (
    <div className="featured">
      <img
        src={starwars}
        alt=""
      />
      <div className="infoFeatured">
        <img
          src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
          alt=""
        />
        <div className="descFeatured">
            <p>
            It is set in a world where humanity lives inside cities surrounded by three enormous walls that protect them from the gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after a Titan brings about the destruction of his hometown and the death of his mother.
            </p>
        </div>
        <div className="buttonsFeatured">
          <button className="playbtn">
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
}