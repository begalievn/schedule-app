//module
import React from 'react';

import { Input } from '../../../../components/elements/input/Input';
import { HeaderV1 } from '../../../../components/elements/header-v1';
import { ContentContainer } from '../../../../components/containers/content';

import { ClassroomListTable } from './components/classroom-page-table';
import { Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { BrowserRoute } from '../../../../routes/browser.routes';

//component
export const ClassroomPage = () => {
  const navigate = useNavigate();

  const navlink = () => {
    // navigate(BrowserRoute.ADMIN_CLASSROOM);
  };
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
          type='text'
          style={{ width: '35%' }}
          placeholder='Search'
          icon={<SearchIcon />}
        />
        <Input
          type='submit'
          style={{ width: '35%' }}
          value='Add classroom'
          icon={<AddIcon />}
          onClick={navlink}
        />
      </div>
      <ClassroomListTable />
    </ContentContainer>
  );
};
