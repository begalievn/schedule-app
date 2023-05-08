import React, {Fragment, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import * as dayjs from 'dayjs';

import {Input} from '../../../../components/elements/input/Input';
import {HeaderV1} from '../../../../components/elements/header-v1';
import {ContentContainer} from '../../../../components/containers/content';
import {DatePickerV2} from '../../../../components/elements/date-picker-v2';
import {ContainerWithShadow} from '../../../../components/containers/container-with-shadow';
import {RadioGroupV2} from '../../../../components/elements/radio-group-v2/radio-group-v2.component';
import {CheckBoxV2} from '../../../../components/elements/check-box-v2';
import {ButtonV2} from '../../../../components/elements/button-v2';
import {AlertDialog} from '../../../../components/elements/alert-dialog';

import {
  useGetTeacherByIdQuery,
  useUpdateTeacherMutation,
  useDeleteTeacherByIdMutation,
} from '../../../../../store/api/teacher-api';

import {genderOptions, inputFields, workDays, workingHoursOptions} from '../constants';

// styles
import 'react-toastify/dist/ReactToastify.css';
import classes from "./style.module.scss";
import {ContainerWithLoader} from '../../../../components/containers/container-with-loader';

export const TeacherUpdate = () => {
  const [teacherData, setTeacherData] = useState({
    firstName: '',
    lastName: '',
    birthday: null,
    email: '',
    address: '',
    gender: genderOptions[0].value,
    phone: '',
    experience: '',
    workingDays: [],
    workingGraphic: workingHoursOptions[0].value,
  });
  const [selectedDays, setSelectedDays] = useState([]);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  
  const params = useParams();
  
  const { data: teacherById, isLoading } = useGetTeacherByIdQuery(params.id, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    skip: false,
  });
  
  const [updateTeacher] = useUpdateTeacherMutation();
  const [deleteTeacher, { isSuccess: isTeacherDeleteSuccess, isError: isTeacherDeleteError }] = useDeleteTeacherByIdMutation();
  
  const handleBirthdayChange = (event) => {
    const value = dayjs(event);
    setTeacherData({...teacherData, birthday: value});
  }
  
  const handleDaySelect = (value) => {
    value = Number(value);
    if (selectedDays.includes(value)) {
      setSelectedDays(selectedDays.filter((day) => day !== value));
    } else {
      setSelectedDays([...selectedDays, value]);
    }
  }
  
  const handleInputsChange = (e) => {
    setTeacherData({...teacherData, [e.target.name]: e.target.value});
  }
  
  const handleToast = (result) => {
    if (result.data) {
      toast.success('Successfully updated!', {
        autoClose: 3000,
      });
    } else if (result.error) {
      toast.error('Update failed!', {
        autoClose: 3000,
      })
    } else {
    
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const birthdayValue = dayjs(teacherData?.birthday || null).toDate();
    
    const body = JSON.parse(JSON.stringify({
      ...teacherData,
      birthday: birthdayValue,
      workingDays: selectedDays,
    }));
    
    const result = await updateTeacher({ id: params?.id, body});
    handleToast(result);
  }
  
  const handeOpenConfirmModal = () => {
    setOpenConfirmModal(true);
  }
  
  const handelCloseConfirmModal = () => {
    setOpenConfirmModal(false);
  }
  
  const handleDeleteTeacher = async () => {
    const result = await deleteTeacher(params.id);
    if (isTeacherDeleteSuccess) {
      toast.success('Successfully deleted!', {
        autoClose: 3000,
      })
    } else if (isTeacherDeleteError) {
      toast.error('Deleting failed!', {
        autoClose: 3000,
      })
    }
    console.log('delete result', result);
  }
  
  useEffect(() => {
    const birthdayValue = dayjs(teacherById?.birthday || null);
    setTeacherData({
      ...teacherById,
      birthday: birthdayValue,
      workingDays: [...teacherById?.workingDays || []],
    })
    setSelectedDays([...teacherById?.workingDays || []]);
  }, [teacherById]);
  
  return (
    <ContentContainer style={{marginBottom: '50px'}}>
      <HeaderV1>Teacher update</HeaderV1>
      {
        isLoading ? <ContainerWithLoader style={{ height: '500px' }}/> :
          <form onSubmit={handleSubmit}>
            <div className={classes.form_container}>
              <ContainerWithShadow>
                <div className={classes.first_container}>
                  {
                    inputFields.map((field) => (
                      <label key={field.id} className={classes.form_label}>
                        {field.label}
                        <Input name={field.name} value={teacherData[field.name]} onChange={handleInputsChange} placeholder={field.label}/>
                      </label>
                    ))
                  }
                  <label className={classes.form_label}>
                    Birth date
                    <DatePickerV2 value={teacherData.birthday} onChange={handleBirthdayChange} />
                  </label>
                </div>
              </ContainerWithShadow>
              <ContainerWithShadow style={{background: '#E5EFFE'}}>
                <div className={classes.first_container}>
                  <label className={classes.form_label}>
                    Gender
                    <RadioGroupV2 onChange={handleInputsChange} value={teacherData.gender} name={'gender'} options={genderOptions} />
                  </label>
                  <label className={classes.form_label}>
                    Working graphic
                    <RadioGroupV2 onChange={handleInputsChange} value={teacherData.workingGraphic} name={'workingGraphic'} options={workingHoursOptions} />
                  </label>
                  <label className={classes.form_label}>
                    Working days
                    <div className={classes.check_box_container}>
                      {
                        workDays.map((day) => (
                          <Fragment key={day.day}>
                            <CheckBoxV2 label={day.day} checked={selectedDays.includes(day.value)} value={day.value} handleChange={handleDaySelect} />
                          </Fragment>
                        ))
                      }
                    </div>
                  </label>
                  <div className={classes.buttons}>
                    <ButtonV2 type="submit">Update</ButtonV2>
                    <ButtonV2 onClick={handeOpenConfirmModal} style={{background: 'white', color: '#cc5092'}}>Delete</ButtonV2>
                  </div>
                </div>
              </ContainerWithShadow>
            </div>
          </form>
      }
      
      <AlertDialog
        open={openConfirmModal}
        handleAction={handleDeleteTeacher}
        handleClose={handelCloseConfirmModal}
      />
      <ToastContainer />
    </ContentContainer>
  );
};
