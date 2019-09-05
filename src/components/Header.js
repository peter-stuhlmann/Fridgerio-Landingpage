import React from 'react';
import { Header, Logo } from './styled-components/Header';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <Header>
      <div className="wrapper">
        <Logo>
          <Link to="/">
            <p className="site-title">Fridgerio</p>
          </Link>
        </Logo>
      </div>
    </Header>
  );
}

export default HeaderComponent;
