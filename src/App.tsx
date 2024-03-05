import './App.css';
import { Button } from '../lib';
import { useCallback, useRef, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const reffedRef = useRef(null);

  const handleReffedClick = useCallback(() => {
    console.log(reffedRef.current);
    setCounter((p) => p + 1);
  }, []);

  const handleButtonClick = useCallback(() => {
    setCounter((p) => p + 1);
  }, []);

  return (
    <section id="buttons-section">
      <h2>Buttons</h2>
      <span>Counter: {counter}</span>
      <div className="buttons-flex">
        <Button onClick={handleButtonClick}>Normal</Button>
        <Button onClick={handleButtonClick} round>
          Round
        </Button>
        <Button disabled onClick={handleButtonClick}>
          Disabled
        </Button>
        <Button onClick={handleButtonClick} text>
          Text
        </Button>
        <Button ref={reffedRef} onClick={handleReffedClick}>
          Reffed
        </Button>
      </div>
    </section>
  );
}

export default App;
