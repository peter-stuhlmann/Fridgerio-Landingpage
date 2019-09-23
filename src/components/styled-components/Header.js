import React from 'react';
import styled from 'styled-components';
import { Colors, Padding } from './Variables';

const StyledHeader = styled.header`
  background-color: ${props => props.background || Colors.TertiaryColor};
  padding: ${props => props.padding || `${Padding.PrimaryPadding} 0`};
  margin: 0;
  width: 100%;
  box-sizing: border-box;
`;
export const Header = props => (
  <StyledHeader background={props.color}>{props.children}</StyledHeader>
);

const StyledLogo = styled.div`
  line-height: 1.2;
  text-align: left;

  a {
    text-decoration: none;
  }
  
  .site-title {
    font-size: 3em;
    font-family: 'FridgerioFont', sans-serif;
    margin: 0;
    display: inline-block;
    color: ${props => props.background || Colors.LightColor};
  }
`;
export const Logo = props => <StyledLogo {...props} />;
