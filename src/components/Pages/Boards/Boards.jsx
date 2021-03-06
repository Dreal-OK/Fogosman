
import bots from '../../Data/BOT';
import * as React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import './Boards.css';
import Aos from 'aos';
import 'aos/dist/aos.css';




export default function BasicTable() {
  React.useEffect(() => {Aos.init({duration: 2000 })})
  return (
    <TableContainer component={Paper} className="tableContainer">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color: 'red'}} className="tableHeaderCell">Info</TableCell>
            <TableCell style={{color: 'red'}} className="tableHeaderCell">Address</TableCell>
            <TableCell style={{color: 'red'}} className="tableHeaderCell">Occupation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bots.map((bot) => (
            <TableRow
              key={bot.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              data-aos="fade-up"
            >
              <TableCell component="th" scope="row">
                <Typography className="trusteeInfo name">{bot.name}</Typography>
                <Typography color="textSecondary" variant="body2" className="trusteeInfo">{bot.phone}</Typography>
                <Typography color="textSecondary" variant="body2" className="trusteeInfo">{bot.email.toLowerCase()}</Typography>
              </TableCell>
              <TableCell><Typography color="textSecondary" variant="body2">{bot.address}</Typography></TableCell>
              <TableCell><Typography color="textSecondary" variant="body2">{bot.occupation}</Typography></TableCell>
    
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
