//module
import React from 'react';
import { ContentContainer } from '../../../../components/containers/content';
import { HeaderV1 } from '../../../../components/elements/header-v1';

// styles
// import classes from './style.module.scss';

export const Teacher = (props) => {
  return (
    <ContentContainer>
      <HeaderV1>Teacher's</HeaderV1>
      {props.children}
    </ContentContainer>
  );
};
