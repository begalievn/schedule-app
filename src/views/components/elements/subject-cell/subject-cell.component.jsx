import React from 'react';

import {getColorForSubject} from '../../../../utils/get-color-for-subject';
import classes from './style.module.scss';

export const SubjectCell = ({ cell }) => {
  
  const background = getColorForSubject(cell?.title);
  
  return (
    <div style={{ background }} className={classes.subject_cell}>
      <div className={classes.text}>{ cell?.title }</div>
      <div className={`${classes.text} ${classes.teacher}`}>{ cell?.teachers }</div>
      <div className={classes.classroom}>{ cell?.classroom }</div>
    </div>
  );
};
