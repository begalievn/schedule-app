import React, {useEffect, useState} from 'react';
import { ToastContainer } from 'react-toastify';
import {useNavigate, useParams} from 'react-router-dom';

import {ContentContainer} from '../../../../components/containers/content';
import {HeaderV1} from '../../../../components/elements/header-v1';
import {ContainerWithShadow} from '../../../../components/containers/container-with-shadow';
import {Input} from '../../../../components/elements/input/Input';
import {ButtonV2} from '../../../../components/elements/button-v2';
import {ContainerWithLoader} from '../../../../components/containers/container-with-loader';
import {AlertDialog} from '../../../../components/elements/alert-dialog';
import {handleToast} from '../../../../../utils/handle-toast';

// apis
import {
  useDeleteGroupByIdMutation,
  useGetGroupByIdQuery,
  useUpdateGroupMutation
} from '../../../../../store/api/group-api';

// styles
import classes from './style.module.scss';

const inputFields = [
  {
    id: 1,
    name: 'name',
    label: 'Name',
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

export const GroupUpdate = () => {
  const [groupData, setGroupData] = useState({
    name: '',
    year: null,
    studentsCount: null,
  });
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  
  
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  
  const { data: groupById, isLoading } = useGetGroupByIdQuery(id);
  
  const [updateGroup] = useUpdateGroupMutation();
  const [deleteGroup] = useDeleteGroupByIdMutation();
  
  console.log(groupById);
  
  const handleInputChange = (e) => {
    setGroupData({...groupData, [e.target.name]: e.target.value });
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...groupData };
    data.year = +data.year;
    data.studentsCount = +data.studentsCount;
    const result = await updateGroup({ id, body: data });
    handleToast(
      result,
      'Successfully updated!',
      'Update failed!'
    )
  }
  
  const handleOpenConfirmModal = () => {
    setOpenConfirmModal(true);
  }
  
  const handelCloseConfirmModal = () => {
    setOpenConfirmModal(false);
  }
  
  const handleDelete = async (e) => {
    e.preventDefault();
    handelCloseConfirmModal();
    const result = await deleteGroup(id);
    handleToast(
      result,
      'Successfully deleted!',
      'Delete failed!')
    setTimeout(() => {
      navigate(-1);
    })
  }
  
  useEffect(() => {
    setGroupData({ ...groupById });
  }, [groupById]);
  
  return (
    <ContentContainer style={{marginBottom: '50px' }}>
      <HeaderV1>Group's information</HeaderV1>
      {
        isLoading ? <ContainerWithLoader style={{ height: '400px' }} /> :
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
                        value={groupData[field.name]}
                      />
                    </label>
                  ))
                }
                <div className={classes.buttons}>
                  <ButtonV2 type='submit'>Update</ButtonV2>
                  <ButtonV2 onClick={handleOpenConfirmModal} style={{background: 'white', color: '#cc5092'}}>Delete</ButtonV2>
                </div>
              </div>
            </ContainerWithShadow>
          </form>
      }
      <AlertDialog
        open={openConfirmModal}
        handleAction={handleDelete}
        handleClose={handelCloseConfirmModal}
        title={'Are your sure, you want to delete a group?'}
        content={'Group will be deleted permanently!'}
      />
      <ToastContainer />
    </ContentContainer>
  );
};
