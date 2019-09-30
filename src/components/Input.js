import React from 'react';
import styled from 'styled-components';
import { Colors, Padding, FontSize } from './styled-components/Variables';
import Mailchimp from 'react-mailchimp-form';

export default function Input() {
  return (
    <Subscribe>
      <Mailchimp
        action="https://peter-stuhlmann.us4.list-manage.com/subscribe/post?u=bf5dc851fadd523f3862596c5&id=5143f975e3"
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true,
          },
        ]}
        messages={{
          sending: (navigator.language.indexOf("de") > -1) ? 'Wird gesendet ...' : 'Sending ...',
          success: (navigator.language.indexOf("de") > -1) ? 'Danke für Deine Anmeldung!' : 'Thank you for subscribing!',
          error: (navigator.language.indexOf("de") > -1) ? 'Sorry, es gab leider einen Fehler.' : 'An unexpected internal error has occured.',
          empty: (navigator.language.indexOf("de") > -1) ? 'Bitte gib eine gültige E-Mail-Adresse an.' : 'You must write an e-mail.',
          duplicate: (navigator.language.indexOf("de") > -1) ? 'Diese E-Mail-Adresse ist bereits registriert.' : 'Too many subscribe attempts for this email address',
          button: (navigator.language.indexOf("de") > -1) ? 'Anmelden' : 'Subscribe',
        }}
        className="subscribe"
      />
    </Subscribe>
  );
}

const Subscribe = styled.div`
  .subscribe {
    display: flex
    flex-flow: row wrap;
    margin: 50px 0;

    input {
      font-size: ${FontSize.normal};
      padding: 10px;
      margin-right: 10px;
      display: block;
      width: 300px;
      border: none;
      border-radius: 5px;
    
      &:focus {
        outline: none;
      }
    }

    button {
      background-color: ${Colors.TertiaryColor};
      color: ${Colors.LightColor};
      display: inline-block;
      border: none;
      border-radius: 5px;
      padding: ${Padding.SecondaryPadding} ${Padding.PrimaryPadding};
      cursor: pointer;
          
      &:focus {
        outline: none;
      }
    }
  }
`;
