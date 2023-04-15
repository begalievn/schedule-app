//module
import React from 'react';
import {BlockContainer} from '../../../components/containers/block';
import {Container} from '@mui/material';
import {AdminBackButton} from '../../../components/elements/admin-back-button/admin-back-button.element';

export const ClassroomPage = ({ children }) => {
  return (
    <BlockContainer>
      <Container maxWidth={"xl"} style={{ marginTop: '10px' }}>
        <AdminBackButton />
      </Container>
      <Container maxWidth={'xl'} style={{ marginTop: '15px', height: '100%' }}>
        { children }
      </Container>
    </BlockContainer>
  );
};
