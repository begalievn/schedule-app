import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {addPadBefore} from "../../../../../../../../../utils/addPadBefore";

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#4E8BE6',
    color: theme.palette.common.white,
    fontWeight: 600,
    fontSize: '15px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 500,
    
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
    cursor: 'pointer',
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
  createData(1, 'Frozen yoghurt', '2022/2023'),
  createData(2, 'Frozen yoghurt', '2022/2023'),
  createData(3, 'Frozen yoghurt', '2022/2023'),
  createData(4, 'Frozen yoghurt', '2022/2023'),
  createData(5, 'Frozen yoghurt', '2022/2023'),
  createData(5, 'Frozen yoghurt', '2022/2023'),
  createData(5, 'Frozen yoghurt', '2022/2023'),
  createData(4, 'Frozen yoghurt', '2022/2023'),
  createData(5, 'Frozen yoghurt', '2022/2023'),
  createData(5, 'Frozen yoghurt', '2022/2023'),
  createData(5, 'Frozen yoghurt', '2022/2023'),
];

export const ScheduleListTable = () => {
  return (
    <Paper sx={{width: '100%', overflow: 'hidden'}}>
      <TableContainer sx={{height: 440}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{width: '100px'}}>№</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="center">Year</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  { addPadBefore(index+1, 0, 2) }
                </StyledTableCell>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.year}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};