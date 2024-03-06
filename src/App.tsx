import { ChangeEvent, useCallback, useState } from 'react';
import ButtonTest from './components/ButtonTest';
import './App.css';
import InputFieldTest from './components/InputFieldTest';

function App() {
  const [testedComponentType, setTestedComponentType] = useState('button');

  const handleTestedComponentChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setTestedComponentType(e.target.value);
    },
    []
  );

  const testedMap: { [name: string]: JSX.Element } = {
    button: <ButtonTest />,
    input: <InputFieldTest />,
  };

  const TestedComponent = testedMap[testedComponentType];

  return (
    <>
      <select
        name="testedComponent"
        id="testedComponentSelect"
        onChange={handleTestedComponentChange}
      >
        <option value="button">Button</option>
        <option value="input">Input</option>
      </select>
      {TestedComponent}
    </>
  );
}

export default App;
