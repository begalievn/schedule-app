import React from 'react';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import {addPadBefore} from "../../../../../../../../../utils/addPadBefore";
import {SubjectChooseCheckBox} from "../subject-choose-check-box";

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#4E8BE6',
    color: theme.palette.common.white,
    fontWeight: 600,
    fontSize: '16px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '16px',
    fontWeight: 500,
    fontFamily: 'Inter',
  }
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
  '&:nth-of-type(odd)': {
    background: 'linear-gradient(0deg, #DCEAFF, #DCEAFF), #ABCDFF',
  },
  '&:nth-of-type(event)': {
    backgroundColor: 'linear-gradient(0deg, #DCEAFF, #DCEAFF), #ABCDFF',
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  id: number,
  name: string,
  year: string,
) {
  return {id, name, year};
}

const rows = [
  createData(1, 'Digital Electronics', 'CS403'),
  createData(2, 'Digital Electronics', 'CS403'),
  createData(3, 'Digital Electronics', 'CS403'),
  createData(4, 'Digital Electronics', 'CS403'),
  createData(5, 'Digital Electronics', 'CS403'),
  createData(5, 'Digital Electronics', 'CS403'),
  createData(5, 'Digital Electronics', 'CS403'),
  createData(1, 'Digital Electronics', 'CS403'),
  createData(2, 'Digital Electronics', 'CS403'),
  createData(3, 'Digital Electronics', 'CS403'),
  createData(4, 'Digital Electronics', 'CS403'),
  createData(5, 'Digital Electronics', 'CS403'),
  createData(5, 'Digital Electronics', 'CS403'),
  createData(5, 'Digital Electronics', 'CS403'),
];

export const SelectSubjectsTable = () => {
  return (
    <Paper sx={{width: '100%', height: '100%', overflow: 'hidden'}}>
      <TableContainer sx={{maxHeight: 500}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{width: '100px'}}>№</StyledTableCell>
              <StyledTableCell align="left" sx={{width: '350px'}}>Subject name</StyledTableCell>
              <StyledTableCell align="left" >Code</StyledTableCell>
              <StyledTableCell align="center">Choose</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.index}>
                <StyledTableCell component="th" scope="row">
                  {addPadBefore(index + 1, 0, 2)}
                </StyledTableCell>
                <StyledTableCell align="left" sx={{fontWeight:700}}>{row.name}</StyledTableCell>
                <StyledTableCell align="left">{row.year}</StyledTableCell>
                <StyledTableCell align="center" sx={{ background: 'rgba(177, 190, 237, 0.26)', width: '60px', cursor: 'pointer' }}>{ <SubjectChooseCheckBox selected={true} /> }</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
