import React from 'react';
import {Container} from '@mui/material';
import {AdminBackButton} from '../../../components/elements/admin-back-button/admin-back-button.element';
import {BlockContainer} from '../../../components/containers/block';

export const SubjectPage = ({ children }) => {
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
