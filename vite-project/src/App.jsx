import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Fragments from './pages/Fragments';
import Clipboard from './pages/Clipboard';
import Focus from './pages/Focus';
import Keyboard from './pages/Keyboard';
import Fiter from './pages/Fiter';
import WelcomeAdmin from './pages/WelcomeAdmin';
import Style from './pages/Style';
import ReactBootstrap from './pages/ReactBootstrap';
import Input from './pages/Input';
import Form from './pages/Form';
import Person from './pages/Person';
import Pra from './pages/Pra';
import Accordion from './pages/Accordion';
function App() {
  return (
    <div className="App">
      <h1 className="firstClass">hey bro this is sultan </h1>
      <Home />
      <About />
      <Contact name="sultan" number="3516514" />
      <Contact name="Ahmed" number="5466460" />
      <Contact name="sanjar" number="6546455" />
      <Contact name="Abib" number="01857589329" />
      <Fragments />
      <Clipboard />
      <Focus />
      <Keyboard />
      <Fiter />
      <WelcomeAdmin />
      <Style />
      <ReactBootstrap />
      <Input />
      <Form />
      <Person />
      <Pra />
      <Accordion />
    </div>
  );
}

export default App;
