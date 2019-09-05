import React from 'react';
import styled from 'styled-components';
import { Colors, Padding } from './Variables';

const StyledHeader = styled.header`
  background-color: ${props => props.background || Colors.TertiaryColor};
  margin: 0;
  width: 100%;
`;
export const Header = props => <StyledHeader {...props} />;

const StyledLogo = styled.div`
  line-height: 1.2;
  padding: ${props => props.padding || Padding.PrimaryPadding};
  text-align: left;
  a {
    text-decoration: none;
  }
  .site-title {
    font-size: 3em;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    display: inline-block;
    color: ${props => props.background || Colors.LightColor};
  }
`;
export const Logo = props => <StyledLogo {...props} />;
