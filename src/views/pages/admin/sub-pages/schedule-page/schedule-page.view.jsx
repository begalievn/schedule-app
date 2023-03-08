import React from "react";
import {BlockContainer} from "../../../../components/containers/block";
import {AdminBackButton} from "../../../../components/elements/admin-back-button/admin-back-button.element";
import {ContentContainer} from "../../../../components/containers/content";

export const SchedulePage = (props) => {
  return (
      <BlockContainer>
        <ContentContainer maxWidth={"xl"} style={{ marginTop: '10px' }}>
          <AdminBackButton />
        </ContentContainer>
        <ContentContainer style={{ marginTop: '15px' }}>
          { props.children }
        </ContentContainer>
      </BlockContainer>
    );
};
