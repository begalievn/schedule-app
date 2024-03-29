import React from 'react';
import { TextField, styled } from '@mui/material';

export const Input = ({
  value,
  onChange,
  label,
  iconVariant,
  type,
  InputProps,
  error,
  placeholder,
  name,
  required,
  icon,
  ...props
}) => {
  return (
    <StyledInput
      label={label}
      placeholder={placeholder}
      size='small'
      fullWidth
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      error={error}
      required={required}
      InputProps={{
        classes: { root: 'input' },
      }}
      {...props}
    />
  );
};

const StyledInput = styled(TextField)(() => ({
  '& .input': {
    width: '329px',
    border: '1px solid #9FB8F9',
    borderRadius: '4px',
    background: '#FFFFFF',
    color: 'black',
  },

  '& .input.Mui-error': {
    border: '1px solid red',
  },

  '& .input:not(.Mui-error):hover': {
    border: '1px solid #0079BF',
  },

  '&:focus': {
    // border: '1px solid #919191',
    color: '#919191',
    '& .MuiInputLabel-root': {
      color: '#FFF',
    },
  },

  '& .MuiInputLabel-root': {
    color: '#9F9E9EFF',
    fontSize: '16px',
    background: '#FFF',
    padding: '0px 4px 0px 8px',
  },

  '& .MuiInputLabel-root.Mui-focused': {
    left: '6px',
    fontSize: '14px',
    color: '#AFAFAF',
    background: '#FFF',
  },

  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));
