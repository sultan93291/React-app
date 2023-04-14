import React from 'react';

// if we use fragment it won't create a sub parent it will appear the main parent. we can decalre a fragment like React.Fragment or  in easy way <> </> .

function Fragments() {
  return (
    <React.Fragment>
      <h1> this is a fragment </h1>
    </React.Fragment>
  );
}

export default Fragments;
