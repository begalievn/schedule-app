import React from 'react';
import {ContentContainer} from "../../../../../../components/containers/content";

// styles
import { HeaderV1 } from "../../../../../../components/elements/header-v1";
import {ElementsToOneLine} from "../../../../../../components/containers/elements-to-one-line";
import {ScheduleListTable} from "./components/schedule-list-table";

export const ScheduleListPage = () => {
  return (
    <ContentContainer>
      <HeaderV1>
        Schedule list
      </HeaderV1>
      <ElementsToOneLine style={{ marginBottom: '20px' }}>
        <div>Select</div>
        <button>Create a new Schedule </button>
      </ElementsToOneLine>
      <ScheduleListTable />
    </ContentContainer>
  );
};
