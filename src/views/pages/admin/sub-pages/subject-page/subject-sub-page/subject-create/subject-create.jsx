import React, { useState } from 'react';

import { Container, MenuItem } from '@mui/material';

import { RadioV1 } from '../../../../../../components/elements/radio-v1';
import { Input } from '../../../../../../components/elements/input/Input';
import { HeaderV1 } from '../../../../../../components/elements/header-v1';
import { SelectV1 } from '../../../../../../components/elements/select-v1';
import { ContentContainer } from '../../../../../../components/containers/content';
import { AdminBackButton } from '../../../../../../components/elements/admin-back-button/admin-back-button.element';

import { MultiSelect } from '../../../../../../components/elements/multi-select';

import styles from './subject_create.module.scss';
import { useGetAllTeacherQuery } from '../../../../../../../store/api/teacher-api';
import { useCreateSubjectMutation } from '../../../../../../../store/api/subject-api';
import { SelectedItem } from './components/selected-item';

export const SubjectCreate = () => {
  const [subjectValue, setSubjectValue] = useState({
    name: '',
    code: '',
    credits: '',
    courses: null,
    semester: '',
    teachers: null,
    classroom: '',
    description: '',
  });

  const [value, setValue] = React.useState([]);
  const [checked, setChecked] = useState([...checkbox]);

  const { data } = useGetAllTeacherQuery();
  const [sendSubject] = useCreateSubjectMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const filteredCourse = [];
    for (const item of checked) {
      if (item.checked === true) {
        filteredCourse.push(item.id);
      }
    }
    const filteredTecher = [];
    for (const item of value) {
      filteredTecher.push(item._id);
    }

    const newData = {
      ...subjectValue,
      teachers: filteredTecher,
      courses: filteredCourse,
      credits: Number(subjectValue.credits),
    };
    await sendSubject(newData);
  };

  const semesterChange = (value) => {
    setSubjectValue({ ...subjectValue, semester: Number(value) });
  };

  const changeHandler = (e) => {
    setSubjectValue({ ...subjectValue, [e.target.name]: e.target.value });
  };

  const handleChange = (id) => {
    const newItem = checked.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setChecked(newItem);
  };

  const resetHandler = (id) => {
    const filteredValue = value.filter((item) => item._id !== id);
    setValue(filteredValue);
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
              required={true}
              placeholder='Name'
              onChange={changeHandler}
              value={subjectValue.name}
            />
            <Input
              name='code'
              type='text'
              required={true}
              placeholder='Code'
              onChange={changeHandler}
              value={subjectValue.code}
            />
            <Input
              type='number'
              name='credits'
              required={true}
              placeholder='Credits'
              onChange={changeHandler}
              value={subjectValue.credits}
            />
            <SelectV1
              selecTitle='Semester'
              parentfunc={semesterChange}
            >
              <MenuItem value='1'>First Semester</MenuItem>
              <MenuItem value='2'>Second Semester</MenuItem>
            </SelectV1>
            <div className={styles.first_container_radio_group}>
              <h4>Classroom</h4>
              <div>
                {radios.map((radio) => (
                  <RadioV1
                    type='radio'
                    key={radio.id}
                    value={radio.value}
                    required={true}
                    name='classroom'
                    handleChange={changeHandler}
                    checked={subjectValue.classroom === radio.value}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3>Courses</h3>
              <div className={styles.checkbox_container}>
                {checked.map((item) => (
                  <RadioV1
                    id={item.id}
                    key={item.id}
                    type='checkbox'
                    value={item.value}
                    checked={item.checked}
                    handleChange={() => handleChange(item.id)}
                  />
                ))}
              </div>
            </div>
            <textarea
              cols={3}
              rows={5}
              maxLength={250}
              name='description'
              onChange={changeHandler}
              placeholder='Description'
              value={subjectValue.description}
              className={styles.first_container_textarea}
            />
          </div>
          <div className={styles.second_container}>
            <MultiSelect
              label='Choose Teacher'
              value={value}
              options={data || []}
              setValue={setValue}
            />
            <ul className={styles.selected_container}>
              {value.map((item) => (
                <SelectedItem
                  key={item._id}
                  resetHandler={resetHandler}
                  {...item}
                />
              ))}
            </ul>
          </div>
          <button className={styles.subject_form_btn}>add subject</button>
        </form>
      </ContentContainer>
    </Container>
  );
};

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

const checkbox = [
  {
    id: 1,
    value: '1 course',
    checked: false,
  },
  {
    id: 2,
    value: '2 course',
    checked: false,
  },
  {
    id: 3,
    value: '3 course',
    checked: false,
  },
  {
    id: 4,
    value: '4 course',
    checked: false,
  },
];
