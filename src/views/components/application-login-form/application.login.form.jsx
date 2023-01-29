import React from "react";

import { styled } from "@mui/material";
import alatoofoto from "../../../assets/images/alatoo.png";

import { GoogleIcon } from "../../../assets/logos";

export const ApplicationLoginForm = ({ children }) => {
  return (
    <MainContainer>
      <SignInContainer>
        <StyledTitle>Sign In</StyledTitle>
        <GoogleContainer>
          <GoogleIcon />
          Sign in with Google
        </GoogleContainer>

        {children}
      </SignInContainer>
    </MainContainer>
  );
};

const MainContainer = styled("div")(() => ({
  height: "100vh",
  backgroundImage: `url(${alatoofoto})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

const SignInContainer = styled("div")(() => ({
  width: "45%",
  height: "100vh",
  background: "rgba(252, 245, 229, 0.2)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledTitle = styled("h1")(() => ({
  fontWeight: "700",
  fontSize: "36px",
  marginBottom: "41px",
}));

const GoogleContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: "#ffffff",
  borderRadius: "5px",
  gap: "28px",
  padding: "12px 50px 12px 43px",
  fontWeight: 600,
  fontSize: "24px",
  color: " #555B53",
  marginBottom: "45px",
}));
