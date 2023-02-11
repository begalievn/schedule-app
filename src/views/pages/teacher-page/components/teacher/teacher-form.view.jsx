import React from "react";

import * as Yup from "yup";
import { useFormik } from "formik";
import { styled } from "@mui/material";
import { Input } from "../../../../components/elements/input/Input";
import { Button } from "../../../../components/elements/button/buttont-v1";
import { workingTime } from "./constants/working-time.constant";
import { InputRadio } from "../../../../components/elements/input-v1_type_radio";

const validateScema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  workHours: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("must be"),
});

export const TeacherForm = ({ addTeacher }) => {
  const {
    values,
    errors,
    touched,
    resetForm,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      time: "",
      lastName: "",
      firstName: "",
      workHours: "",
    },
    onSubmit: submitHandler,
    validationSchema: validateScema,
  });

  function submitHandler(values) {
    const newTeacher = {
      time: values.time,
      lastName: values.lastName,
      firstName: values.firstName,
      workHours: values.workHours,
    };

    addTeacher(newTeacher);
    resetForm();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledDiv>
        <StyledLabel htmlFor='firsName'>
          First Name
          <StyledInput
            type='text'
            id='firstName'
            name='firstName'
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.firstName}
            error={errors.firstName}
          />
          {touched.firstName && errors.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
        </StyledLabel>

        <StyledLabel htmlFor='lastName'>
          Last Name
          <StyledInput
            type='text'
            id='lastName'
            name='lastName'
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.lastName}
            error={errors.lastName}
          />
          {touched.lastName && errors.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
        </StyledLabel>

        <StyledLabel htmlFor='workHours'>
          Work hour
          <StyledInput
            type='text'
            id='workHours'
            name='workHours'
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.workHours}
            error={errors.workHours}
          />
          {touched.workHours && errors.workHours ? (
            <div>{errors.workHours}</div>
          ) : null}
        </StyledLabel>
      </StyledDiv>

      <StyledContainer>
        <RadioContainer>
          <InputRadio
            name='time'
            values={values.time}
            timeTitle='After Lunch'
            handleChange={handleChange}
            workingTime={workingTime.AFTER}
          />
          <InputRadio
            name='time'
            values={values.time}
            timeTitle='Before Lunch'
            handleChange={handleChange}
            workingTime={workingTime.BEFORE}
          />
          <InputRadio
            name='time'
            values={values.time}
            timeTitle='Full'
            handleChange={handleChange}
            workingTime={workingTime.FULL}
          />
        </RadioContainer>
        <Button type='submit'>Create Teacher</Button>
      </StyledContainer>
    </StyledForm>
  );
};

const StyledForm = styled("form")(() => ({
  backgroundColor: "rgba(217, 217, 217, 1)",
  display: "flex",
  alignItems: "center",
  padding: "18px 80px 18px 18px",
  borderRadius: "5px",
  justifyContent: "space-between",
}));

const StyledInput = styled(Input)(() => ({
  maxWidth: "450px",
  WebkitBoxShadow: "5px 5px 5px -5px rgba(34, 60, 80, 0.57)",
  MozBoxShadow: "5px 5px 5px -5px rgba(34, 60, 80, 0.57)",
  boxShadow: "5px 5px 5px -5px rgba(34, 60, 80, 0.57)",
  borderRadius: "4px",
  "& .input": {
    borderRadius: "4px",
  },
}));

const StyledLabel = styled("label")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const StyledDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "50%",
  gap: "10px",
}));

const RadioContainer = styled("div")(() => ({
  display: "flex",
  height: "100%",
  width: "59%",
  justifyContent: "space-between",
}));

const StyledContainer = styled("div")(() => ({
  display: "flex",
  width: "50%",
  height: "209px",
  paddingTop: "18px",
  "& button": {
    alignSelf: "flex-end",
    fontWeight: 600,
    letterSpacing: 2,
    fontSize: "1.2rem",
  },
}));
