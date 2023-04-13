import React from "react";
import {Input} from '../../../../../../components/elements/input/Input';
import {HeaderV1} from '../../../../../../components/elements/header-v1';
import {ContentContainer} from '../../../../../../components/containers/content';
import {DatePickerV2} from '../../../../../../components/elements/date-picker-v2';
import {ContainerWithShadow} from '../../../../../../components/containers/container-with-shadow';
import {RadioGroupV2} from '../../../../../../components/elements/radio-group-v2/radio-group-v2.component';
import {SelectV1} from '../../../../../../components/elements/select-v1';
import {CheckBoxV2} from '../../../../../../components/elements/check-box-v2';

// styles
import classes from "./teacher_create.module.scss";

export const TeacherCreate = () => {
  return (
    <ContentContainer style={{marginBottom: '50px'}}>
      <HeaderV1>Teacher's information</HeaderV1>
      <form>
        <div className={classes.form_container}>
          <ContainerWithShadow>
            <div className={classes.first_container}>
              <label className={classes.form_label}>
                First name
                <Input placeholder={'First name'}/>
              </label>
              
              <label className={classes.form_label}>
                Last name
                <Input placeholder={'Last name'}/>
              </label>
              
              <lable className={classes.form_label}>
                Birth date
                <DatePickerV2/>
              </lable>
              <label className={classes.form_label}>
                Gender
                <RadioGroupV2 />
              </label>
              <label className={classes.form_label}>
                Email
                <Input placeholder={'Email'}/>
              </label>
              <label className={classes.form_label}>
                Address
                <Input placeholder={'Address'}/>
              </label>
              <label className={classes.form_label}>
                Phone number
                <Input placeholder={'Phone number'}/>
              </label>
              <label className={classes.form_label}>
                Work experience
                <Input placeholder={'Work experience'}/>
              </label>
              
            </div>
          </ContainerWithShadow>
          <ContainerWithShadow style={{background: '#E5EFFE'}}>
            <div className={classes.first_container}>
              <label className={classes.form_label}>
                Degree
                <SelectV1 />
              </label>
              <label className={classes.form_label}>
                Working hours
                <RadioGroupV2 />
              </label>
              <label className={classes.form_label}>
                Working days
                <div className={classes.check_box_container}>
                  <CheckBoxV2 />
                  <CheckBoxV2 />
                  <CheckBoxV2 />
                </div>
              </label>
            </div>
          </ContainerWithShadow>
        </div>
      </form>
    </ContentContainer>
  );
};
