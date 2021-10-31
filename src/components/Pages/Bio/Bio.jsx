import { Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import './Bio.css';
import Aos from 'aos';
import 'aos/dist/aos.css'


export default function Bio() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  return (
    <Paper elevation={2} className="container">
      <h2 className="sub-heading" data-aos="fade-right">BI0GRAPHY</h2>
      <div>
        <p data-aos="fade-up">
          Elder (Chief) Isaac Akpowene Egbi (JP) was born on 5th January, 1962
          in Egbi Compound, Arhagba Town, Oghievwen Clan Ugheli South LGA, Delta
          State Nigeria. Elder (Chief) Isaac AkpoweneEgbi
          (JP) is the president/founder of FEDERATED ORGANANIZATION OF HOST
          COMMUNITIES OF OIL AND GAS, SOLID MINERALS AND ASSETS OF NIGERIA
          (FOHCOGSMAN). A humanitarian organization aimed at assisting all
          sectors ranging from oil sector, education sector, health sector just
          to mention but a few. He has being single handedly sponsoring this
          noble organization since 1990 and has been impacting in the lives of
          people in different ways. He has also contributed immensely to the
          development of certain infrastructures such as road construction,
          provision of health facilities and many more. ELDER (CHIEF) ISAAC
          AKPOWENE EGBI has traveled to different parts of the world and this
          makes him very knowledgeable in different areas of life.
        </p>
        <h2 className="sub-heading" data-aos="fade-right">CORE COMPENTENCE</h2>
        <ul data-aos="fade-up">
          <li>Strong Administrative skill</li>
          <li> Efficient Analytical skill</li>
          <li>Oratory Skills</li>
          <li>Organization skill</li>
          <li>Leadership skill</li>
          <li>Managerial skill</li>
          <li>Logistics and procurement</li> <li>Data Analysis</li>
          <li>Attention to Details</li>
        </ul>
        <h2 className="sub-heading" data-aos="fade-right">STRENGTH</h2>
        <p data-aos="fade-up">
          Over Six years experience in process/production Operations and
          Hands-on Community Relations Management.
        </p>
        <h2 className="sub-heading" data-aos="fade-right">SOCIAL AND PUBLIC EXPERIENCE</h2>
        <ul data-aos="fade-up">
          <li>TRADITIONAL CHIEFTAINCY CONFERMENT 17/12/2011</li>{" "}
          <li>JUSTICE OF PEACE OF THE DELTA STATE (JP 723)</li>{" "}
          <li>
            YEAR 2018 NIGER DELTA NOMINEE FOR THE OFFICE OF SSA TO THE PRESIDENT
            ON YOUTH AFFAIRS AND LAND SURVEILLANCE
          </li>
          <li>THE NDDC BOARD YEAR 2020 MEMBER OF THE COUNCIL OF KINGDOMS </li>
          <li>
          REPRESENTATIVE OF URHOBO PROGRESS UNION (UPU), NATION, WORLD WIDE
          YEAR 2020 EXECUTIVE DIRECTOR</li> <li>GOVERNMENT, PUBLIC RELATIONS &
          ENVIRONMENTAL CONSULTANT</li> <li>ABUS OIL SERVICES LTD (NESREA AGENT)</li>
          <li>
          EX-CHAIRMAN, OBUKOGBA-OJIKPATA LANDLORDS AND TENANTS ASSOCIATION,
          OJIKPATA, ORHUWHORUN TOWN, UDU KINGDOM, DELTA STATE</li>
          <li>
          FOUNDER/CHAIRMAN, UTOROGU GAS PLANT AND ASSETS MONITORING AND
          SURVEILLANCE VOLUNTEER TASK FORCE, UTOROGU AREA COMMUNITIES, UGHELLI
          SOUTH, DELTA STATE</li> <li>EX-GENERAL SECURITY, URHOBO NATIONALYOUTH COUNCIL,
          URHOBO NATION</li> <li>EX-P.R.0 AND VICE CHAIRMAN OF ARHAGBA EXECUTIVE RULING
          COMMITTEE OF ARHAGBA COMMUNITY, UGHIEVWEN (JEREMI KINGDOM, UGHELLI
          SOUTH, DELTA STATE</li> <li>FOUNDER/PRESIDENT, FEDERATED ORGANIZATION OF HOST
          COMMUNITIES OF OIL & GAS, SOLID MINERALS AND ASSETS OF NIGERIA
          (FOHCOGSMAN) SEPTEMBER, YEAR 2020</li> <li>FOUNDER/PRESIDENT, GRASSROOTTORCH &
          VOICE OF UNITY, PEACE AND DEVELOPMENT OF NIGER DELTA REGION
          SEPTEMBER, YEAR 2015</li> <li>FOUNDER/PRESIDENT, FARMERS' DOLLARS AND
          INVESTMENTS MULTI -PURPOSE COOPERATIVE SOCIETY</li> <li>FOUNDER/PRESIDENT,
          BUHARI MUST WIN (BMW) INITIATIVE AND SENSITIZATION</li> 
        </ul>
          <Typography variant="h5" className="footnote" data-aos="fade-up"><em>Elder (Chief)
          Isaac AkpoweneEgbi (JP) FONDER/PRESIDENT (FOHCOGSMAN) is the best
          Candidate to hold the post of Commissioner of Niger Delta Development
          Commission (NDDC)</em></Typography>
      </div>
    </Paper>
  );
}
