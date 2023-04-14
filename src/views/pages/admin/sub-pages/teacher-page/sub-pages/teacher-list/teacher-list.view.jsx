import { Search } from '@mui/icons-material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../../../../../components/elements/input/Input';
import { BrowserRoute } from '../../../../../../routes/browser.routes';
import { TeacherListTable } from './components/teache-list-table/teacher-list-table.view';
import {ContentContainer} from '../../../../../../components/containers/content';
import {ContainerWithShadow} from '../../../../../../components/containers/container-with-shadow';
import {HeaderV1} from '../../../../../../components/elements/header-v1';
import {ButtonV2} from '../../../../../../components/elements/button-v2';
import {useGetAllTeacherQuery} from '../../../../../../../store/api/teacher-api';
import {ContainerWithLoader} from '../../../../../../components/containers/container-with-loader';

export const TeacherList = () => {
  const navigate = useNavigate();
  
  const { data: teacherData, isLoading: teacherLoading } = useGetAllTeacherQuery();
  
  const navigateTo = () => {
    navigate(BrowserRoute.ADMIN_TEACHER_CREATE);
  };
  return (
    <ContentContainer style={{ marginBottom: '50px' }}>
      <HeaderV1>Teachers</HeaderV1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '48px',
        }}
      >
        <Input
          label={'Search teacher'}
          type='text'
          icon={<Search />}
          style={{ width: '35%' }}
        />
        <ButtonV2 onClick={navigateTo}>Add Teacher</ButtonV2>
      </div>
      
      <ContainerWithShadow>
        {
          teacherLoading ?
            <ContainerWithLoader style={{ height: '440px' }} />
            :
            <TeacherListTable data={teacherData} />
        }
      </ContainerWithShadow>
    </ContentContainer>
  );
};
