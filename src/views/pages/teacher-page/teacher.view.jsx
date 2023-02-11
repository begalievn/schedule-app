import { styled } from "@mui/material";
import React from "react";
import { TeacherForm } from "../../components/teacher";

export const Teacher = () => {
  return (
    <MainContainer>
      <TeacherForm />
      <Container></Container>
    </MainContainer>
  );
};
const MainContainer = styled("div")(() => ({
  width: "100%",
  backgroundColor: "rgba(238, 233, 207, 1)",
  margin: "28px 20px",
  padding: "33px",
  borderRadius: "5px",
}));

const Container = styled("div")(() => ({}));
