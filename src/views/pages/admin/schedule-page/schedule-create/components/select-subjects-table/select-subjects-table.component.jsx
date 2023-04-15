import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { addPadBefore } from '../../../../../../../utils/addPadBefore';
import { SubjectChooseCheckBox } from '../subject-choose-check-box';
import {useDispatch, useSelector} from 'react-redux';
import { addSubject, removeSubject } from '../../../../../../../store/slice/schedule-slice';

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
  },
  '&:last-child td, &:last-child th': {
    borderBottom: '1px solid rgba(128, 128, 128, 0.2)',
  },
}));

export const SelectSubjectsTable = ({ data = [], }) => {
  const selectedSubjects = useSelector((state) => state.schedule.selectedSubjects);
  const dispatch = useDispatch();
  
  const handleSelect = (subject) => {
    const isSubjectSelected = selectedSubjects.find((sub) => sub._id === subject._id);
    if (isSubjectSelected) {
      dispatch(removeSubject(subject));
    } else {
      dispatch(addSubject(subject));
    }
  }
  
  return (
    <Paper sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ height: 500 }}>
        <Table
          stickyHeader
          aria-label='sticky table'
        >
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: '100px' }}>№</StyledTableCell>
              <StyledTableCell
                align='left'
                sx={{ width: '350px' }}
              >
                Subject name
              </StyledTableCell>
              <StyledTableCell align='left'>Code</StyledTableCell>
              <StyledTableCell align='center'>Choose</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((subject, index) => (
              <StyledTableRow key={subject._id}>
                <StyledTableCell
                  component='th'
                  scope='row'
                >
                  {addPadBefore(index + 1, 0, 2)}
                </StyledTableCell>
                <StyledTableCell
                  align='left'
                  sx={{ fontWeight: 700 }}
                >
                  {subject.name}
                </StyledTableCell>
                <StyledTableCell align='left'>{subject.code}</StyledTableCell>
                <StyledTableCell
                  align='center'
                  sx={{
                    background: 'rgba(177, 190, 237, 0.26)',
                    width: '40px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleSelect(subject)}
                >
                  {<SubjectChooseCheckBox selected={selectedSubjects.find((sub) => sub._id === subject._id)} />}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
