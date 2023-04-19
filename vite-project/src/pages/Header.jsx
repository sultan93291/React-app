import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <ul id="ul">
        <li>
          {' '}
          <Link to={'/'}> Home </Link>{' '}
        </li>
        <li>
          {' '}
          <Link to={'/About'}> About </Link>{' '}
        </li>
        <li>
          {' '}
          <Link to={'/Accordion '}> Accordion </Link>{' '}
        </li>
        <li>
          {' '}
          <Link to={'/Contact'}> Contact </Link>{' '}
        </li>
        <li>
          {' '}
          <Link to={'/Fiter'}> Fiter </Link>{' '}
        </li>
        <li>
          {' '}
          <Link to={'/Form'}> Form </Link>{' '}
        </li>
        <li>
          {' '}
          <Link to={'/Fragments'}> Fragments </Link>{' '}
        </li>
        <li>
          {' '}
          <Link to={'/Input'}> Input </Link>{' '}
        </li>
        <li>
          {' '}
          <Link to={'/Keyboard'}> Keyboard </Link>{' '}
        </li>
        <li>
          {' '}
          <Link to={'/Person'}> Person </Link>{' '}
        </li>
        <li>
          {' '}
          <Link to={'/React'}> Reactbootstrap </Link>{' '}
        </li>
        <li>
          {' '}
          <Link to={'/pra'}>pra</Link>{' '}
        </li>

        <li>
          {' '}
          <Link to={'/Welcome'}> Welcome Page </Link>{' '}
        </li>
        <li>
          {' '}
          <Link to={'/Clipboard'}> Clipboard </Link>{' '}
        </li>
      </ul>
    </div>
  );
}

export default Header;
