import React from 'react'
import './Home.css'
import homeImage from '../../../uploads/homepage.png';
// import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <div className="img-div">
        <img src={homeImage} className="home-image" />
      </div>

      <div className="homepage-info ">
        <div className="description">
          <h4 className="description-item title">Elder Chief</h4>
          <h3 className="description-item name">Isaac Akpowene Egbi (JP)</h3>
          <h3 className="description-item rank">President/Founder</h3>
          <h4>
            <em
              style={{ color: "#8a0202" }}
              className="caption description-item"
            >
              Single-handedly sponsoring since 1980
            </em>
          </h4>
          <div className="button-container">
            <p>In truth this is a bit lousy but when one or more of suppossedly awesome crew makes the same blunder...</p>
            <NavLink className="more-button" to="/bio">
              Check Out Bio
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
