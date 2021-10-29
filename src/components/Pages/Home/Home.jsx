import React from 'react'
import './Home.css'
import homeImage from '../../../uploads/homepage.png';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="img-div">
          <img src={homeImage} className="home-image" />
          <div className="details">
            <Typography className="details-title" variant="h4">
              ELDER
            </Typography>
            <Typography className="details-name" variant="h3">
              ISAAC AKPOWENE
              <br /> EGBI, (JP)
            </Typography>
          </div>
        </div>
        <div className="caption">
          <Typography variant="h6" className="caption-text">
            Austin wake up and give this capion now that we still have time....
          </Typography>
          <NavLink to="/bio" className="more-button">More</NavLink>
        </div>
      </div>
    </div>
  );
}
