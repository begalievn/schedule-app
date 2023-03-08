import React from "react";
import {BlockContainer} from "../../../../components/containers/block";

export const SchedulePage = (props) => {
  return (
      <BlockContainer>
        { props.children }
      </BlockContainer>
    );
};
