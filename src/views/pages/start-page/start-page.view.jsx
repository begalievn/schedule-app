import { Container } from '@mui/material';

import { persistor } from '../../../store/store';
import {ScheduleBoard} from '../../components/schedule-board';
import {useGetActiveScheduleQuery} from '../../../store/api/schedule-api';
import {ContainerWithLoader} from '../../components/containers/container-with-loader';

const loggedOut = () => {
  persistor.purge();
};

export const StartPage = () => {
  
  const { data, isLoading } = useGetActiveScheduleQuery();
  
  return (
    <Container maxWidth='xl' sx={{ marginBottom: '50px' }}>
      <h2>Start Page</h2>
      <button onClick={loggedOut} style={{ marginBottom: '30px' }} >log out</button>
      {
        isLoading ? <ContainerWithLoader style={{ height: '500px'}} /> :
          <ScheduleBoard data={data} />
      }
    </Container>
  );
};
