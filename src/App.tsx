import './App.css';
import { Button } from '../';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <section id="buttons-section">
      <p>Counter: {counter}</p>
      <Button rounder onClick={() => setCounter((p) => p + 1)}>
        Test Button
      </Button>
    </section>
  );
}

export default App;
