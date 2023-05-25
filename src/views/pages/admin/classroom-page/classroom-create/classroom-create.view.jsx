import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {ContentContainer} from '../../../../components/containers/content';
import {HeaderV1} from '../../../../components/elements/header-v1';
import {ContainerWithShadow} from '../../../../components/containers/container-with-shadow';
import {Input} from '../../../../components/elements/input/Input';
import {CourseSelect} from '../../schedule-page/schedule-create/components/course-select/course-select.component';
import {RadioGroupV2} from '../../../../components/elements/radio-group-v2/radio-group-v2.component';
import {ButtonV2} from '../../../../components/elements/button-v2';

import {blocks, inputFields, roomOptions} from '../constants';

// styles
import classes from './style.module.scss';
import {useCreateClassroomMutation} from '../../../../../store/api/classroom-api';
import {handleToast} from '../../../../../utils/handle-toast';
import {ToastContainer} from 'react-toastify';

export const ClassroomCreate = () => {
  const [selectedBlock, setSelectedBlock] = useState('');
  const [classroomData, setClassroomData] = useState({
    title: null,
    type: roomOptions[0].value,
    capacity: null,
  });
  
  const navigate = useNavigate();
  
  const [createClassroom] = useCreateClassroomMutation();
  
  const handleBlockChange = (event) => {
    setSelectedBlock(event.target.id);
    setClassroomData({ ...classroomData, block: event.target.id })
  };
  
  const handleSave = async (e) => {
    e.preventDefault();
    console.log(classroomData);
    const data = { ...classroomData, capacity: +classroomData.capacity}
    const result = await createClassroom(data);
    handleToast(
      result,
      'Successfully created!',
      `${result?.error?.data?.message || 'Failed to create!'}`
    )
    console.log(result);
  }
  
  const handleCancel = () => {
    setClassroomData({
      title: null,
      type: roomOptions[0].value,
      capacity: null
    });
    navigate(-1);
  }
  
  const handleInputsChange = (e) => {
    setClassroomData({...classroomData, [e.target.name]: e.target.value });
  }
  
  return (
    <ContentContainer>
      <HeaderV1>
        Creating a new classroom
      </HeaderV1>
      <form className={classes.form_container} onSubmit={handleSave}>
        <ContainerWithShadow style={{width: '50%'}}>
          <div className={classes.container}>
            {
              inputFields.map((field) => (
                <label key={field.id} className={classes.form_label}>
                  {field.label}
                  <Input
                    name={field.name}
                    onChange={handleInputsChange}
                    value={classroomData[field.name]}
                    type={field.type ? field.type : ''}
                    placeholder={field.placeholder} />
                </label>
              ))
            }
            <label className={classes.form_label}>
              Block
              <div className={classes.block_container}>
                {blocks.map((block) => (
                  <CourseSelect
                    type='button'
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
              <RadioGroupV2
                onChange={handleInputsChange}
                value={classroomData.type}
                options={roomOptions}
                name={'type'}
              />
            </label>
            <div className={classes.buttons}>
              <ButtonV2 type='submit'>Save</ButtonV2>
              <ButtonV2 onClick={handleCancel} style={{background: 'white', color: '#cc5092'}}>Cancel</ButtonV2>
            </div>
          </div>
        </ContainerWithShadow>
      </form>
      <ToastContainer />
    </ContentContainer>
  );
};
