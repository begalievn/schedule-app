import React from 'react';
import { useNavigate } from "react-router-dom";
import { HeaderV1 } from "../../../../components/elements/header-v1";
import { ButtonV2 } from "../../../../components/elements/button-v2";
import {Container} from "@mui/material";
import {useSelector} from 'react-redux';

// styles
import classes from './style.module.scss';
import {useGetClassroomsQuery} from '../../../../../store/api/classroom-api';

export const ScheduleSendPage = () => {
  const selectedSubjects = useSelector(state => state.schedule.selectedSubjects);
  
  const { data: classrooms, isLoading: classroomsLoading } = useGetClassroomsQuery();
  
  const navigate = useNavigate();
  
  const handleSendToGenerator = () => {
    const data = {
      subjects: selectedSubjects,
      classrooms: classrooms,
    }
    console.log(data);
  }
  
  const handleContinueManually = () => {
    navigate('/admin/schedule/table')
  }
  
  return (
    <Container maxWidth={'xl'} style={{display: 'flex', justifyContent: 'center', paddingBottom: '30px'}}>
      <div className={classes.container}>
        <div className={classes.blocks}>
          <HeaderV1>Selected subjects</HeaderV1>
          <div className={classes.amount}>Amount: <span>{selectedSubjects.length}</span></div>
        </div>
        <div className={classes.blocks}>
          <ButtonV2
            onClick={handleSendToGenerator}
            style={{width: '100%', marginBottom: '30px'}}
          >
            Send to the schedule generator
          </ButtonV2>
          <p className={classes.status}>Status: <span className={classes.status_span}>IN PROGRESS</span></p>
        </div>
        <div className={classes.blocks}>
          <ButtonV2
            style={{width: '100%'}}
            onClick={ handleContinueManually }
          >
            Continue manually
          </ButtonV2>
        </div>
      </div>
    </Container>
  );
};
