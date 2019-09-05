import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderComponent from './Header';
import FooterComponent from './Footer';
import Home from './Home';
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
import NotFound from './NotFound';
import { GlobalStyles } from './styled-components/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <HeaderComponent />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
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
