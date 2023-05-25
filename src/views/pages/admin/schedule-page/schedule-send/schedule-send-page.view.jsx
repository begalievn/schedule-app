import React, {useState} from 'react';
import axios from 'axios';

import { useNavigate } from "react-router-dom";
import {CircularProgress, Container} from "@mui/material";
import {useSelector} from 'react-redux';

import { HeaderV1 } from "../../../../components/elements/header-v1";
import { ButtonV2 } from "../../../../components/elements/button-v2";

// apis
import {useGetClassroomsQuery} from '../../../../../store/api/classroom-api';

// styles
import classes from './style.module.scss';
import {handleToast} from '../../../../../utils/handle-toast';
import {ToastContainer} from 'react-toastify';

export const ScheduleSendPage = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [status, setStatus] = useState('WAITING FOR ACTION')
  
  const schedule = useSelector(state => state.schedule);
  const { selectedSubjects, scheduleName, selectedSemester } = schedule;
  
  const { data: classrooms, isLoading: classroomsLoading } = useGetClassroomsQuery();
  
  const navigate = useNavigate();
  
  const handleSendToGenerator = async () => {
    const data = {
      subjects: selectedSubjects,
      classrooms: classrooms,
      name: scheduleName,
      semester: selectedSemester,
    }
    console.log({ scheduleName, selectedSemester });
    console.log(data);
    setIsCreating(true);
    setStatus('IN PROGRESS');
    const result = await axios.post(`https://academicschedulegenerator.herokuapp.com/genetic_algorithm/generate_schedule/`, data, {});
    handleToast(
      result,
      'Successfully created!',
      'Failed to create!'
    )
    setIsCreating(false);
    if (result?.data) {
      setStatus('CREATED');
    } else {
      setStatus('RETURNED');
    }
    console.log(`result`, result);
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
            disabled={isCreating}
            style={{width: '100%', marginBottom: '30px'}}
          >
            Send to the schedule generator
          </ButtonV2>
          <p className={classes.status}>Status: <span className={classes.status_span}>{status}</span></p>
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
      <ToastContainer />
    </Container>
  );
};
