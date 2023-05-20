import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {ContentContainer} from '../../../../components/containers/content';
import {HeaderV1} from '../../../../components/elements/header-v1';
import {ContainerWithShadow} from '../../../../components/containers/container-with-shadow';
import {Input} from '../../../../components/elements/input/Input';
import {ButtonV2} from '../../../../components/elements/button-v2';
import {handleToast} from '../../../../../utils/handle-toast';

// apis
import { useCreateGroupMutation } from '../../../../../store/api/group-api';

// styles
import classes from './style.module.scss';
import {ToastContainer} from 'react-toastify';

const inputFields = [
  {
    id: 1,
    name: 'name',
    label: 'Title',
    placeholder: 'COM19',
  },
  {
    id: 2,
    name: 'year',
    label: 'Year',
    placeholder: '2',
    type: 'number',
  },
  {
    id: 3,
    name: 'studentsCount',
    label: 'Students count',
    placeholder: '40',
    type: 'number',
  }
]

export const GroupCreate = () => {
  const [groupData, setGroupData] = useState({});
  
  const navigate = useNavigate();
  const [createGroup, { isLoading }] = useCreateGroupMutation();
  
  const handleInputChange = (e) => {
    setGroupData({...groupData, [e.target.name]: e.target.value });
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...groupData };
    data.year = +data.year;
    data.studentsCount = +data.studentsCount;
    const result = await createGroup(data);
    handleToast(
      result,
      'Successfully created!',
      'Creation failed!'
    )
  }
  
  const handleCancel = (e) => {
    e.preventDefault();
    setGroupData({});
    navigate(-1);
  }
  
  return (
    <ContentContainer style={{marginBottom: '50px' }}>
      <HeaderV1>Group's information</HeaderV1>
      <form onSubmit={handleSubmit} className={classes.form_container}>
        <ContainerWithShadow style={{width: '50%'}}>
          <div className={classes.container}>
            {
              inputFields.map((field) => (
                <label key={field.id} className={classes.form_label}>
                  {field.label}
                  <Input
                    name={field.name}
                    placeholder={field.placeholder}
                    type={field.type ? field.type : ''}
                    onChange={handleInputChange}
                  />
                </label>
              ))
            }
            <div className={classes.buttons}>
              <ButtonV2 disabled={isLoading} type='submit'>Save</ButtonV2>
              <ButtonV2 onClick={handleCancel} style={{background: 'white', color: '#cc5092'}}>Cancel</ButtonV2>
            </div>
          </div>
        </ContainerWithShadow>
      </form>
      <ToastContainer />
    </ContentContainer>
  );
};
