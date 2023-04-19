import React from 'react';
import Header from './Header';

const Aboutme = ` Hey babe this is sultan. a web developer .  `;

const sum = 151 + 50;

function Home() {
  return (
    <div>

      <Header/>
      <h1> this is the home page </h1>

      <p className="fs-1">
        {' '}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
        consequatur delectus ipsum dignissimos recusandae! Debitis odit quod
        veritatis rem ullam?
      </p>

      <h2>{Aboutme}</h2>

      <p> {sum + 40} </p>
    </div>
  );
}

export default Home;
