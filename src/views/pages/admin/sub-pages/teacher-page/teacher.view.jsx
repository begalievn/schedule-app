import { styled } from "@mui/material";
import React from "react";
import { useState } from "react";
import { TeacherForm } from "./components/teacher";

export const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  const addTeacherHandler = (data) => {
    console.log(data);
    const newTeacher = [...teachers, data];

    setTeachers(newTeacher);
  };
  console.log(teachers);
  return (
    <MainContainer>
      <TeacherForm addTeacher={addTeacherHandler} />
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
