import React from 'react';

// components
import {HeaderV1} from "../../../../../../components/elements/header-v1";
import {Container} from "@mui/material";
import {ScheduleBoard} from "./schedule-board";

// styles
import classes from './style.module.scss';

const hours = [
  {
    hour: 1,
    from: '9:00',
    till: '9:40'
  },
  {
    hour: 2,
    from: '9:50',
    till: '10:30'
  },
  {
    hour: 3,
    from: '10:40',
    till: '11:20'
  },
  {
    hour: 4,
    from: '11:30',
    till: '12:10'
  },
  {
    hour: 5,
    from: '12:20',
    till: '13:00'
  },
  {
    hour: 'lunch',
    from: '13:00',
    till: '14:00',
    lunch: true,
  },
  {
    hour: 6,
    from: '14:00',
    till: '14:40',
  },
  {
    hour: 7,
    from: '14:50',
    till: '15:30'
  },
  {
    hour: 8,
    from: '15:40',
    till: '16:20',
  },
  {
    hour: 9,
    from: '16:30',
    till: '17:10',
  },
  {
    hour: 10,
    from: '17:20',
    till: '18:00'
  }
]

export const ScheduleTablePage = () => {
  return (
    <Container maxWidth='xl' >
      <HeaderV1>
        Schedule table
      </HeaderV1>
      <ScheduleBoard />
    </Container>
  );
};
