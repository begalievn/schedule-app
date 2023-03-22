import { styled } from '@mui/material/styles';

import { tableCellClasses } from '@mui/material/TableCell';

import {
  Paper,
  Table,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
} from '@mui/material';
import { addPadBefore } from '../../../../../../../../../utils/addPadBefore';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
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
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    background: 'linear-gradient(0deg, #DCEAFF, #DCEAFF), #ABCDFF',
  },
  '&:nth-of-type(event)': {
    backgroundColor: 'linear-gradient(0deg, #DCEAFF, #DCEAFF), #ABCDFF',
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    cursor: 'pointer',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledPaper = styled(Paper)(() => ({
  width: '100%',
  overflow: 'hidden',
  '*::-webkit-scrollbar': {
    width: '0px',
  },
}));

function createData(id, name, code) {
  return { id, name, code };
}

const rows = [
  createData(1, 'Dastan Baiyzbekov', 'dastanbayizbekov@gmail.com'),
  createData(2, 'Web programming', 'CS403'),
  createData(3, 'Web programming', 'CS403'),
  createData(4, 'Web programming', 'CS403'),
  createData(5, 'Web programming', 'CS403'),
  createData(6, 'Web programming', 'CS403'),
  createData(7, 'Web programming', 'CS403'),
  createData(8, 'Web programming', 'CS403'),
  createData(9, 'Web programming', 'CS403'),
  createData(10, 'Web programming', 'CS403'),
  createData(11, 'Web programming', 'CS403'),
];

export const SubjectListTable = () => {
  return (
    <StyledPaper>
      <TableContainer sx={{ height: 440 }}>
        <Table
          stickyHeader
          aria-label='sticky table'
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>№</StyledTableCell>
              <StyledTableCell align='center'>Name</StyledTableCell>
              <StyledTableCell align='center'>Code</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align='center'>
                  {addPadBefore(row.id, 0, 2)}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.name}</StyledTableCell>
                <StyledTableCell align='center'>{row.code}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPaper>
  );
};
