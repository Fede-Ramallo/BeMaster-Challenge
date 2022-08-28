import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/profilepic.png";
import { nav } from "../../utils/mockData";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onScroll = null);
  };

  let navigate = useNavigate();
  const LogOut = (e) => {
    e.preventDefault();
    navigate("/");
  };

  let location = useLocation();

  return (
    <nav className={!scrolled ? "nav" : "scrolled"}>
      <div className="container">
        <div className="leftNav">
          <Link to="/home">
            <img
              alt="logo"
              src="https://fontmeme.com/permalink/220824/21ad60813ead7f189384e600cde2bd44.png"
              className="logoNavBar"
            />
          </Link>
          {location.pathname !== "/profile" && (
            <ul className="ulContainer">
              <li className="dropnav">
                <span>Exploration</span>
                <ArrowDropDownIcon className="icon" />
                <div className="subMenu">
                  <ul className="subMenu-list">
                    {nav &&
                      nav.map((h, i) => {
                        return (
                          <Link to={h.refer}>
                            <li key={i}>{h.name}</li>
                          </Link>
                        );
                      })}
                  </ul>
                </div>
              </li>
              {nav &&
                nav.map((h, i) => {
                  return (
                    <Link to={h.refer}>
                      <li className="navigation-tab">{h.name}</li>
                    </Link>
                  );
                })}
            </ul>
          )}
        </div>
        {location.pathname !== "/profile" && (
          <div className="searchbox">
            <SearchIcon className="icon-search" />
            <input placeholder="Title, Persons, Genres" className="searchBar" />
          </div>
        )}
        <div className="rightNav">
          <NotificationsIcon className="icon" />
          <div className="profile">
            <img alt="" src={img} className="profileCont" />
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <div>
                <Link to="/under">Settings</Link>
              </div>
              <div onClick={LogOut}>Sign out</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
