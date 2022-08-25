import React, { useEffect, useState } from "react";
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = ({ setIsLoggedIn}) => {
  const [scrolled, setScrolled] = useState(false);
  const recentImageDataUrl = window.localStorage.getItem('recent-image')
  const [img, setImg] = useState(recentImageDataUrl)

  useEffect(() => {
      if(recentImageDataUrl){
          setImg(recentImageDataUrl);
      }
  },[recentImageDataUrl])

  window.onscroll = () => {
      setScrolled(window.pageYOffset === 0 ? false : true)
      return () => (window.onScroll = null)
  }

  let navigate = useNavigate();
  const LogOut = (e) =>{
      e.preventDefault();
      setIsLoggedIn(false)
      navigate('/')
  }

  let location = useLocation();

  return(
      <nav className={!scrolled ? 'nav' : 'scrolled'}>
          <div className="container">
              <div className="leftNav">
                  <Link to='/browse'>
                  <img alt="netflix logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" className="logoNavBar"/>
                  </Link>
                  {
                      location.pathname !== '/profile' && 
                      <ul className="ulContainer">
                      <li className="dropnav">
                          <span>Exploration</span>
                          <ArrowDropDownIcon  className="icon"/>
                          <div className="subMenu">
                              <ul className="subMenu-list">
                                  <li><Link to='/browse' onClick={() => setSearchTerm('')}>Home</Link></li>
                                  <li><Link to='/browse'>TV Shows</Link></li>
                                  <li><Link to='/browse'>Movies</Link></li>
                                  <li><Link to='/browse'>New & Popular</Link></li>
                                  <li><Link to='/browse'>My List</Link></li>
                              </ul>
                          </div>
                      </li>
                      <li className="navigation-tab"><Link to='/browse' >Home</Link></li>
                      <li className="navigation-tab"><Link to='/browse'>TV Shows</Link></li>
                      <li className="navigation-tab"><Link to='/browse'>Movies</Link></li>
                      <li className="navigation-tab"><Link to='/browse'>New & Popular</Link></li>
                      <li className="navigation-tab"><Link to='/browse'>My List</Link></li>
                  </ul>
                  }
              </div>
              {
                  location.pathname !== '/profile' &&
                  <div className="searchbox">
                  <SearchIcon className="icon-search"/>
                  <input placeholder="Title, Persons, Genres" className="searchBar" value={searchTerm} onChange={handleChange} />
                  </div>
              }
                  <div className="rightNav">
                      <NotificationsIcon className="icon"/>                       
                      <div className="profile">
                          <img alt="" src={img} className='profileCont' />
                          <ArrowDropDownIcon  className="icon"/>
                          <div className="options">
                              <div><Link to='/profile'>Settings</Link></div>
                              <div onClick={LogOut}>Sign out</div>
                          </div>
                      </div>
                  </div>
          </div>
      </nav>
  )
}

export default Header;
