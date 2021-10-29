
import bots from '../../Data/BOT';
import * as React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import './Boards.css';




export default function BasicTable() {
  return (
    <TableContainer component={Paper} className="tableContainer">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableHeaderCell">Info</TableCell>
            <TableCell className="tableHeaderCell">Address</TableCell>
            <TableCell className="tableHeaderCell">Occupation</TableCell>
            {/* <TableCell className="tableHeaderCell" >Phone</TableCell>
            <TableCell className="tableHeaderCell" >Email</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {bots.map((bot) => (
            <TableRow
              key={bot.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography className="trusteeInfo name">{bot.name}</Typography>
                <Typography color="textSecondary" variant="body2" className="trusteeInfo">{bot.phone}</Typography>
                <Typography color="textSecondary" variant="body2" className="trusteeInfo">{bot.email.toLowerCase()}</Typography>
              </TableCell>
              <TableCell><Typography color="textSecondary" variant="body2">{bot.address}</Typography></TableCell>
              <TableCell><Typography color="textSecondary" variant="body2">{bot.occupation}</Typography></TableCell>
              {/* <TableCell >{bot.phone}</TableCell>
              <TableCell >{bot.email}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
