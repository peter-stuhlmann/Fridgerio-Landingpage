import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MainNavigationComponent() {
  return (
    <MainNavigation>
      <nav>
        <ul>
          <li>
            <Link to="#">Lorem ipsum</Link>
          </li>
          <li>
            <Link to="#">Lorem ipsum</Link>
          </li>
          <li>
            <Link to="#">Lorem ipsum</Link>
          </li>
          <li>
            <Link to="#">Lorem ipsum</Link>
          </li>
        </ul>
      </nav>
    </MainNavigation>
  );
}

export default MainNavigationComponent;

const MainNavigation = styled.div`
  margin: 0;
  padding: 0;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
  nav {
    display: inline-block;
    vertical-align: middle;
    padding: 15px;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        display: inline-block;
        margin-right: 25px;
        a {
          text-decoration: none;
          transition: 0.3s ease all;
          color: #fff;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
`;
