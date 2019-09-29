import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { FontSize, Colors, ScreenSize } from './Variables';
import FridgerioFont from '../../assets/fonts/Ebrima.ttf';

const StyledGlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'FridgerioFont';
    src: url(${FridgerioFont});
  }

  body {
    margin: 0;
    font-size: ${props => props.size || FontSize.normal};
    background-color: ${props => props.BGcolor || Colors.LightColor};
    line-height: 1.6;
    font-family: 'FridgerioFont';

    main {
      width: 100%;
      max-width: ${ScreenSize.Desktop};
      min-height: 70vh; 
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
