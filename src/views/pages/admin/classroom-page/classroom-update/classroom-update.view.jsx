import React, {useEffect, useState} from 'react';

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
import {
  useDeleteClassroomMutation,
  useGetClassroomByIdQuery,
  useUpdateClassroomMutation
} from '../../../../../store/api/classroom-api';
import {useNavigate, useParams} from 'react-router-dom';
import {ContainerWithLoader} from '../../../../components/containers/container-with-loader';
import {handleToast} from '../../../../../utils/handle-toast';
import {ToastContainer} from 'react-toastify';
import {AlertDialog} from '../../../../components/elements/alert-dialog';

export const ClassroomUpdate = () => {
  const [classroomData, setClassroomData] = useState({
    title: null,
    type: roomOptions[0].value,
    capacity: null,
  });
  const [selectedBlock, setSelectedBlock] = useState('');
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  
  const { data: classroomById, isLoading } = useGetClassroomByIdQuery(id);
  const [updateClassroom] = useUpdateClassroomMutation();
  const [deleteClassroom] = useDeleteClassroomMutation();
  
  const handleBlockChange = (event) => {
    event.preventDefault();
    setSelectedBlock(event.target.id);
    setClassroomData({ ...classroomData, block: event.target.id })
  };
  
  const handeOpenConfirmModal = () => {
    setOpenConfirmModal(true);
  }
  
  const handleCloseConfirmModal = () => {
    setOpenConfirmModal(false);
  }
  
  const handleDelete = async () => {
    handleCloseConfirmModal();
    const result = await deleteClassroom(id);
    handleToast(
      result,
      'Successfully deleted!',
      `${result?.error?.data?.message || 'Failed to delete!'}`,
      2000
    );
    setTimeout(() => {
      navigate(-1);
    }, 3001);
  }
  
  const handleSave = async (e) => {
    e.preventDefault();
    const data = {
      ...classroomData,
      capacity: +classroomData.capacity,
    }
    const result = await updateClassroom({ id, body: data });
    handleToast(
      result,
      'Successfully updated!',
      `${result?.error?.data?.message} || Updated failed!`
    )
    console.log(result);
  }
  
  const handleInputsChange = (e) => {
    setClassroomData({...classroomData, [e.target.name]: e.target.value });
  }
  
  useEffect(() => {
    setClassroomData({
      ...classroomById
    });
    setSelectedBlock(classroomById?.block);
  }, [classroomById])
  
  return (
    <ContentContainer>
      <HeaderV1>
        Update a classroom
      </HeaderV1>
      {
        isLoading ? <ContainerWithLoader style={{ height: '400px' }} /> :
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
                        placeholder={field.placeholder}
                        value={classroomData[field.name]}
                        type={field.type ? field.type : ''}
                      />
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
                  <RadioGroupV2 onChange={handleInputsChange} value={classroomData.type} options={roomOptions} name={'type'} />
                </label>
                <div className={classes.buttons}>
                  <ButtonV2 type='submit'>Save</ButtonV2>
                  <ButtonV2 onClick={handeOpenConfirmModal} style={{background: 'white', color: '#cc5092'}}>Delete</ButtonV2>
                </div>
              </div>
            </ContainerWithShadow>
          </form>
      }
      <ToastContainer />
      <AlertDialog
        open={openConfirmModal}
        handleAction={handleDelete}
        handleClose={handleCloseConfirmModal}
        title={'Are your sure, you want to delete a classroom?'}
        content={'Classroom will be deleted permanently!'}
      />
    </ContentContainer>
  );
};
