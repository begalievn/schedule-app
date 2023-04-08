//modules
import React from 'react';
import {BlockContainer} from '../../../../components/containers/block';
import {AdminBackButton} from '../../../../components/elements/admin-back-button/admin-back-button.element';
import {Container} from '@mui/material';

// styles
// import classes from './style.scss';

export const Teacher = ({ children }) => {
  return (
    <BlockContainer>
      <Container maxWidth={"xl"} style={{ marginTop: '10px' }}>
        <AdminBackButton />
      </Container>
      <Container maxWidth={"xl"} style={{ marginTop: '10px' }}>
        { children }
      </Container>
    </BlockContainer>
    
  );
};
