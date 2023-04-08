import React from 'react';

// styles
import './style.scss';

export const RadioV1 = ({
  id,
  name,
  type,
  value,
  checked,
  required,
  radioValue,
  handleChange,
  ...props
}) => {
  return (
    <label>
      {value}
      <input
        id={id}
        {...props}
        name={name}
        type={type}
        value={value}
        required={required}
        onChange={handleChange}
        checked={checked}
      />
    </label>
  );
};
