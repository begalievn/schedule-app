import React from 'react';

// components
import { HeaderV1 } from '../../../../components/elements/header-v1';
import { Container } from '@mui/material';
import { ScheduleBoard } from './schedule-board';

// styles
// import classes from './style.scss';

export const ScheduleTablePage = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{ paddingBottom: '30px' }}
    >
      <HeaderV1>Schedule table</HeaderV1>
      <ScheduleBoard />
    </Container>
  );
};
