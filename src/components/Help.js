import React, { Fragment } from 'react';

function Help() {
  if (navigator.language.indexOf("de") > -1) {
    return <Fragment><h1>Hilfe / FAQ</h1></Fragment>;
  } else {
    return <Fragment><h1>Help / FAQ</h1></Fragment>;
  }
}

export default Help;
