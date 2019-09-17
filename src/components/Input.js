import React from 'react';
import styled from 'styled-components';
import { Button } from './styled-components/Buttons';
import { Colors } from './styled-components/Variables';

export default function Input() {
  return (
    <Subscribe>
      <StyledInput>
        <div className="group">
          <input type="text" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Email</label>
        </div>
      </StyledInput>
      <Button label="Anmelden" />
    </Subscribe>
  );
}

const Subscribe = styled.div`
  display: flex
  flex-flow: row wrap
  margin: 50px 0
`;

const StyledInput = styled.form`
  .group {
    position: relative;
    margin: 0 10px 0 0;
    flex: 0 0 70%;
  }

  input {
    font-size: 18px;
    padding: 10px;
    display: block;
    width: 300px;
    border: none;
    border-bottom: 1px solid ${Colors.TertiaryColor};
    border-radius: 5px;
  }
  input:focus {
    outline: none;
  }

  label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -20px;
    font-size: 16px;
    color: #5264ae;
  }

  .bar {
    position: relative;
    display: block;
    width: 320px;
  }
  .bar:before,
  .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264ae;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  .bar:before {
    left: 50%;
  }
  .bar:after {
    right: 50%;
  }

  input:focus ~ .bar:before,
  input:focus ~ .bar:after {
    width: 50%;
  }

  .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  input:focus ~ .highlight {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
  }

  @-webkit-keyframes inputHighlighter {
    from {
      background: #5264ae;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @-moz-keyframes inputHighlighter {
    from {
      background: #5264ae;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @keyframes inputHighlighter {
    from {
      background: #5264ae;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
`;
