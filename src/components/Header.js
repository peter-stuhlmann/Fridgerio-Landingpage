import React from 'react';
import { Header, Logo } from './styled-components/Header';
import { Link } from 'react-router-dom';
import MainNavigationComponent from './MainNavigation';

function HeaderComponent() {
  return (
    <Header>
      <div className="wrapper">
        <Logo>
          <Link to="/">
            <p className="site-title">Fridgerio</p>
          </Link>
        </Logo>
        {/* <MainNavigationComponent /> */}
      </div>
    </Header>
  );
}

export default HeaderComponent;
