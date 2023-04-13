import React from 'react';
import {Checkbox, FormControlLabel} from '@mui/material';

export const CheckBoxV2 = ({ checked, handleChange, labelPlacement, label, value, key }) => {
  return (
    <FormControlLabel
      value={value}
      checked={checked}
      control={<Checkbox onChange={(e) => handleChange(e.target.value)} />}
      label={label}
      labelPlacement={labelPlacement || "top"}
    />
  );
};
