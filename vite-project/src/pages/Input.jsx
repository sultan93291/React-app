import React from 'react';

function Input() {
  const Onchange = e => {
    console.log(e.target.value);
  };

  // const he = document.getElementById('he');

  return (
    <>
      <input
        type="text"
        name=" Chanel_name"
        placeholder="Enter Your Text "
        className=" form-control w-50 m-2"
        onChange={Onchange}
      />

      <input
        type="text"
        name=" users"
        placeholder=" Users_data  "
        className=" form-control w-50 m-2"
        onChange={Onchange}
      />
    </>
  );
}

export default Input;
