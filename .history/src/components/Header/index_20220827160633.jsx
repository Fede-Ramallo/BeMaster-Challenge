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
            <img alt="logo" src="https://fontmeme.com/permalink/220824/21ad60813ead7f189384e600cde2bd44.png" className="logoNavBar" />
          </Link>
          {location.pathname !== "/profile" && (
            <ul className="ulContainer">
              <li className="dropnav">
                <span>Exploration</span>
                <ArrowDropDownIcon className="icon" />
                <div className="subMenu">
                  <ul className="subMenu-list">
                    { nav && nav.map(() => {
                      return(
                        <Link to={refer}>
                          <li>{l.name}</li>
                        </Link>
                      )
                    })}
                  </ul>
                </div>
              </li>
              <li className="navigation-tab">
                <Link to="/home">Home</Link>
              </li>
              <li className="navigation-tab">
                <Link to="/under">TV Shows</Link>
              </li>
              <li className="navigation-tab">
                <Link to="/under">Movies</Link>
              </li>
              <li className="navigation-tab">
                <Link to="/under">New & Popular</Link>
              </li>
              <li className="navigation-tab">
                <Link to="/under">My List</Link>
              </li>
            </ul>
          )}
        </div>
        {location.pathname !== "/profile" && (
          <div className="searchbox">
            <SearchIcon className="icon-search" />
            <input
              placeholder="Title, Persons, Genres"
              className="searchBar"
            />
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
