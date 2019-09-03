import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/impressum" component={LegalNotice} />
          <Route path="/datenschutzerklaerung" component={PrivacyPolicy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
