import React, {useEffect, useState} from 'react';
import {Container} from '@mui/material';
import {HeaderV1} from '../../../../components/elements/header-v1';
import {ScheduleBoard} from '../../../../components/schedule-board';
import {useGetScheduleByIdQuery} from '../../../../../store/api/schedule-api';
import { useParams } from 'react-router-dom';
import {ContainerWithLoader} from '../../../../components/containers/container-with-loader';

export const ScheduleTableSelectedPage = () => {
  const params = useParams();
  const id = params.id;
  
  const { data, isLoading } = useGetScheduleByIdQuery(`${id}`);
  
  useEffect(() => {
    if (data) {
      console.log('data', data);
    }
  }, [data]);
  
  return (
    <Container
      maxWidth='xl'
      sx={{paddingBottom: '30%'}}
    >
      <HeaderV1>Selected schedule</HeaderV1>
      {
       isLoading ?
         <ContainerWithLoader style={{ height: '400px' }} />
         :
         <ScheduleBoard data={data} edit={true} />
      }
    </Container>
  );
};
