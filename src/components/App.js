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

function App() {
  // Google Analytics
  ReactGA.initialize('UA-XXXXXXXX-XX');
  ReactGA.pageview(window.location.pathname + window.location.search);
  ReactGA.set({ anonymizeIp: true });

  return (
    <BrowserRouter>
      <GlobalStyles />
      <HeaderComponent />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
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
