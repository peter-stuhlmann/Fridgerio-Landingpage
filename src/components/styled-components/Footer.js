import React from 'react';
import styled from 'styled-components';
import { Colors, Margin, Padding, ScreenSize } from './Variables';

const StyledFooter = styled.footer`
  background-color: ${props => props.background || Colors.TertiaryColor};
  color: ${props => props.color || Colors.LightColor};
  line-height: 1.6;
  margin: ${props => props.margin || `${Margin.PrimaryMargin} 0 0 0`};
  padding: ${props => props.padding || `${Padding.PrimaryPadding}`};
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: ${ScreenSize.Mobile}) {
    padding: 0;
  }

  p {
    @media (max-width: ${ScreenSize.Mobile}) {
      margin: auto;
    }
  }

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
  @media (max-width: ${ScreenSize.Mobile}) {
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
      @media (max-width: ${ScreenSize.Mobile}) {
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

const StyledLanguageNav = styled.nav`
  display: inline-block;
  text-align: center;
  margin-right: -555px;
  padding: 15px;
  box-sizing: border-box;
  
  @media (max-width: ${ScreenSize.Mobile}) {
    flex: 0 0 100%;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      display: inline;
      font-size: 1em;
      margin-left: 15px;
      white-space: nowrap;

      &::after {
        content: "|";
        margin-left: 15px;
        z-index: 2;
        color: #fff;
      }
      &:last-child::after {
        display: none
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
export const LanguageNav = props => <StyledLanguageNav {...props} />;
