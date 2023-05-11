import React from 'react';

import { styled } from '@mui/material';
import alatoofoto from '../../../assets/images/alatoo3.jpeg';

import { GoogleIcon } from '../../../assets/logos';

export const ApplicationLoginForm = ({ children }) => {
  return (
    <MainContainer>
      <SignInContainer>
        <StyledTitle>Sign In</StyledTitle>
        {children}
      </SignInContainer>
    </MainContainer>
  );
};

const MainContainer = styled('div')(() => ({
  height: '100vh',
  backgroundImage: `url(${alatoofoto})`,
  backgroundRepeat: 'repeat',
  backgroundSize: 'cover',
  width: '100%',
}));

const SignInContainer = styled('div')(() => ({
  width: '50%',
  height: '100vh',
  background: 'rgba(244,249,255,0.6)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledTitle = styled('h1')(() => ({
  fontWeight: '700',
  fontSize: '36px',
  marginBottom: '41px',
}));
