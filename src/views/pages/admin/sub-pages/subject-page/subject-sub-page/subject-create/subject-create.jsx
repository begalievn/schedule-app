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
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(subjectValue);
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
              type='text'
              name='name'
              onChange={changeHandler}
              value={subjectValue.name}
            />
            <SelectV1
              selecTitle='Semester'
              parentfunc={semesterChange}
            >
              <MenuItem value='firstSemester'>First Semester</MenuItem>
              <MenuItem value='seconSemester'>Second Semester</MenuItem>
            </SelectV1>
            <h4>Classroom</h4>
            <div style={{ display: 'flex', gap: '40px' }}>
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
            <Input
              name='code'
              label='Code'
              onChange={changeHandler}
              value={subjectValue.code}
            />
            <SelectV1 selecTitle='Duration' />
            <Input
              name='description'
              label='Description'
              onChange={changeHandler}
              value={subjectValue.description}
            />
          </div>
          <div className={styles.second_container}></div>
          <button>add subject</button>
        </form>
      </ContentContainer>
    </Container>
  );
};
