import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FontSize, Colors, ScreenSize } from './Variables';

const StyledGlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-size: ${props => props.size || FontSize.normal};
    background-color: ${props => props.BGcolor || Colors.LightColor};
    line-height: 1.6;
    font-family: 'Open Sans', sans-serif;

    main {
      width: 100%;
      max-width: ${ScreenSize.Desktop};
      margin: 30px auto;
      padding: 15px;
      box-sizing: border-box;
    }

    .wrapper {
      display: flex;
      justify-content: space-between;
      flex-flow: wrap row;
      width: 100%;
      max-width: 1170px;
      margin: 0 auto;
      padding: 15px;
      box-sizing: border-box;
    }

    hr {
      border: 0;
      height: 1px;
      background-color: ${Colors.TertiaryColor};
    }
  }
`;
export const GlobalStyles = props => <StyledGlobalStyles size={props.size} BGcolor={props.BGcolor} />;

const StyledBodyBG = createGlobalStyle`
  body {
    background-color: ${props => (props.PrimaryColor ? `${Colors.PrimaryColor}` : 'white')};
  }
`
export const BodyBG = props => <StyledBodyBG PrimaryColor={props.PrimaryColor} />;
