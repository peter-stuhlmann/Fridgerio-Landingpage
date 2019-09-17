import React from 'react';
import styled from 'styled-components';
import { Colors, Padding } from './Variables';

const StyledButton = styled.button`
  background-color: ${props => props.background || Colors.TertiaryColor};
  color: ${props => props.background || Colors.LightColor};
  display: ${props => props.display || 'inline-block'};
  border: none;
  border-radius: 5px;
  padding: ${props =>
    props.padding || `${Padding.SecondaryPadding} ${Padding.PrimaryPadding}`};
  cursor: pointer;
`;
export const Button = props => (
  <StyledButton {...props}>{props.label}</StyledButton>
);
