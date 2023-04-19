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
import Header from './pages/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}>
            {' '}
          </Route>

          <Route
            path="/Contact"
            element={<Contact name="sultan" number="416464" />}
          >
            {' '}
          </Route>

          <Route path="/Fragments" element={<Fragments />}></Route>
          <Route path="/Clipboard" element={<Clipboard />}></Route>
          <Route path="/Focus" element={<Focus />}></Route>
          <Route path="/Keyboard" element={<Keyboard />}></Route>
          <Route path="/Fiter" element={<Fiter />}></Route>
          <Route path="/Welcome" element={<WelcomeAdmin />}></Route>
          <Route path="/Style" element={<Style />}></Route>
          <Route path="/React" element={<ReactBootstrap />}></Route>
          <Route path="/Input" element={<Input />}></Route>
          <Route path="/Form" element={<Form />}></Route>
          <Route path="/Person" element={<Person />}></Route>
          <Route path="/Pra" element={<Pra />}></Route>
          <Route path="/Accordion" element={<Accordion />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
