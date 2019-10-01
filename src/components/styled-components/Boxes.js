import React from 'react';
import styled from 'styled-components';
import { ScreenSize } from './Variables';

const StyledFlexDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  div {
    flex: 0 0 60%;

    @media (max-width: ${ScreenSize.Mobile}) {
      flex: 0 0 100%
    }
  }
`;
export const FlexDiv = props => (
  <StyledFlexDiv {...props}>{props.children}</StyledFlexDiv>
);
