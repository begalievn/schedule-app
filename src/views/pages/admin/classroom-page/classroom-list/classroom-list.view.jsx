import React from 'react';
import {HeaderV1} from '../../../../components/elements/header-v1';
import {Input} from '../../../../components/elements/input/Input';
import { Search as SearchIcon} from '@mui/icons-material';
import {ClassroomListTable} from '../components/classroom-page-table';
import {ContentContainer} from '../../../../components/containers/content';
import {useNavigate} from 'react-router-dom';
import {ButtonV2} from '../../../../components/elements/button-v2';
import {useGetClassroomsQuery} from '../../../../../store/api/classroom-api';
import {ContainerWithShadow} from '../../../../components/containers/container-with-shadow';
import {CircularProgress} from '@mui/material';

// styles
import classes from './style.module.scss';

export const ClassroomList = () => {
  const navigate = useNavigate();
  const navigateToCreate = () => {
    navigate('create');
  }
  
  const { data, isLoading } = useGetClassroomsQuery();
  
  return (
    <ContentContainer>
      <HeaderV1>Classroom list</HeaderV1>
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
        <ButtonV2 onClick={navigateToCreate}>
          Add classroom
        </ButtonV2>
      </div>
      <ContainerWithShadow>
        {
          isLoading ?
            <div className={classes.loader_container}>
              <CircularProgress />
            </div>
            :
            <ClassroomListTable data={data} />
        }
      </ContainerWithShadow>
    </ContentContainer>
  );
};
