import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { FontSize } from './Variables';

const StyledGlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-size: ${props => props.size || FontSize.normal};
  }
`;
export const GlobalStyles = props => <StyledGlobalStyles size={props.size} />;
