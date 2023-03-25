import { Container } from '@mui/material';

import { persistor } from '../../../store/store';

const loggedOut = () => {
  persistor.purge();
};

export const StartPage = () => {
  return (
    <Container maxWidth='xl'>
      <h2>Start Page</h2>
      <button onClick={loggedOut}>log out</button>
    </Container>
  );
};
