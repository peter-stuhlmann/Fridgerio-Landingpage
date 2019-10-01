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
        <p>Fridgerio wurde als Abschlussprojekt im Rahmen eines Webentwicklungskurses von fünf Studenten in Berlin entwickelt.</p>

        <strong>Sonstige Fragen</strong>
        <p>Bei sonstigen Fragen kontaktiere uns gerne über unsere E-Mail-Adresse <i>contact@fridgerio.com</i>.</p>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <h1>Help / FAQ</h1>
        <strong>1. What is Fridgerio?</strong>
        <p>Fridgerio is a mobile app that allows you to list your groceries and informs you before they reach the best before date. It helps you not only to prevent food waste, but also to save money.</p>

        <strong>2. When will the app be available for download?</strong>
        <p>We are working to release the first version in early 2020.</p>

        <strong>3. Where can I download the app?</strong>
        <p>The app will be available from the beginning of 2020 in the AppStore and later in the PlayStore.</p>

        <strong>4. On which devices is Fridgerio supported?</strong>
        <p>We are currently working primarily on a smartphone app for iOS, but the Android version is already beeing developed simultaneously.</p>

        <strong>5. Who is behind Fridgerio?</strong>
        <p>Fridgerio was developed in Berlin by five students as their final project of a web development course.</p>

        <strong>Other questions</strong>
        <p>For other questions please contact us via our email address <i>contact@fridgerio.com</i>.</p>
      </Fragment>
    );
  }
}

export default Help;
