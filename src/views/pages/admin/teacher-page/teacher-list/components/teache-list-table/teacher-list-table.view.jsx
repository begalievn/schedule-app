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
import { addPadBefore } from '../../../../../../../utils/addPadBefore';
import {useNavigate} from 'react-router-dom';

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
    fontFamily: 'Poppins',
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

export const TeacherListTable = ({ data = [] }) => {
  const navigate = useNavigate();
  
  const handleTeacherClick = (data) => {
    navigate(`list/${data?._id}`);
  }
  
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
              <StyledTableCell align='center'>FirstName</StyledTableCell>
              <StyledTableCell align='center'>LastName</StyledTableCell>
              <StyledTableCell align='center'>Email</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow onClick={() => handleTeacherClick(row)} key={row._id}>
                <StyledTableCell align='center'>
                  {addPadBefore(index + 1, 0, 2)}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.firstName || ''}</StyledTableCell>
                <StyledTableCell align='center'>{row.lastName || ''}</StyledTableCell>
                <StyledTableCell align='center'>{row.email || ''}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPaper>
  );
};
