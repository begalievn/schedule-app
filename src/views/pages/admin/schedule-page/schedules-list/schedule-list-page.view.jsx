import React, { useState } from 'react';
import {ContentContainer} from "../../../../components/containers/content";
import { HeaderV1 } from "../../../../components/elements/header-v1";
import { ElementsToOneLine } from "../../../../components/containers/elements-to-one-line";
import { ScheduleListTable } from "./components/schedule-list-table";
import { SelectV1 } from "../../../../components/elements/select-v1";
import { ButtonV2 } from "../../../../components/elements/button-v2";
import { ContainerWithShadow } from '../../../../components/containers/container-with-shadow';
import { useGetSchedulesQuery } from '../../../../../store/api/schedule-api';
import {ContainerWithLoader} from '../../../../components/containers/container-with-loader';

// styles
import classes from './style.module.scss';
import {semesters} from './constants';
import {useNavigate} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

export const ScheduleListPage = () => {
  const [semester, setSemester] = useState(1);
  const navigate = useNavigate()
  
  const { data, isLoading } = useGetSchedulesQuery({ semester }, { refetchOnMountOrArgChange: true });
  
  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  }
  
  const handleCreateNewSchedule = () => {
    navigate('create')
  }
  
  return (
    <ContentContainer style={{ marginBottom: '40px' }}>
      <HeaderV1>
        Schedule list
      </HeaderV1>
      <ElementsToOneLine style={{justifyContent: 'space-between', marginBottom: '30px'}}>
        <div className={classes.buttons_container}>
          <SelectV1 selectTitle={'Semester'} options={semesters} value={semester} onChange={handleSemesterChange} />
        </div>
        <div>
          <ButtonV2 onClick={ handleCreateNewSchedule }>Create a new schedule</ButtonV2>
        </div>
      </ElementsToOneLine>
      <ContainerWithShadow>
        {
          isLoading ?
            <ContainerWithLoader style={{ height: '440px' }} />
            :
            <ScheduleListTable data={data} />
        }
      </ContainerWithShadow>
      <ToastContainer />
    </ContentContainer>
  );
};
