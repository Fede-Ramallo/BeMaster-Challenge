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
            La nave en la que viaja la princesa Leia es capturada por las tropas imperiales al mando del temible Darth Vader. Antes de ser atrapada, Leia consigue introducir un mensaje en su robot R2-D2, quien acompañado de su inseparable C-3PO logran escapar. Tras aterrizar en el planeta Tattooine son capturados y vendidos al joven Luke Skywalker, quien descubrirá el mensaje oculto que va destinado a Obi Wan Kenobi, maestro Jedi a quien Luke debe encontrar para salvar a la princesa.
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