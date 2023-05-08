import React from 'react';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {styled, TextField } from '@mui/material';
import * as dayjs from 'dayjs';

export const DatePickerV2 = ({ onChange, value }) => {
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer sx={{ padding: 0 }} components={['DatePicker']}>
        <StyledDatePicker
          value={value}
          defaultValue={value}
          slotProps={{
            textField: {
              size: "small",
              error: false,
            },
          }}
          format="DD/MM/YYYY"
          onChange={(event) => onChange(event)}
          renderInput={(params) => <TextField {...params} size='small' error={false} />}
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

