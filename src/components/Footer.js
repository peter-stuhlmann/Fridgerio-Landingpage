import React from 'react';
import { Footer, FooterNav } from './styled-components/Footer';
import { Link } from 'react-router-dom';

function FooterComponent() {
  return (
    <Footer>
      <div className="wrapper">
        <p>
          &copy; <Link to="/">Fridgerio</Link>, 2019
        </p>
        <FooterNav>
          <ul>
            <li>
              <Link to="/impressum">Impressum</Link>
            </li>
            <li>
              <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link>
            </li>
          </ul>
        </FooterNav>
      </div>
    </Footer>
  );
}

export default FooterComponent;
