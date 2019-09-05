import React, { Fragment } from 'react';

function Home() {
  return (
    <Fragment>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
      <div>
        Hier erhältlich:
        <a href="https://play.google.com/store/apps">
          <img src={require('../img/google-play.png')} alt="Google Play" />
        </a>
        <a href="https://apps.apple.com/de/app/xcode/id497799835">
          <img src={require('../img/app-store.svg')} alt="App Store" />
        </a>
      </div>
    </Fragment>
  );
}

export default Home;
