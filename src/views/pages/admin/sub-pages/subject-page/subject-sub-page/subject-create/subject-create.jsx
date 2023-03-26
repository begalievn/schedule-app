import React from 'react';

import { Container, MenuItem } from '@mui/material';

import { RadioV1 } from '../../../../../../components/elements/radio-v1';
import { Input } from '../../../../../../components/elements/input/Input';
import { HeaderV1 } from '../../../../../../components/elements/header-v1';
import { SelectV1 } from '../../../../../../components/elements/select-v1';
import { ContentContainer } from '../../../../../../components/containers/content';
import { AdminBackButton } from '../../../../../../components/elements/admin-back-button/admin-back-button.element';

import styles from './subject_create.module.scss';
import { useState } from 'react';

const radios = [
  {
    id: '1',
    value: 'Laboratory',
  },
  {
    id: '2',
    value: 'Lecture',
  },
];

export const SubjectCreate = () => {
  const [subjectValue, setSubjectValue] = useState({
    name: '',
    code: '',
    semester: '',
    classroom: '',
    description: '',
    credits: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = {
      ...subjectValue,
      credits: Number(subjectValue.credits),
    };
    console.table(newData);
  };

  const semesterChange = (value) => {
    setSubjectValue({ ...subjectValue, semester: value });
  };

  const changeHandler = (e) => {
    setSubjectValue({ ...subjectValue, [e.target.name]: e.target.value });
  };

  return (
    <Container
      maxWidth={'xl'}
      style={{ marginTop: '10px' }}
    >
      <AdminBackButton />
      <ContentContainer style={{ paddingBottom: '60px' }}>
        <HeaderV1 style={{ marginTop: '10px' }}>Subject</HeaderV1>
        <form
          onSubmit={handleSubmit}
          className={styles.subject_form}
        >
          <div className={styles.first_container}>
            <Input
              name='name'
              type='text'
              placeholder='Name'
              onChange={changeHandler}
              value={subjectValue.name}
            />
            <Input
              name='code'
              type='text'
              placeholder='Code'
              onChange={changeHandler}
              value={subjectValue.code}
            />
            <Input
              type='number'
              name='credits'
              placeholder='Credits'
              onChange={changeHandler}
              value={subjectValue.credits}
            />
            <Input
              name='description'
              placeholder='Description'
              onChange={changeHandler}
              value={subjectValue.description}
            />

            <SelectV1
              selecTitle='Semester'
              parentfunc={semesterChange}
            >
              <MenuItem value='firstSemester'>First Semester</MenuItem>
              <MenuItem value='seconSemester'>Second Semester</MenuItem>
            </SelectV1>
            <div className={styles.first_container_radio_group}>
              <h4>Classroom</h4>
              <div>
                {radios.map((radio) => (
                  <RadioV1
                    radio={radio}
                    key={radio.id}
                    name='classroom'
                    handleChange={changeHandler}
                    value={subjectValue.classroom}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.second_container}></div>
          <button className={styles.subject_form_btn}>add subject</button>
        </form>
      </ContentContainer>
    </Container>
  );
};
