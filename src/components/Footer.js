import React from 'react';
import { Footer, FooterNav, LanguageNav } from './styled-components/Footer';
import { Link } from 'react-router-dom';

function FooterComponent() {
  if (navigator.language.indexOf("de") > -1) {
    return (
      <Footer>
        <div className="wrapper">
          <p>
            &copy; <Link to="/">Fridgerio</Link>, 2019
          </p>
          
          {/* Currently the browser language is automatically determined.
            <LanguageNav>
              <ul>
                <li>
                  <Link to="/de/">DE</Link>
                </li>
                <li>
                  <Link to="/en/">EN</Link>
                </li>
              </ul>
            </LanguageNav>
          */}

          <FooterNav>
            <ul>
              <li>
                <Link to="/qr">QR</Link>
              </li>
              <li>
                <Link to="/hilfe">Hilfe/FAQ</Link>
              </li>
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
  } else {
    return (
      <Footer>
        <div className="wrapper">
          <p>
            &copy; <Link to="/">Fridgerio</Link>, 2019
          </p>
          
          {/* Currently the browser language is automatically determined.
            <LanguageNav>
              <ul>
                <li>
                  <Link to="/de/">DE</Link>
                </li>
                <li>
                  <Link to="/en/">EN</Link>
                </li>
              </ul>
            </LanguageNav>
          */}
  
          <FooterNav>
            <ul>
              <li>
                <Link to="/qr">QR</Link>
              </li>
              <li>
                <Link to="/hilfe">Help/FAQ</Link>
              </li>
              <li>
                <Link to="/impressum">Legal Notice</Link>
              </li>
              <li>
                <Link to="/datenschutzerklaerung">Privacy Policy</Link>
              </li>
            </ul>
          </FooterNav>
        </div>
      </Footer>
    );
  }
}

export default FooterComponent;
