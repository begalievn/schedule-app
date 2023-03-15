import { MenuItem } from "@mui/material";
import React from "react";
import { SelectV1 } from "../../../../../../components/elements/select-v1";

import styles from "./teacher_create.module.scss";

const Input = ({ name, labelvalue, type }) => {
  return (
    <label htmlFor={name}>
      <span> {labelvalue}</span>
      <input
        type={type}
        name={name}
      />
    </label>
  );
};

export const TeacherCreate = () => {
  return (
    <div>
      <h2 className={styles.title}>Teacher's personla information</h2>

      <form className={styles.form}>
        <div className={styles.form_photo}>Photo</div>
        <div className={styles.form_first_container}>
          <Input
            labelvalue='First Name'
            name='firstName'
            type='text'
          />
          <Input
            labelvalue='Last Name'
            name='lastName'
            type='text'
          />
          <Input
            labelvalue='Middle Name'
            name='middleName'
            type='text'
          />
          <Input
            labelvalue='Date of Birth'
            name='dateOfBirth'
            type='date'
          />

          <label htmlFor='gender'>
            Gender
            <div className={styles.form_first_container_radio_btn}>
              <span>
                <input
                  type='radio'
                  name='gender'
                  value='male'
                />
                male
              </span>
              <span>
                <input
                  type='radio'
                  name='gender'
                  value='female'
                />
                female
              </span>
            </div>
          </label>
          <Input
            labelvalue='Email'
            name='email'
            type='email'
          />
          <Input
            labelvalue='Address'
            name='address'
            type='text'
          />
          <Input
            labelvalue='Phone number'
            name='phoneNumber'
            type='number'
          />
          <Input
            labelvalue='Work experience'
            name='experiens'
            type='text'
          />
        </div>
        <div className={styles.form_second_container}>
          <SelectV1 selecTitle='Degree'>
            {degrees.map((degree) => (
              <MenuItem
                value={degree.title}
                key={degree.id}
              >
                {degree.title}
              </MenuItem>
            ))}
          </SelectV1>
          <label htmlFor='workinghours'>
            Working hours
            <span>
              <input
                name='workinghours'
                type='radio'
                value='8to13'
              />
              from 8 to 13
            </span>
            <span>
              <input
                name='workinghours'
                type='radio'
                value='13to18'
              />
              from 13 to 18
            </span>
            <span>
              <input
                name='workinghours'
                type='radio'
                value='full'
              />
              full
            </span>
          </label>

          <label>
            Working days
            <div className={styles.form_second_container_checkbox_container}>
              <span>
                Mn
                <input type='checkbox' />
              </span>
              <span>
                Tu
                <input type='checkbox' />
              </span>
              <span>
                We
                <input type='checkbox' />
              </span>
              <span>
                Th
                <input type='checkbox' />
              </span>
              <span>
                Fr
                <input type='checkbox' />
              </span>
              <span>
                Sa
                <input type='checkbox' />
              </span>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

const degrees = [
  {
    id: "1",
    title: "associate degree",
  },
  {
    id: "2",
    title: "bachelor degree",
  },
  {
    id: "3",
    title: "graduate degree",
  },
  {
    id: "4",
    title: "doctorate degree",
  },
];
