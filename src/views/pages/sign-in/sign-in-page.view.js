import { styled } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { ApplicationLoginForm } from "../../components/application-login-form/application.login.form";
import { Button } from "../../components/UI/button/Button";
import { Input } from "../../components/UI/input/Input";

export const SignIn = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <ApplicationLoginForm>
      <StyledForm onSubmit={submitHandler}>
        <StyledInput
          type='email'
          label='Login'
        />
        <StyledInput
          type='password'
          label='Password'
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <StyledButton>Sign In</StyledButton>
          <StyledNavlink to='/signUp'>
            <SignUpButton>or Sign Up </SignUpButton>
          </StyledNavlink>
        </div>
      </StyledForm>
    </ApplicationLoginForm>
  );
};

const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "60%",
  gap: "50px",
}));

const StyledInput = styled(Input)(() => ({
  "& .MuiFormLabel-root": {
    fontSize: "20px",
    fontWeight: 500,
    top: -10,
    left: -12,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    left: "6px",
    top: 0,
    fontSize: "14px",
    color: "#AFAFAF",
  },
}));

const StyledButton = styled(Button)(() => ({
  width: "35%",
  alignSelf: "end ",
}));

const SignUpButton = styled(StyledButton)(() => ({
  background: "red",
  width: "39%",
}));

const StyledNavlink = styled(NavLink)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  textDecoration: "none",
}));
