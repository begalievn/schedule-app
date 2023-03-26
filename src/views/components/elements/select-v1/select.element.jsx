import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select as MuiSelect } from '@mui/material';

export const SelectV1 = ({ children, selecTitle, parentfunc, ...props }) => {
  const [selectValue, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    parentfunc(event.target.value);
  };

  return (
    <FormControl
      sx={{ minWidth: '300px' }}
      size='small'
      {...props}
    >
      <InputLabel>{selecTitle}</InputLabel>
      <MuiSelect
        sx={{ borderColor: '#9FB8F9' }}
        value={selectValue}
        label={selecTitle}
        onChange={handleChange}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {children}
      </MuiSelect>
    </FormControl>
  );
};
