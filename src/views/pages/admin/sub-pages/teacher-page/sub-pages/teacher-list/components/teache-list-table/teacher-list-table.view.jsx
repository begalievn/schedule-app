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

function createData(id, name, email, degree) {
  return { id, name, email, degree };
}

const rows = [
  createData(1, 'Dastan Baiyzbekov', 'dastanbayizbekov@gmail.com', 'Professor'),
  createData(2, 'Maria Antonova', 'mariaantonova@gmail.com', 'Professor'),
  createData(3, 'Maria Antonova', 'mariaantonova@gmail.com', 'Professor'),
  createData(4, 'Maria Antonova', 'mariaantonova@gmail.com', 'Professor'),
  createData(5, 'Maria Antonova', 'mariaantonova@gmail.com', 'Professor'),
  createData(6, 'Maria Antonova', 'mariaantonova@gmail.com', 'Professor'),
  createData(7, 'Maria Antonova', 'mariaantonova@gmail.com', 'Professor'),
  createData(8, 'Maria Antonova', 'mariaantonova@gmail.com', 'Professor'),
  createData(9, 'Maria Antonova', 'mariaantonova@gmail.com', 'Professor'),
  createData(10, 'Maria Antonova', 'mariaantonova@gmail.com', 'Professor'),
  createData(11, 'Maria Antonova', 'mariaantonova@gmail.com', 'Professor'),
];

export const TeacherListTable = () => {
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
              <StyledTableCell align='center'>Email</StyledTableCell>
              <StyledTableCell align='center'>Degree</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align='center'>
                  {addPadBefore(row.id, 0, 2)}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.name}</StyledTableCell>
                <StyledTableCell align='center'>{row.email}</StyledTableCell>
                <StyledTableCell align='center'>{row.degree}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPaper>
  );
};
