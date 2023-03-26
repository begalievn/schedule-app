import React from 'react';

export const RadioV1 = ({ radio, handleChange, value, name, ...props }) => {
  return (
    <label>
      {radio.value}
      <input
        {...props}
        name={name}
        type='radio'
        value={radio.value}
        onChange={handleChange}
        checked={value === radio.value}
      />
    </label>
  );
};
