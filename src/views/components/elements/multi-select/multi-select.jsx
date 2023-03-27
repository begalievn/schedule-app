import React from 'react';

import { Check } from '@mui/icons-material';
import { Autocomplete, MenuItem, TextField } from '@mui/material';

export const MultiSelect = ({ options, value, setValue }) => {
  return (
    <Autocomplete
      sx={{ m: 1, width: 500 }}
      multiple
      options={options}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      getOptionLabel={(option) => ` ${option.firstName} ${option.lastName}`}
      disableCloseOnSelect
      renderInput={(params) => (
        <TextField
          {...params}
          variant='outlined'
          label='Multiple Autocomplete'
        />
      )}
      renderOption={(props, option, { selected }) => (
        <MenuItem
          {...props}
          key={option._id}
          value={`${option.firstName} ${option.lastName}`}
          sx={{ justifyContent: 'space-between' }}
        >
          {`${option.firstName} ${option.lastName}`}

          {selected ? <Check color='info' /> : null}
        </MenuItem>
      )}
    />
  );
};
