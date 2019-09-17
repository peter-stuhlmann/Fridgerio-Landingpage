import React from 'react';
import styled from 'styled-components';
import { Colors, Padding, FontSize } from './styled-components/Variables';
import Mailchimp from 'react-mailchimp-form';

export default function Input() {
  return (
    <Subscribe>
      <Mailchimp
        action="https://peter-stuhlmann.us4.list-manage.com/subscribe/post?u=bf5dc851fadd523f3862596c5&amp;id=e9733deecb"
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true,
          },
        ]}
        messages={{
          sending: 'Wird gesendet ...',
          success: 'Danke für Deine Anmeldung!',
          error: 'Sorry, es gab leider einen Fehler.',
          empty: 'Bitte gib eine gültige E-Mail-Adresse an.',
          duplicate: 'Sorry, zu viele Anmeldeversuche für diese Adresse.',
          button: 'Anmelden',
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
