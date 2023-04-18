import React from 'react';

function WelcomeAdmin() {
  const add = () => {
    let Age = window.prompt('Enter Your Age ');

    if (Age === null || Age === '') {
      alert(' please enter your age  ');
    } else if (Age <= 18 || Age >= 60) {
      alert(' Sorry You are not Eligble to enter this site 😥 . ');
    } else if (Age != NaN) {
      alert('Enter Only number strings are not allow ');
    } else {
      alert('Hey Welcome Strangers 🥰 ');
    }
  };

  return (
    <>
      <button onClick={add} className=" btn  btn-danger m-2 p-2 ">
        {' '}
        Age{' '}
      </button>

      <h2 id="h2"> </h2>
    </>
  );
}

export default WelcomeAdmin;
