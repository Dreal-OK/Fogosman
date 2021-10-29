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
          <img src={homeImage} alt="home logo" className="home-image" />

          <Typography className="details details-title" variant="h5">
            ELDER
          </Typography>
          <Typography className="details details-name" variant="h4">
            ISAAC AKPOWENE
            <br /> EGBI, (JP)
          </Typography>
        </div>
        <div className="caption">
          <h3 className="caption-text">
            We live for the purpose of humanity and benovolence.....
          </h3>
          <h3 className="caption-text">
            <span>adding value to mankind.</span>
          </h3>
          <NavLink to="/bio" className="more-button">
            More
          </NavLink>
        </div>
      </div>
    </div>
  );
}
