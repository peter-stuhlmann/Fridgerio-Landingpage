import React, { Fragment } from 'react';
import { BodyBG } from './styled-components/GlobalStyles';

function QR() {
  return (
    <Fragment>
      <BodyBG PrimaryColor />
      <div style={{
        textAlign: 'center'
      }}>
        <img
          src={require('../img/qr.svg')}
          alt="QR Code"
          style={{
            width: 500
          }}
        />
      </div>
    </Fragment>
  );
}

export default QR;
