import './App.css';
import { Button } from '../lib';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <section id="buttons-section">
      <p>Counter: {counter}</p>
      <Button>Normal</Button>
      <Button round>Round</Button>
      <Button disabled onClick={() => setCounter((p) => p + 1)}>
        Disabled
      </Button>
      <Button text>Text</Button>
    </section>
  );
}

export default App;
