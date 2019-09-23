import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Colors, Padding, FontSize } from './styled-components/Variables';

export default function Share() {
  return (
    <Fragment>
      <ShareLinks>
        <h3 className="heading-share">Teile diese Seite mit Deinen Freunden</h3>
        <a href="whatsapp://send?text=https://fridgerio.de/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
          <span>WhatsApp</span>
        </a>
        <a
          href="http://www.facebook.com/sharer.php?u=https://fridgerio.de/"
          target="_blank"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z" />
          </svg>
          <span>Facebook</span>
        </a>
        <a
          href="https://twitter.com/intent/tweet?hashtags=fridgerio&amp;text=Kauf%20nichts%20zu%20Essen,%20Du%20hast%20noch%20genug!%20Und%20Fridgerio%20sagt%20Dir%20was!&amp;url=https%3A%2F%2Ffridgerio.de&amp;via=fridgerio"
          target="_blank"
          rel="noopener"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </svg>
          <span>Twitter</span>
        </a>
        <a
          href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://fridgerio.de/"
          target="_blank"
          rel="noopener"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
          </svg>
          <span>LinkedIn</span>
        </a>
        <a
          href="http://www.tumblr.com/share/link?url=https://fridgerio.de/"
          target="_blank"
          rel="noopener"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z" />
          </svg>
          <span>Tumblr</span>
        </a>
        <a href="mailto:?Subject=Fridgerio App&amp;Body=Hallo!%20Ich%20habe%20gerade%20diese%20coole%20App%20entdeckt.%20Schau%20sie%20Dir%20mal%20an:%20https://fridgerio.de/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
          </svg>
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
    color: ${Colors.TertiaryColor};
    background-color: ${Colors.PrimaryColor};
    border: 2px solid ${Colors.TertiaryColor};
    line-height: 23px;
    padding: ${Padding.SecondaryPadding} ${Padding.PrimaryPadding};
    margin: 3px;
    transition: 0.2s ease all;

    &:hover {
      color: ${Colors.TertiaryColor};
      background-color: ${Colors.SecondaryColor};
      text-decoration: none;

      svg {
        fill: ${Colors.TertiaryColor};
      }
    }

    @media screen and (max-width: $tablet) {
      color: ${Colors.DarkColor};
      background-color: ${Colors.PrimaryUtilityColor};
    }

    svg {
      height: 16px;
      margin-right: 8px;
      margin-bottom: -3px;
      fill: ${Colors.TertiaryColor};
    }
  }
`;
