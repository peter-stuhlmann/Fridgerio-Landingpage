import React, { Fragment } from 'react';
import { StoreIcons, Smartphone } from './styled-components/Images';
import { FlexDiv } from './styled-components/Boxes';
import Input from './Input';
import Share from './Share';

function Home() {
  return (
    <Fragment>
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
            <a href="https://play.google.com/store/apps">
              <img src={require('../img/google-play.png')} alt="Google Play" />
            </a>
            <a href="https://apps.apple.com/de/app/xcode/id497799835">
              <img src={require('../img/app-store.svg')} alt="App Store" />
            </a>
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

export default Home;
