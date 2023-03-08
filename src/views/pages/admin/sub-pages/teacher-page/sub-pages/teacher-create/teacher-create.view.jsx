import React from "react";

import styles from "./teacher_create.module.scss";

const Input = ({ name, labelvalue, type }) => {
  return (
    <label htmlFor={name}>
      {labelvalue}
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
      <h2>Teacher's personla information</h2>

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
        <div className={styles.form_second_container}></div>
      </form>
    </div>
  );
};
