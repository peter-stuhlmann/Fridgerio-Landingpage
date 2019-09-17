import React from 'react';
import styled from 'styled-components';

const StyledStoreIcons = styled.section`
  margin: 90px 0 70px 0;

  img {
    height: 55px;
    margin-right: 10px;
  }
`;
export const StoreIcons = props => <StyledStoreIcons {...props} />;

const StyledSmartphone = styled.section`
  flex: 0 0 40%;

  img {
    width: 300px;
    margin-right: 70px;
    display: block;
    float: right;
  }
`;
export const Smartphone = props => <StyledSmartphone {...props} />;
