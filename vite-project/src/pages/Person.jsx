import React from 'react';
import Header from './Header';

const person = {
  name: 'sultan ahmed sanjar',

  theme: {
    backgroundColor: 'black',
    color: 'pink',
  },
};

const imgs = {
  height: '150px',
  width: '150px',
  borderRadius: '50px',
};

function Person() {
  return (
    <>
      <Header />
      <div style={person.theme}>
        <h2> {person.name}'is cool </h2>
        <img
          src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/313375691_837282984137651_4982099491483995326_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGZmUft9Ll-h0j_MvNcLas6m2Dkj4zofbabYOSPjOh9tg_pCsGZMhgxJp2-KBZa_UPZWOM6xJCffSTypkccPPRU&_nc_ohc=5cHcYXFHTZwAX_wUb7_&_nc_pt=1&_nc_ht=scontent.fdac8-1.fna&oh=00_AfDuA0h3dc7-JQJ3VuYcOSzDKX7P84Yeu6tY_UTheaHCtw&oe=64423520"
          alt="image is missing"
          className="  avatar "
          style={imgs}
        />

        <ul>
          <li> let's see is it work </li>

          <li> great it's working</li>
          <li>
            {' '}
            coding is dangerous. but if you learn it your gonna love it .{' '}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Person;
