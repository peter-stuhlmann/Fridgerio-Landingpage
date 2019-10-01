import React, { Fragment } from 'react';

function Help() {
  if (navigator.language.indexOf("de") > -1) {
    return (
      <Fragment>
        <h1>Hilfe / FAQ</h1>
        <strong>1. Was ist Fridgerio?</strong>
        <p>Fridgerio ist eine mobile App, mit der Du Deine Lebensmittel speichern und Dich rechtzeitig informieren lassen kannst, bevor diese das Mindesthaltbarkeitsdatum erreichen. So kannst Du nicht nur Lebensmittelverschwendung entgegenwirken, sondern auch Geld sparen.</p>

        <strong>2. Wann wird die App zum Download verfügbar sein?</strong>
        <p>Wir arbeiten daran, die erste Version Anfang 2020 zu veröffentlichen.</p>

        <strong>3. Wo kann ich die App herunterladen?</strong>
        <p>Die App wird ab voraussichtlich Anfang 2020 erst im AppStore und danach im PlayStore verfügbar sein.</p>
        
        <strong>4. Auf welchen Geräten wird Fridgerio unterstützt?</strong>
        <p>Momentan arbeiten wir primär an der iOS-Version der Smartphone-App. Aber auch eine Android-Version wird parallel schon entwickelt.</p>

        <strong>5. Wer steckt hinter Fridgerio?</strong>
        <p>Fridgerio wurde als Abschlussprojekt im Rahmen eines Webentwicklungskurses von fünf Studenten entwickelt.</p>

        <strong>Sonstige Fragen</strong>
        <p>Bei sonstigen Fragen kontaktiere uns gerne über unsere E-Mail-Adresse <i>contact@fridgerio.com</i>.</p>

      </Fragment>
    );
  } else {
    return <Fragment><h1>Help / FAQ</h1></Fragment>;
  }
}

export default Help;
