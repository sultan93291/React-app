import React from 'react';

function Keyboard() {
  const Onkeydown = () => {
    console.log('key down ');
  };

  const Onkeyup = () => {
    console.log('key up');
  };

  const Onkeypress = () => {
    console.log('key pressed succesesfully ');
  };

  return (
    <div>
      <br /> <br />
      <h2 className=" m-2 "> Keyboard Event </h2>
      <input
        type="text"
        className=" form-control  m-2  "
        placeholder="keyboard event"
        onKeyDown={Onkeydown}
        onKeyUp={Onkeyup}
        onKeyPress={Onkeypress}
      />
    </div>
  );
}

export default Keyboard;
