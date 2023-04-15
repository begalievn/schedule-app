import React, {useState} from 'react';
import {ContentContainer} from '../../../../components/containers/content';
import {HeaderV1} from '../../../../components/elements/header-v1';
import {ContainerWithShadow} from '../../../../components/containers/container-with-shadow';
import {Input} from '../../../../components/elements/input/Input';

// styles
import classes from './style.module.scss';
import {CourseSelect} from '../../schedule-page/schedule-create/components/course-select/course-select.component';
import {RadioGroupV2} from '../../../../components/elements/radio-group-v2/radio-group-v2.component';
import {ButtonV2} from '../../../../components/elements/button-v2';

const inputFields = [
  {
    id: 1,
    name: 'title',
    label: 'Title'
  },
  {
    id: 2,
    name: 'capacity',
    label: 'Capacity'
  }
];

const blocks = [
  {
    id: 'A',
    title: 'A',
  },
  {
    id: 'B',
    title: 'B',
  },
  {
    id: 'C',
    title: 'C',
  },
  {
    id: 'D',
    title: 'D',
  },
  {
    id: 'E',
    title: 'E',
  }
];

const roomOptions = [
  {
    id: 1,
    label: 'Laboratory',
    value: 'LAB',
  },
  {
    id: 2,
    label: 'Lecture',
    value: 'LECTURE',
  }
]


export const ClassroomCreate = () => {
  const [selectedBlock, setSelectedBlock] = useState('');
  const [classroomData, setClassroomData] = useState({});
  
  const handleBlockChange = (event) => {
    event.preventDefault();
    setSelectedBlock(event.target.id);
    setClassroomData({ ...classroomData, block: event.target.id })
    
  };
  
  const handleSave = (e) => {
    e.preventDefault();
    console.log(classroomData);
  }
  
  const handleInputsChange = (e) => {
    setClassroomData({...classroomData, [e.target.name]: e.target.value});
  }
  
  return (
    <ContentContainer>
      <HeaderV1>
        Creating a new classroom
      </HeaderV1>
      <form className={classes.form_container}>
        <ContainerWithShadow style={{width: '50%'}}>
          <div className={classes.container}>
            {
              inputFields.map((field) => (
                <label key={field.id} className={classes.form_label}>
                  {field.label}
                  <Input name={field.name} onChange={handleInputsChange} placeholder={field.label} />
                </label>
              ))
            }
            <label className={classes.form_label}>
              Block
              <div className={classes.block_container}>
                {blocks.map((block) => (
                  <CourseSelect
                    id={block.id}
                    key={block.id}
                    title={block.title}
                    onChange={handleBlockChange}
                    selected={block.id === selectedBlock}
                    style={{ width: '42px' }}
                  />
                ))}
              </div>
            </label>
            <label className={classes.form_label}>
              Type
              <RadioGroupV2 onChange={handleInputsChange} options={roomOptions} name={'type'} />
            </label>
            <div className={classes.buttons}>
              <ButtonV2 onClick={handleSave}>Save</ButtonV2>
              <ButtonV2 style={{background: 'white', color: '#cc5092'}}>Delete</ButtonV2>
            </div>
          </div>
        </ContainerWithShadow>
      </form>
    </ContentContainer>
  );
};
