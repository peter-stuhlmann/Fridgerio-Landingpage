import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import HeaderComponent from './Header';
import FooterComponent from './Footer';
import Home from './Home';
import Help from './Help';
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
import NotFound from './NotFound';
import { GlobalStyles } from './styled-components/GlobalStyles';
import QR from './QR';
import CookieNotice from './CookieNotice';

function App() {
  // Google Analytics
  ReactGA.initialize('UA-62307007-22');
  ReactGA.pageview(window.location.pathname + window.location.search);
  ReactGA.set({ anonymizeIp: true });

  return (
    <BrowserRouter>
      <CookieNotice />
      <GlobalStyles />
      <HeaderComponent />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/qr" component={QR} />
          <Route path="/hilfe" component={Help} />
          <Route path="/impressum" component={LegalNotice} />
          <Route path="/datenschutzerklaerung" component={PrivacyPolicy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
