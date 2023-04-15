import React from 'react';
import { useNavigate } from "react-router-dom";


// components
import { HeaderV1 } from "../../../../components/elements/header-v1";
import { ButtonV2 } from "../../../../components/elements/button-v2";

// styles
import classes from './style.module.scss';
import {Container} from "@mui/material";

export const ScheduleSendPage = () => {
  const navigate = useNavigate();
  
  const handleContinueManually = () => {
    navigate('/admin/schedule/table')
  }
  
  return (
    <Container maxWidth={'xl'} style={{display: 'flex', justifyContent: 'center', paddingBottom: '30px'}}>
      <div className={classes.container}>
        <div className={classes.blocks}>
          <HeaderV1>Selected subjects</HeaderV1>
          <div className={classes.amount}>Amount: <span>8</span></div>
        </div>
        <div className={classes.blocks}>
          <ButtonV2 style={{width: '100%', marginBottom: '30px'}}>Send to the schedule generator</ButtonV2>
          <p className={classes.status}>Status: <span className={classes.status_span}>IN PROGRESS</span></p>
        </div>
        <div className={classes.blocks}>
          <ButtonV2 style={{width: '100%'}} onClick={ handleContinueManually }>Continue manually</ButtonV2>
        </div>
      </div>
    </Container>
  );
};
