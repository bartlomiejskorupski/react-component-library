import { Fragment, useCallback } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Button } from '../../lib';

export default function ButtonTest() {
  const [counter, setCounter] = useState(0);

  const reffedRef = useRef(null);

  const handleReffedClick = useCallback(() => {
    console.log(reffedRef.current);
    setCounter((p) => p + 1);
  }, []);

  const handleButtonClick = useCallback(() => {
    setCounter((p) => p + 1);
  }, []);

  const severities = [
    'primary',
    'secondary',
    'success',
    'danger',
    'info',
  ] as const;

  const buttonCases = [
    { label: 'Normal' },
    { label: 'Round', round: true },
    { label: 'Disabled', disabled: true },
    { label: 'Text', text: true },
    { label: 'Disabled Text', disabled: true, text: true },
  ];

  return (
    <section id="buttons-section">
      <h2>Buttons</h2>
      <span>Counter: {counter}</span>

      {severities.map((s) => (
        <Fragment key={s}>
          <h3>{s.toLocaleUpperCase()}</h3>
          <div className="buttons-flex">
            {buttonCases.map((c) => {
              const { label, ...rest } = c;
              return (
                <Button
                  key={c.label}
                  onClick={handleButtonClick}
                  {...rest}
                  severity={s}
                >
                  {label}
                </Button>
              );
            })}
            <Button ref={reffedRef} onClick={handleReffedClick} severity={s}>
              Reffed
            </Button>
          </div>
          <div className="buttons-flex light pad">
            {buttonCases.map((c) => {
              const { label, ...rest } = c;
              return (
                <Button
                  key={c.label}
                  onClick={handleButtonClick}
                  {...rest}
                  severity={s}
                >
                  {label}
                </Button>
              );
            })}
            <Button ref={reffedRef} onClick={handleReffedClick} severity={s}>
              Reffed
            </Button>
          </div>
        </Fragment>
      ))}
    </section>
  );
}
