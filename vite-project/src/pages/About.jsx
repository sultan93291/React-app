import React, { useState } from 'react';

// hook and jsx state and use state example

function About() {
  const [count, setCount] = useState(() => {
    console.log("it's going good ");
    return 0;
  });

  const [theme, setTheme] = useState(() => {
    console.log('theme function is working there ');

    return 'black';
  });

  function dcount() {
    setCount(prevCount => prevCount - 1);
    setTheme('Yellow');

    //setCount(count - 1);
  }

  function icount() {
    setCount(prevCount => prevCount + 1);
    setTheme('Red');
  }

  return (
    <div className="m-2 fs-1">
      <button onClick={dcount} className="btn btn-outline-danger m-2">
        -
      </button>

      <span className="m-2 text-info">{count}</span>
      <span className="m-2 text-info">{theme}</span>

      <button onClick={icount} className="btn btn-outline-primary m-2 ">
        {' '}
        +{' '}
      </button>
    </div>
  );
}

export default About;
