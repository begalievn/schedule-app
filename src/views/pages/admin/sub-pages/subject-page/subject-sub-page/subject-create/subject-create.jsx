import React from 'react';

import { Container } from '@mui/material';

import { RadioV1 } from '../../../../../../components/elements/radio-v1';
import { Input } from '../../../../../../components/elements/input/Input';
import { HeaderV1 } from '../../../../../../components/elements/header-v1';
import { SelectV1 } from '../../../../../../components/elements/select-v1';
import { ContentContainer } from '../../../../../../components/containers/content';
import { AdminBackButton } from '../../../../../../components/elements/admin-back-button/admin-back-button.element';

import styles from './subject_create.module.scss';

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
  const [value, setValue] = React.useState('Laboratory');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container
      maxWidth={'xl'}
      style={{ marginTop: '10px' }}
    >
      <AdminBackButton />
      <ContentContainer style={{ paddingBottom: '60px' }}>
        <HeaderV1 style={{ marginTop: '10px' }}>Subject</HeaderV1>
        <form className={styles.subject_form}>
          <div className={styles.first_container}>
            <SelectV1 selecTitle='Name' />
            <SelectV1 selecTitle='Semester' />
            <h4>Classroom</h4>
            <div style={{ display: 'flex', gap: '40px' }}>
              {radios.map((radio) => (
                <RadioV1
                  radio={radio}
                  handleChange={handleChange}
                  value={value}
                  key={radio.id}
                />
              ))}
            </div>
            <Input label='Code' />
            <SelectV1 selecTitle='Duration' />
            <Input label='Description' />
          </div>
          <div className={styles.second_container}></div>
        </form>
      </ContentContainer>
    </Container>
  );
};
