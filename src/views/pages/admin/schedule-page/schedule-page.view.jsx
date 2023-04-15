import React from "react";

// components
import {BlockContainer} from "../../../components/containers/block";
import {AdminBackButton} from "../../../components/elements/admin-back-button/admin-back-button.element";
import {Container} from "@mui/material";

export const SchedulePage = (props) => {
  return (
      <BlockContainer>
        <Container maxWidth={"xl"} style={{ marginTop: '10px' }}>
          <AdminBackButton />
        </Container>
        <Container maxWidth={'xl'} style={{ marginTop: '15px', height: '100%' }}>
          { props.children }
        </Container>
      </BlockContainer>
    );
};
