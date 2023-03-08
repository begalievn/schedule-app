import React from "react";

export const InputRadio = ({
  handleChange,
  workingTime,
  values,
  timeTitle,
  name,
}) => {
  return (
    <label htmlFor={workingTime}>
      {timeTitle}
      <input
        type='radio'
        name={name}
        id={workingTime}
        value={workingTime}
        checked={values === workingTime}
        onChange={handleChange}
      />
    </label>
  );
};
