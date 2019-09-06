import React, { Fragment } from 'react';

function Home() {
  return (
    <Fragment>
      <section>
        <h1>Lorem isum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <div>
          <a href="https://play.google.com/store/apps">
            <img src={require('../img/google-play.png')} alt="Google Play" />
          </a>
          <a href="https://apps.apple.com/de/app/xcode/id497799835">
            <img src={require('../img/app-store.svg')} alt="App Store" />
          </a>
        </div>
      </section>
      <section>
        <img
          src={require('../img/smartphone.svg')}
          alt="Fridgerio Smartphone"
        />
      </section>
    </Fragment>
  );
}

export default Home;
