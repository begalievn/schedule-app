import React from 'react';

export const RadioV1 = ({ radio, handleChange, value }) => {
  return (
    <label>
      {radio.value}
      <input
        type='radio'
        name='classroom'
        value={radio.value}
        onChange={handleChange}
        checked={value === radio.value}
      />
    </label>
  );
};
