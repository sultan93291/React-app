import React from 'react';
import Button from 'react-bootstrap/Button';
import Header from './Header';

function ReactBootstrap() {
  return (
    <div>

      <Header/>
      <button className="btn btn-warning m-2 "> React Button </button>

      <Button>React Button</Button>

      <Button> This is a button </Button>
    </div>
  );
}

export default ReactBootstrap;
