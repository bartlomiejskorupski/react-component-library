import './App.css';
import { Button } from '../lib';
import { useRef, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const reffedRef = useRef(null);

  function handleReffedClick() {
    console.log(reffedRef.current);
  }

  return (
    <section id="buttons-section">
      <p>Counter: {counter}</p>
      <Button>Normal</Button>
      <Button round>Round</Button>
      <Button disabled onClick={() => setCounter((p) => p + 1)}>
        Disabled
      </Button>
      <Button text>Text</Button>
      <Button ref={reffedRef} onClick={handleReffedClick}>
        Reffed
      </Button>
    </section>
  );
}

export default App;
