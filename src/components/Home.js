import React, { Fragment } from 'react';
import { StoreIcons, Smartphone } from './styled-components/Images';
import { FlexDiv } from './styled-components/Boxes';
import Input from './Input';
import Share from './Share';
import { BodyBG } from './styled-components/GlobalStyles';

function Home() {
  if (navigator.language.indexOf("de") > -1) {
    return (
      <Fragment>
        <BodyBG PrimaryColor />
        <FlexDiv>
          <div>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet.
            </p>
            <Input />
            <hr />
            <StoreIcons>
              <img onClick={NotAvailableYet} src={require('../img/google-play.png')} alt="Google Play" />
              <img onClick={NotAvailableYet} src={require('../img/app-store.svg')} alt="App Store" />
            </StoreIcons>
            <Share />
          </div>
          <Smartphone>
            <img
              src={require('../img/smartphone.svg')}
              alt="Fridgerio Smartphone"
            />
          </Smartphone>
        </FlexDiv>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <BodyBG PrimaryColor />
        <FlexDiv>
          <div>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet.
            </p>
            <Input />
            <hr />
            <StoreIcons>
              <img onClick={NotAvailableYet} src={require('../img/google-play.png')} alt="Google Play" />
              <img onClick={NotAvailableYet} src={require('../img/app-store.svg')} alt="App Store" />
            </StoreIcons>
            <Share />
          </div>
          <Smartphone>
            <img
              src={require('../img/smartphone.svg')}
              alt="Fridgerio Smartphone"
            />
          </Smartphone>
        </FlexDiv>
      </Fragment>
    );
  }
}

const NotAvailableYet = () => {
  if (navigator.language.indexOf("de") > -1) {
    alert("Die App ist noch nicht im Store verfügbar. Wenn Du Dich in unseren Newsletter einträgst, halten wir Dich gerne auf dem Laufenden.");
  } else {
    alert("The app is not available in the store yet. If you register for our newsletter, we will keep you up to date.")
  }
}

export default Home;
