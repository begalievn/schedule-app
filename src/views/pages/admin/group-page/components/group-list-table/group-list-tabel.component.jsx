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
import { useNavigate } from 'react-router-dom';
import {addPadBefore} from '../../../../../../utils/addPadBefore';

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
    height: '40px',
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
    borderBottom: '1px solid rgba(128, 128, 128, 0.2)',
  },
}));

const StyledPaper = styled(Paper)(() => ({
  width: '100%',
  overflow: 'hidden',
  '*::-webkit-scrollbar': {
    width: '0px',
  },
}));

export const GroupListTable = ({ groups = [] }) => {
  const navigate = useNavigate();
  const navigateToSubjectUpdate = (id) => {
    navigate(`update/${id}`);
  };
  
  return (
    <StyledPaper>
      <TableContainer sx={{ height: 400 }}>
        <Table
          stickyHeader
          aria-label='sticky table'
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>№</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align='center'>Students count</StyledTableCell>
              <StyledTableCell align='center'>Year</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groups.map((row, index) => (
              <StyledTableRow
                key={row._id}
                onClick={() => navigateToSubjectUpdate(row._id)}
              >
                <StyledTableCell>
                  {addPadBefore(index + 1, 0, 2)}
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell align='center'>{row?.studentsCount}</StyledTableCell>
                <StyledTableCell align='center'>{row?.year}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPaper>
  );
};
