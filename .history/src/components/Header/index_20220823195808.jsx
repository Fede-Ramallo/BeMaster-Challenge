import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({ setIsLoggedIn }) => {
  const [scrolled, setScrolled] = useState(false);
  const recentImageDataUrl = window.localStorage.getItem("recent-image");
  const [img, setImg] = useState(recentImageDataUrl);

  useEffect(() => {
    if (recentImageDataUrl) {
      setImg(recentImageDataUrl);
    }
  }, [recentImageDataUrl]);

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onScroll = null);
  };

  let navigate = useNavigate();
  const LogOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    navigate("/");
  };

  let location = useLocation();

  return (
    <nav className={!scrolled ? "nav" : "scrolled"}>
      <div className="container">
        <div className="leftNav">
          <Link to="/under">
            <img
              alt="logo"
              src="https://images.squarespace-cdn.com/content/v1/5ff99be66bbc7c345299fe78/5c91a18b-b18e-4bb3-9b5c-11d740cc7dc6/Social+Sharing+Logo.png"
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
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/under">TV Shows</Link>
                    </li>
                    <li>
                      <Link to="/under">Movies</Link>
                    </li>
                    <li>
                      <Link to="/under">New & Popular</Link>
                    </li>
                    <li>
                      <Link to="/under">My List</Link>
                    </li>
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
        <div className="rightNav">
          <NotificationsIcon className="icon" />
          <div className="profile">
            <img alt="" src={img} className="profileCont" />
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <div>
                <Link to="/profile">Settings</Link>
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
