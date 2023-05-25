import { Container } from '@mui/material';

import { persistor } from '../../../store/store';
import {ScheduleBoard} from '../../components/schedule-board';
import {useGetActiveScheduleQuery} from '../../../store/api/schedule-api';
import {ContainerWithLoader} from '../../components/containers/container-with-loader';
import {ContentContainer} from '../../components/containers/content';
import {HeaderV1} from '../../components/elements/header-v1';
import {MobileSchedule} from '../../components/mobile-schedule/mobile-schedule.component';

import classes from './style.module.scss';

const loggedOut = () => {
  persistor.purge();
};

export const StartPage = () => {
  
  const { data, isLoading } = useGetActiveScheduleQuery();
  
  return (
    <Container maxWidth='xl' sx={{ marginBottom: '50px' }}>
      {
        isLoading ? <ContainerWithLoader style={{ height: '500px'}} /> :
          <ContentContainer style={{ width: '90%' }}>
            <HeaderV1 style={{ paddingTop: '15px' }}>Welcome to the COM department's schedule</HeaderV1>
            <div className={classes.desktop}>
              <ScheduleBoard data={data} />
            </div>
            <div className={classes.mobile}>
              <MobileSchedule data={data} />
            </div>
            <button onClick={loggedOut} style={{ marginBottom: '30px' }} >log out</button>
          </ContentContainer>
      }
    </Container>
  );
};
