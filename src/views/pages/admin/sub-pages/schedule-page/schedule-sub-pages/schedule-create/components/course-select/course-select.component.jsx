import React from 'react';

// styles
import classes from './style.module.scss';

export const CourseSelect = ({ title, id, selected, onChange }) => {
  return (
    <button
      id={id}
      className={`${classes.button} ${selected ? classes.selected : ''}`}
      onClick={onChange}
    >
      {title}
    </button>
  );
};
