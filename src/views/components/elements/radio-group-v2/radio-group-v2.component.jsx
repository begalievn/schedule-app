import React from 'react';
import {FormControl, FormControlLabel, Radio, RadioGroup} from '@mui/material';

export const RadioGroupV2 = () => {
  const [value, setValue] = React.useState('female');
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  return (
    <FormControl>
      <RadioGroup
        row={true}
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
};
