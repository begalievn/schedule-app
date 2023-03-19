import React from 'react';
import {ContentContainer} from "../../../../../../components/containers/content";
import { HeaderV1 } from "../../../../../../components/elements/header-v1";
import {ElementsToOneLine} from "../../../../../../components/containers/elements-to-one-line";
import {ScheduleListTable} from "./components/schedule-list-table";

// styles
import classes from './style.module.scss';
import {useNavigate} from "react-router-dom";
import { SelectV1 } from "../../../../../../components/elements/select-v1";
import { ButtonV2 } from "../../../../../../components/elements/button-v2";

export const ScheduleListPage = () => {
  const navigate = useNavigate();
  
  const handleCreateNewSchedule = () => {
    navigate('create')
  }
  
  return (
    <ContentContainer>
      <ElementsToOneLine style={{justifyContent: 'space-between', marginBottom: '30px'}}>
        <HeaderV1>
          Schedule list
        </HeaderV1>
        <div className={classes.buttons_container}>
          <SelectV1 />
          <ButtonV2 onClick={ handleCreateNewSchedule }>Create a new schedule</ButtonV2>
        </div>
      </ElementsToOneLine>
      
      <ScheduleListTable />
    </ContentContainer>
  );
};
