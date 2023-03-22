import { Add, Search } from '@mui/icons-material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../../../../../components/elements/input/Input';
import { BrowserRoute } from '../../../../../../routes/browser.routes';
import { TeacherListTable } from './components/teache-list-table/teacher-list-table.view';

export const TeacherList = () => {
  const navigate = useNavigate();

  const navlink = () => {
    navigate(BrowserRoute.ADMIN_TEACHER_CREATE);
  };
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '48px',
        }}
      >
        <Input
          type='text'
          icon={<Search />}
          style={{ width: '35%' }}
        />
        <Input
          icon={<Add />}
          style={{ width: '35%' }}
          type='submit'
          value='create teacher'
          onClick={navlink}
        />
      </div>
      <TeacherListTable />
    </div>
  );
};
