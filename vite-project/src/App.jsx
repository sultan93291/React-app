import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import home from './pages/home';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="firstClass">hey bro this is sultan </h1>

      <home />
    </div>
  );
}

export default App;
