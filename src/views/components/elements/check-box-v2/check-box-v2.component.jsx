import React from 'react';
import {Checkbox, FormControlLabel} from '@mui/material';

export const CheckBoxV2 = ({ checked, handleChange, labelPlacement }) => {
  return (
    <FormControlLabel
      value="top"
      control={<Checkbox />}
      label="Top"
      labelPlacement={labelPlacement || "top"}
    />
  );
};
