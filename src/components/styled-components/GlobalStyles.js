import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { FontSize, Colors, ScreenSize } from './Variables';

const StyledGlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-size: ${props => props.size || FontSize.normal};
    background-color: ${props => props.background || Colors.SecondaryColor};
    font-family: 'Open Sans', sans-serif;

    main {
      width: 100%;
      max-width: ${ScreenSize.Desktop};
      margin: 30px auto;
    }

    .wrapper {
      display: flex;
      justify-content: space-between;
      flex-flow: wrap row;
      width: 100%;
      max-width: 1170px;
      margin: 0 auto;
      box-sizing: border-box;
    }
  }
`;
export const GlobalStyles = props => <StyledGlobalStyles size={props.size} />;
