import React from 'react';
import Header from './Header';

function Contact(contactprops) {
  return (
    <div>
      <Header/>
      <h2>
        {' '}
        My Name is {contactprops.name} . My Contact number is{' '}
        {contactprops.number}.{' '}
      </h2>
    </div>
  );
}

export default Contact;
