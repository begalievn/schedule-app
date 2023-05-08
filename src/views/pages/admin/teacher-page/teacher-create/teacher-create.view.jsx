import React, {Fragment, useState} from "react";
import {Input} from '../../../../components/elements/input/Input';
import {HeaderV1} from '../../../../components/elements/header-v1';
import {ContentContainer} from '../../../../components/containers/content';
import {DatePickerV2} from '../../../../components/elements/date-picker-v2';
import {ContainerWithShadow} from '../../../../components/containers/container-with-shadow';
import {RadioGroupV2} from '../../../../components/elements/radio-group-v2/radio-group-v2.component';
import {CheckBoxV2} from '../../../../components/elements/check-box-v2';
import {ButtonV2} from '../../../../components/elements/button-v2';

// styles
import classes from "./teacher_create.module.scss";
import {useCreateTeacherMutation} from '../../../../../store/api/teacher-api';
import {genderOptions, inputFields, workDays, workingHoursOptions} from '../constants';

export const TeacherCreate = () => {
  const [teacherData, setTeacherData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    address: '',
    phoneNumber: '',
    experience: '',
    workingGraphic: workingHoursOptions.FULL,
  });
  const [birthDate, setBirthDate] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);
  
  const [createTeacher, { data} ] = useCreateTeacherMutation();
  
  console.log(teacherData);
  
  const handleBirthdayChange = (event) => {
    console.log(event.$d.toLocaleString());
  }
  
  console.log({ birthDate });
  
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
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      ...teacherData,
      workingDays: selectedDays
    }
    const result = await createTeacher(data);
    console.log(result);
  }
  
  return (
    <ContentContainer style={{marginBottom: '50px'}}>
      <HeaderV1>Teacher's information</HeaderV1>
      <form onSubmit={handleSubmit}>
        <div className={classes.form_container}>
          <ContainerWithShadow>
            <div className={classes.first_container}>
              {
                inputFields.map((field) => (
                  <label key={field.id} className={classes.form_label}>
                    {field.label}
                    <Input name={field.name} onChange={handleInputsChange} placeholder={field.label}/>
                  </label>
                ))
              }
              <label className={classes.form_label}>
                Birth date
                <DatePickerV2 onChange={handleBirthdayChange} />
              </label>
            </div>
          </ContainerWithShadow>
          <ContainerWithShadow style={{background: '#E5EFFE'}}>
            <div className={classes.first_container}>
              <label className={classes.form_label}>
                Gender
                <RadioGroupV2 onChange={handleInputsChange} name={'gender'} options={genderOptions} />
              </label>
              <label className={classes.form_label}>
                Working graphic
                <RadioGroupV2 onChange={handleInputsChange} name={'workingGraphic'} options={workingHoursOptions} />
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
                <ButtonV2 type="submit">Save</ButtonV2>
                <ButtonV2 style={{background: 'white', color: '#cc5092'}}>Delete</ButtonV2>
              </div>
            </div>
          </ContainerWithShadow>
        </div>
      </form>
    </ContentContainer>
  );
};
