import React from 'react';

// css import modules style

import SultanStyle from './Style.module.css';
import Header from './Header';

function Style() {
  const hstyle = {
    color: 'red',
    fontSize: '30px',
    textAlign: 'center',
  };
  return (
    <>
      <Header/>
      <h2 style={hstyle}> This is my First STyle</h2>
      <h3 className="sultan"> Hey Strangers Welcome there </h3>
      <button id="bt"> Button </button>

      <button className={SultanStyle.root}> Button </button>
    </>
  );
}

export default Style;
