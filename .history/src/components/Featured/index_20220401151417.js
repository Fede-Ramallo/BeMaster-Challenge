import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "./Featured.css";
import snk from '../../../assets/images/snk.png';

export default function Featured() {
  return (
    <div className="featured">
      <img
        src={snk}
        alt=""
      />
      <div className="infoFeatured">
        <img
          src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYNPOTJQboU9mnFBSj9rg2HzIaC4OlN3pnkUY15mWvqucBUPR2z7bFatEH6AZ9MyB8l4eHorHSBNbHEniW0HnMfWHDWxS7etdPYs.png?r=35f"
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