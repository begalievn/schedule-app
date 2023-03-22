//module
import React from 'react';
import { HeaderV1 } from '../../../../components/elements/header-v1';

// styles
import classes from './style.module.scss';

export const Teacher = (props) => {
  return (
    <div className={classes.container}>
      <HeaderV1>Teacher's</HeaderV1>
      {props.children}
    </div>
  );
};
