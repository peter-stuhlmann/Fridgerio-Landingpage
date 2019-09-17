import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Colors, Padding, FontSize } from './styled-components/Variables';

export default function Share() {
  return (
    <Fragment>
      <ShareLinks>
        <h3 className="heading-share">Teile diese Seite mit Deinen Freunden</h3>
        <a href="whatsapp://send?text=https://fridgerio.de/">
          <span>WhatsApp</span>
        </a>
        <a
          href="http://www.facebook.com/sharer.php?u=https://fridgerio.de/"
          target="_blank"
        >
          <span>Facebook</span>
        </a>
        <a
          href="https://twitter.com/share?url=https://fridgerio.de/"
          target="_blank"
          rel="noopener"
        >
          <span>Twitter</span>
        </a>
        <a
          href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://fridgerio.de/"
          target="_blank"
          rel="noopener"
        >
          <span>LinkedIn</span>
        </a>
        <a
          href="http://www.tumblr.com/share/link?url=https://fridgerio.de/"
          target="_blank"
          rel="noopener"
        >
          <span>Tumblr</span>
        </a>
        <a href="mailto:?Subject=Fridgerio App&amp;Body=Hallo!%20Ich%20habe%20gerade%20diese%20coole%20App%20entdeckt.%20Schau%20sie%20Dir%20mal%20an:%20https://fridgerio.de/">
          <span>E-Mail</span>
        </a>
      </ShareLinks>
    </Fragment>
  );
}

const ShareLinks = styled.div`
  margin-bottom: 30px;

  a {
    text-decoration: none;
    display: inline-block;
    font-size: ${FontSize.extraSmall};
    font-family: 'Open Sans', sans-serif;
    border-radius: 5px;
    color: ${Colors.DarkColor};
    background-color: ${Colors.PrimaryUtilityColor};
    border: 1px solid #ccc;
    line-height: 23px;
    padding: ${Padding.SecondaryPadding} ${Padding.PrimaryPadding};
    margin: 3px;
    transition: 0.2s ease all;

    &:hover {
      color: ${Colors.LightColor};
      background-color: #bdbdbd;
      text-decoration: none;

      @media screen and (max-width: $tablet) {
        color: ${Colors.DarkColor};
        background-color: ${Colors.PrimaryUtilityColor};
      }
    }
  }
`;
