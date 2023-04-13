import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="firstClass">hey bro this is sultan </h1>

      <Home />
      <About />
    </div>
  );
}

export default App;
