import React from 'react';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {styled, TextField } from '@mui/material';


export const DatePickerV2 = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer sx={{ padding: 0 }} components={['DatePicker']}>
        <StyledDatePicker
          format="DD/MM/YYYY"
          renderInput={(params) => <TextField {...params} size='small' />}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};


const StyledDatePicker=styled(DatePicker)(() => ({
  marginTop: '0',
  width: '329px',
  borderRadius: '5px',
  '& .MuiInputBase-input.MuiOutlinedInput-input':{
    width: '329px',
    padding:'10px 10px',
  }
}))

