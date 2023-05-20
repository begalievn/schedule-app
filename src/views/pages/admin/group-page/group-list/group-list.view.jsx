import React from 'react';
import {ContentContainer} from '../../../../components/containers/content';
import {HeaderV1} from '../../../../components/elements/header-v1';
import {ContainerWithLoader} from '../../../../components/containers/container-with-loader';
import {ContainerWithShadow} from '../../../../components/containers/container-with-shadow';
import {GroupListTable} from '../components/group-list-table/group-list-tabel.component';
import {useGetGroupsQuery} from '../../../../../store/api/group-api';
import {ButtonV2} from '../../../../components/elements/button-v2';
import {useNavigate} from 'react-router-dom';
import {BrowserRoute} from '../../../../routes/browser.routes';
import {ToastContainer} from 'react-toastify';

export const GroupList = () => {
  const { data, isLoading } = useGetGroupsQuery('', {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  });
  
  const navigate = useNavigate();
  
  const handleCreate = () => {
    navigate(BrowserRoute.ADMIN_GROUP_CRATE);
  }
  
  return (
    <ContentContainer>
      <HeaderV1>Group list</HeaderV1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '35px',
        }}
      >
        <ButtonV2 onClick={handleCreate}>Add Group</ButtonV2>
      </div>
      <ContainerWithShadow>
        {
          isLoading ?
            <ContainerWithLoader style={{ height: '400px' }} />
              :
            <GroupListTable groups={data} />
        }
      </ContainerWithShadow>
      <ToastContainer />
    </ContentContainer>
  );
};
