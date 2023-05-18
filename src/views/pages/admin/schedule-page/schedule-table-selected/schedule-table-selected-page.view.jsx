import React from 'react';
import {Container} from '@mui/material';
import {HeaderV1} from '../../../../components/elements/header-v1';
import {ScheduleBoard} from '../../../../components/schedule-board';
import {useSelector} from 'react-redux';
import {useGetScheduleByIdQuery} from '../../../../../store/api/schedule-api';
import {useParams} from 'react-router-dom';
import {ContainerWithLoader} from '../../../../components/containers/container-with-loader';

export const ScheduleTableSelectedPage = () => {
  const selectedSchedule = useSelector((state) => state.schedule.selectedSchedule);
  
  const { id } = useParams('id');
  
  const { data, isLoading } = useGetScheduleByIdQuery(`${id}`);
  
  console.log(data);
  
  return (
    <Container
      maxWidth='xl'
      sx={{paddingBottom: '30%'}}
    >
      <HeaderV1>Schedule table selected</HeaderV1>
      {
       isLoading ?
         <ContainerWithLoader style={{ height: '400px' }} />
         :
         <ScheduleBoard data={data} />
      }
    </Container>
  );
};
