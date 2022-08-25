import React from "react";
import { Link } from "react-router-dom";
import "./UnderConstruction.css";
import cinema from "../../assets/images/cinema.png";

const UnderConstruction = () => {
  return (
    <div className="under-container">
      <h1>EN CONSTRUCCIÓN</h1>
      <div>
        <p>
          Perdon por el inconveniente, todavia esta en desarrollo la aplicacion.
          Si usted necesita mas ayuda{" "}
          <a
            className="construct"
            href="https://fede-ramallo.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            contacteme
          </a>
          , de igual forma seguira en desarrollo para un futuro cercano.
        </p>
        <p>&mdash; Muchas gracias!</p>
        <br />
        <hr />
        <br />
        <Link to="/home" style={{ textDecoration: "none" }}>
          <div className="backtohome">
            <img
              className="header__logo"
              src={cinema}
              alt="logo"
            />
            <p className="backtohome_p" >Volver HOME</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UnderConstruction;