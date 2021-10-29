import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../../uploads/logo.png';



export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  }

   
  return (
    <div className="navBar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
            <img className="logo" alt="logo" src={logo} />
        </NavLink>

        <ul className={menu ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-link"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/bio"
              activeClassName="active"
              className="nav-link"
              onClick={handleClick}
            >
              Bio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/board"
              activeClassName="active"
              className="nav-link"
              onClick={handleClick}
            >
              Board of Trustees
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/objectives"
              activeClassName="active"
              className="nav-link"
              onClick={handleClick}
            >
              Objectives
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={menu ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </div>
  );
}
