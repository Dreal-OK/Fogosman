import { Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <Grid container>
          <Grid item sm={12} md={4} className="contact">
            <Typography variant="h5" className="heading">
              Contact Us
            </Typography>
            <Typography variant="h6" className="sub-heading">
              <i class="fas fa-map-marker-alt"></i>
            </Typography>
            <Typography variant="caption">
              C/O HIS ROYAL MAJESTY, DR. MATTHEW EDIRIN EGBI JD, FOD, OWAHWA II,
              OKOBARO (OVIE) OF UGIEVWEN KINGDOM, OGHIEVWEN PALACE, OTU-JEREMI
            </Typography>
            <Typography variant="h6" className="sub-heading">
              <i class="far fa-envelope"></i>
            </Typography>
            <a href="mailto:isaacegbi2016@gmail.com">isaacegbi2016@gmail.com</a>
            <a href="mailto:fohcogsman@gmail.com">fohcogsman@gmail.com</a>
            <a href="mailto:fohcogsman@yahoo.com">fohcogsman@yahoo.com</a>
          </Grid>
          <Grid item sm={6} md={4} className="tel">
            <Typography variant="h5" className="sub-heading">
              <i class="fas fa-phone"></i>
            </Typography>
            <ul>
              <li>
                <a href="tel:08050816414">08050816414</a>
              </li>
              <li>
                <a href="tel:08165413653">08165413653</a>
              </li>
              <li>
                <a href="tel:07017393921">07017393921</a>
              </li>
            </ul>
          </Grid>
          <Grid item sm={6} md={4} className="useful-links">
            <Typography variant="h5" className="sub-heading">
              <i class="fas fa-link"></i>
            </Typography>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/bio">Bio</NavLink>
              </li>
              <li>
                <NavLink to="/objectives">Plans</NavLink>
              </li>
              <li>
                <NavLink to="/board">Boards</NavLink>
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
