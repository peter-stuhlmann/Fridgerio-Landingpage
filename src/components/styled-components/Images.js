import React from 'react';
import styled from 'styled-components';
import { ScreenSize } from './Variables';

const StyledStoreIcons = styled.section`
  margin: 50px 0 50px 0;

  img {
    height: 55px;
    margin-right: 10px;
  }
`;
export const StoreIcons = props => <StyledStoreIcons {...props} />;

const StyledSmartphone = styled.section`
  flex: 0 0 40%;

  @media (max-width: ${ScreenSize.Mobile}) {
    margin: auto;
  }

  img {
    width: 300px;
    margin-right: 70px;
    display: block;
    float: right;

    @media (max-width: ${ScreenSize.Mobile}) {
      margin: 0;
    }
  }
`;
export const Smartphone = props => <StyledSmartphone {...props} />;
