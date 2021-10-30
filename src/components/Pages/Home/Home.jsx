import React, { useEffect } from 'react'
import './Home.css'
import homeImage from '../../../uploads/homepage.png';
import { NavLink } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {

    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="img-div" data-aos="fade-right">
          <img
            src={homeImage}
            alt="home logo"
            data-aos="fade-right"
            className="home-image"
          />

          <h3 className="details details-title" variant="h5">
            ELDER
          </h3>
          <h3 className="details details-name" variant="h4">
            ISAAC AKPOWENE
            EGBI, (JP)
          </h3>
          <h6 className="small">Single-handedly sponsoring since 1990</h6>
        </div>
        <div className="caption">
          <h3 className="caption-text" data-aos="fade-down">
            We live for the purpose of humanity and benovolence.....
          </h3>
          <h3 className="caption-text" data-aos="fade-down">
            <span>adding value to mankind.</span>
          </h3>
          <NavLink to="/bio" data-aos="fade-up" className="more-button">
            More
          </NavLink>
        </div>
      </div>
    </div>
  );
}
