import React from 'react';
import styled from 'styled-components';
import { Colors, Margin, Padding } from './Variables';

const StyledFooter = styled.footer`
  background-color: ${props => props.background || Colors.PrimaryColor};
  color: ${props => props.color || Colors.LightColor};
  line-height: 1.6;
  margin: ${props => props.margin || `${Margin.PrimaryMargin} 0 0 0`};
  padding: ${props => props.padding || `${Padding.PrimaryPadding}`};
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: ${props => props.color || Colors.LightColor};
  }
`;
export const Footer = props => (
  <StyledFooter
    background={props.color}
    color={props.color}
    margin={props.margin}
  >
    {props.children}
  </StyledFooter>
);

const StyledFooterNav = styled.nav`
  display: inline-block;
  text-align: center;
  padding: 15px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex: 0 0 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    li {
      display: inline;
      font-size: 1em;
      margin-left: 25px;
      white-space: nowrap;
      @media (max-width: 768px) {
        margin-left: 0;
        padding: 12.5px;
      }
      a {
        color: #fff;
        text-decoration: none;
        transition: 0.3s ease all;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
export const FooterNav = props => <StyledFooterNav {...props} />;
