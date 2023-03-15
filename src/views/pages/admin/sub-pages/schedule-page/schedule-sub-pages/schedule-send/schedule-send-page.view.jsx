import React from 'react';
import {ContentContainer} from "../../../../../../components/containers/content";
import {HeaderV1} from "../../../../../../components/elements/header-v1";

// styles
import classes from './style.module.scss';

export const ScheduleSendPage = () => {
  return (
    <ContentContainer style={{ display: 'flex', justifyContent: 'center'}}>
      <div className={classes.container}>
        <div className={classes.blocks}>
          <HeaderV1>Selected subjects</HeaderV1>
          <div className={classes.amount}>Amount: <span>8</span></div>
        </div>
        <div className={classes.blocks}>
          <button className={`${classes.button} ${classes.send_to_sga}`}>Send to the schedule generator</button>
          <p className={classes.status}>Status:  <span className={classes.status_span}>IN PROGRESS</span></p>

        </div>
        <div className={classes.blocks}>
          <button className={classes.button}>Continue manually</button>
        </div>
      </div>
    </ContentContainer>
  );
};
