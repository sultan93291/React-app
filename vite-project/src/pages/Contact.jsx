import React from 'react';

function Contact(contactprops) {
  return (
    <div>
      <h2>
        {' '}
        My Name is {contactprops.name} . My Contact number is{' '}
        {contactprops.number}.{' '}
      </h2>
    </div>
  );
}

export default Contact;
