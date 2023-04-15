import React from 'react';

// assets
import { ChosenSubjectIcon } from "../../../../../../../assets/icons";

// styles
import classes from './style.module.scss';

export const SubjectChooseCheckBox = ({ selected }) => {
  return (
    <div className={classes.container}>
      { selected ? <span className={classes.icon_span}><ChosenSubjectIcon /></span>  : '' }
    </div>
  );
};
