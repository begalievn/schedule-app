import { styled } from '@mui/material/styles';

import { tableCellClasses } from '@mui/material/TableCell';
import {useNavigate} from 'react-router-dom';

import {
  Paper,
  Table,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import { addPadBefore } from '../../../../../../../utils/addPadBefore';
import {useDispatch} from 'react-redux';
import {selectSchedule} from '../../../../../../../store/slice/schedule-slice';

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
    borderBottom: '1px solid rgba(128, 128, 128, 0.2)',
  },
}));

export const ScheduleListTable = ({ data = [] }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  const handleScheduleClick = (schedule) => {
    dispatch(selectSchedule(schedule));
    navigate(`table/${schedule?._id}`);
  }
  
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ height: 440 }}>
        <Table
          stickyHeader
          aria-label='sticky table'
        >
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: '100px' }}>№</StyledTableCell>
              <StyledTableCell align='left'>Name</StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell align='center'>Year</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((schedule, index) => (
              <StyledTableRow onClick={() => handleScheduleClick(schedule)} key={schedule._id}>
                <StyledTableCell
                  component='th'
                  scope='row'
                >
                  {addPadBefore(index + 1, 0, 2)}
                </StyledTableCell>
                <StyledTableCell align='left'>{schedule.name}</StyledTableCell>
                <StyledTableCell>{ schedule.active && <StarIcon /> }</StyledTableCell>
                <StyledTableCell align='center'>{schedule.year ? schedule.year.split('-')[0] : ''}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
