import React from 'react';
import CookieBanner from 'react-cookie-banner';
import { Colors } from './styled-components/Variables';

function CookieNotice() {
  if (navigator.language.indexOf("de") > -1) {
    return (
      <CookieBanner
        message="Unsere Website verwendet Cookies, um u.a. Funktionen für soziale Medien bereitzustellen und den Datenverkehr zu analysieren."
        buttonMessage="Okay, verstanden"
        onAccept={() => {}}
        cookie="user-has-accepted-cookies" 
        dismissOnScroll={false}
        styles={{
          banner: { backgroundColor: Colors.SecondaryColor, position: 'fixed', top: 0 },
          message: { color: Colors.TertiaryColor }
        }}
      />
    )
  } else {
    return (
      <CookieBanner
        message="Our site uses cookies to provide social media features and to analyse traffic."
        buttonMessage="Got it"
        onAccept={() => {}}
        cookie="user-has-accepted-cookies" 
        dismissOnScroll={false}
        styles={{
          banner: { backgroundColor: Colors.SecondaryColor, position: 'fixed', top: 0 },
          message: { color: Colors.TertiaryColor }
        }}
      />
    )
  }
}

export default CookieNotice;
