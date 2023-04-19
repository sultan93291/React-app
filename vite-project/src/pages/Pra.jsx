import { useState } from 'react';
import Header from './Header';

export default function Pra() {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');

  const fullname = firstname + '' + lastname;

  function HandleFirstnamechange(e) {
    setfirstname(e.target.value);
  }

  function HandleLastname(e) {
    setlastname(e.target.value);
  }

  return (
    <>
      
      <Header/>
      <h2> Let's Check you in </h2>

      <label htmlFor="firstname" className=" form-label m-2 ">
        First Name :
      </label>
      <input
        type="text"
        name="firstname"
        value={firstname}
        onChange={HandleFirstnamechange}
        className=" form-control w-50 m-2 "
        placeholder="Enter Your First Name "
      />

      <label htmlFor="" className=" form-label m-2 ">
        {' '}
        Last Name:{' '}
      </label>
      <input
        type="text"
        name="secondname"
        value={lastname}
        onChange={HandleLastname}
        placeholder="Enter your last name"
        className=" form-control w-50 m-2 "
      />
      <p>
        {' '}
        Your full name is <b> {fullname} </b>{' '}
      </p>
    </>
  );
}
