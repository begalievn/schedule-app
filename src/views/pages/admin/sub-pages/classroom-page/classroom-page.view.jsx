//module
import React from 'react';

import { Input } from '../../../../components/elements/input/Input';
import { HeaderV1 } from '../../../../components/elements/header-v1';
import { ContentContainer } from '../../../../components/containers/content';

import { ClassroomListTable } from './components/classroom-page-table';
import { Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';

//component
export const ClassroomPage = () => {
  return (
    <ContentContainer>
      <HeaderV1>Classroom </HeaderV1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '48px',
        }}
      >
        <Input
          style={{ width: '35%' }}
          placeholder='Search'
          icon={<SearchIcon />}
        />
        <Input
          style={{ width: '35%' }}
          placeholder='Add classroom'
          icon={<AddIcon />}
        />
      </div>
      <ClassroomListTable />
    </ContentContainer>
  );
};
