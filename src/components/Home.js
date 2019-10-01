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
            <h1>Mit Fridgerio Lebensmittelverschwendung verhindern</h1>
            <p>
              Mit Fridgerio kannst Du Deine Lebensmittel in einer mobilen App speichern und Dich rechtzeitig informieren lassen, bevor diese das Mindesthaltbarkeitsdatum erreichen. So kannst Du nicht nur Lebensmittelverschwendung entgegenwirken, sondern auch Geld sparen. 
            </p>
            <p>
              Verpasse keine Neuigkeiten: <strong>Trage Dich jetzt in unseren Newsletter ein</strong> und bekomme Updates rund um die Fridgerio App (z.B. Veröffentlichungstermin). 
            </p>
            <Input />
            <hr />
            {/* 
              <StoreIcons>
                <img onClick={NotAvailableYet} src={require('../img/google-play.png')} alt="Google Play" />
                <img onClick={NotAvailableYet} src={require('../img/app-store.svg')} alt="App Store" />
              </StoreIcons>
            */}
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
            <h1>Prevent food waste with Fridgerio</h1>
            <p>With Fridgerio you can list your groceries in a mobile app and get informed in time before they reach their best before date. That way you can both prevent food waste and save money.</p>
            <p>Do not miss any news: Sign up now for our newsletter and get updates about the Fridgerio app (for example, release date).</p>
            <Input />
            <hr />
            {/* 
              <StoreIcons>
                <img onClick={NotAvailableYet} src={require('../img/google-play.png')} alt="Google Play" />
                <img onClick={NotAvailableYet} src={require('../img/app-store.svg')} alt="App Store" />
              </StoreIcons>
            */}
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