// import React, { useState } from 'react';

// const Counter = () => {
//   console.log('render');
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);
//   const handlerClick = () => setCount(count + step);
//   // const handlerClick = () => setCount((c) => c + 1);
//   const handlerInput = ({ target: { value } }) => {
//     setStep(Number(value));
//   }
//   return (
//     <div>
//       <h2>COUNT:{count}</h2>
//       <h3>step:{step}</h3>
//       <button onClick={handlerClick}>increment</button>
//       <input type="number" onChange={handlerInput} value={step} />
//     </div>
//   );
// }

// export default Counter;

import React, { useState } from 'react';
import Settings from './Settings';
import Display from './Display';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState('add');

  const handleToggleMode = () => {
    setMode(mode === 'add' ? 'subtract' : 'add');
  };

  const handleIncrement = () => {
    setCount((prevCount) => mode === 'add' ? prevCount + step : prevCount - step);
  };

  return (
    <div>
      <h1>Counter</h1>
      <Settings
        step={step}
        mode={mode}
        onToggleMode={handleToggleMode}
        onChangeStep={(newStep) => setStep(newStep)}
      />
      <Display count={count} onIncrement={handleIncrement} mode={mode} />
    </div>
  );
};

export default Counter;
