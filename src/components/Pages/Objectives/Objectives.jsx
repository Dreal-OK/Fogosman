import { Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import road from '../../../uploads/objectives/road.PNG';
import widows from '../../../uploads/objectives/widows.PNG'
import youth from '../../../uploads/objectives/youth.PNG'
import government from '../../../uploads/objectives/government.PNG'
import pipeline from '../../../uploads/objectives/pipeline.PNG'
import './Objectives.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Objectives() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);
  return (
    <div className="container">
      <Typography variant="h3" className="objective">
        OBJECTIVES
      </Typography>
      <Paper elevation={2} className="sub-objective" data-aos="fade-up">
        <Typography variant="h4" className="objective-heading">
          PREVENTION OF PIPELINE VANDALISATION{" "}
        </Typography>
        <p className="objective-text">
          Over the years, crude oil spillage through pipeline vandalism is
          considered one of the major problems of the southern region.
          Statistics have shown that Nigeria is losing well over 300,000 barrels
          per day (bpd) as a result of crude oil pipeline vandalism, which runs
          into billions of dollars in losses which as a result affected the
          economic stability of Nigeria. This organization through its
          humanitarian natures has contributed immensely to cub this ugly
          situation.
        </p>
        <div className="objective-img-container">
          <img className="objective-img" src={pipeline} alt="pipeline" />
        </div>
      </Paper>
      <Paper elevation={2} className="sub-objective" data-aos="fade-up">
        <Typography variant="h4" className="objective-heading">
          HELPING THE WIDOWS
        </Typography>
        <p className="objective-text">
          This organization has also supported the widows in the Niger Delta and
          the nation at large region in different ways ranging from provision of
          food, shelter and clothing which are the primary necessities of life.
        </p>
        <div className="objective-img-container">
          <img className="objective-img" src={widows} alt="some widows" />
        </div>
      </Paper>
      <Paper elevation={2} className="sub-objective">
        <Typography variant="h4" className="objective-heading">
          YOUTH EMPOWERMENT
        </Typography>
        <p className="objective-text">
          This organization has also contributed greatly to lives of youths and
          young ones to gain the ability and authority to make informed
          decisions and implement change in their own lives and the lives of
          other people. It has also helped in encouraging youths to do great
          things for themselves and also to make great impact in their society
          ranging from various skill acquisitions to providing employment.
        </p>
        <div className="objective-img-container">
          <img className="objective-img" src={youth} alt="some youth" />
        </div>
      </Paper>
      <Paper elevation={2} className="sub-objective" data-aos="fade-up">
        <Typography variant="h4" className="objective-heading">
          PROTECTION OF GOVERNMENT FACILITIES
        </Typography>
        <p className="objective-text">
          We have contributed our own quota to protection of government
          facilities and properties. This has been one of the major issues
          facing the country and possess a serious to the properties belonging
          to the government. This organization through its extensive work has
          been able to help this area
        </p>
        <div className="objective-img-container">
          <img className="objective-img" src={government} alt="government workers" />
        </div>
      </Paper>
      <Paper elevation={2} className="sub-objective" data-aos="fade-up">
        <Typography variant="h4" className="objective-heading">
          GOOD ROAD NETWORK
        </Typography>
        <p className="objective-text">
          Road networks are a key element for the economic growth of every
          country. It is essential to project a strategic and sustained
          expansion and an adequate maintenance of these networks to guarantee
          quality connections between the different parts of a geographical
          territory. They enable the supply of goods and services around the
          world and connect people to workplaces, schools, hospitals, etc. Road
          infrastructure improves the effectiveness and efficiency of countries
          and increases the standard living of people, making their lives
          easier.
        </p>
        <div className="objective-img-container">
          <img className="objective-img" src={road} alt="good road" />
        </div>
      </Paper>
    </div>
  );
}
