import React, { useState } from 'react';
import Header from './Header';

function Form() {
  // const bd = document.querySelector('#bd');

  const [event] = useState(() => {});

  const checkbox = () => {
    console.log(event.target.value);
  };

  const Formchange = event => {
    console.log(event.target.value);
  };

  return (
    <>
      
      <Header/>
      <select
        name="category"
        onChange={Formchange}
        className=" form-control w-50 "
        value={'default'}
      >
        <option value="default" selected disabled>
          {' '}
          Default{' '}
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input
        type="date"
        name="CreationDate"
        onChange={Formchange}
        className=" form-control w-25 m-2 "
      />

      <textarea
        name="usertext"
        onChange={Formchange}
        placeholder="tell us about you "
        className=" form-control w-25 h-50 "
      >
        {' '}
      </textarea>

      <div>
        <input type="radio" value="male" name="gender" onChange={Formchange} />
        <label htmlFor="gender"> Male </label>
        <input
          type="radio"
          value="female"
          name="gender"
          onChange={Formchange}
        />
        <label htmlFor="gender"> Female </label>
      </div>
    </>
  );
}

export default Form;
