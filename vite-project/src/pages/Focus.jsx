import React from 'react';
import Header from './Header';

function Focus() {
  const Focustxt = () => {
    console.log('text focused ');
  };
  const Blurtxt = () => {
    console.log('text blured succesfully ');
  };
  return (
    <div>

      <Header/>
      <br /> <br />
      <h1> Focus Event </h1>
      <input
        onFocus={Focustxt}
        type="text"
        className=" form-control m-2 w-50 "
        onBlur={Blurtxt}
      />
    </div>
  );
}

export default Focus;
