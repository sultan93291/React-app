import React from 'react';

function Clipboard() {
  const onCopyTxt = () => {
    alert(' text copied succsefully ');
  };

  const onCut = () => {
    alert('Text cut . without permission ');
  };

  let dom = document.getElementById('dom');
  let bc = document.getElementById('bc');

  const onPaste = () => {
    alert('Text pasted done ');
    //document.write('text pasted done ');
  };

  return (
    <>
      <p onCopy={onCopyTxt}>
        {' '}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error labore
        quod ab maiores, quis facere, saepe laboriosam pariatur perspiciatis at
        ullam, qui dolore nemo beatae voluptas possimus ratione corrupti
        consequuntur!
      </p>

      <h1 onCut={onCut}>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet sed
        fugit quia iusto adipisci atque voluptatum ea ratione maxime.{' '}
      </h1>

      <input
        type="text"
        onPaste={onPaste}
        className=" m-2 form-control w-25 "
        id="bc"
      />

      <h2 id="dom"></h2>
    </>
  );
}

export default Clipboard;
