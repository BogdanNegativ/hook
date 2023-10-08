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

// import React, { useState } from 'react';
// import Settings from './Settings';
// import Display from './Display';

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);
//   const [mode, setMode] = useState('add');

//   const handleToggleMode = () => {
//     setMode(mode === 'add' ? 'subtract' : 'add');
//   };

//   const handleIncrement = () => {
//     setCount((prevCount) => mode === 'add' ? prevCount + step : prevCount - step);
//   };

//   return (
//     <div>
//       <h1>Counter</h1>
//       <Settings
//         step={step}
//         mode={mode}
//         onToggleMode={handleToggleMode}
//         onChangeStep={(newStep) => setStep(newStep)}
//       />
//       <Display count={count} onIncrement={handleIncrement} mode={mode} />
//     </div>
//   );
// };

// export default Counter;

import React, { useState, useEffect } from 'react';
import Display from './Display';
import Settings from './Settings';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState('add');
  const [autoClick, setAutoClick] = useState(true); // Auto-click starts automatically
  const [autoClickInterval, setAutoClickInterval] = useState(1000);

  useEffect(() => {
    let intervalId;

    const click = () => {
      const newValue = mode === 'add' ? count + step : count - step;
      setCount(newValue);
    };

    if (autoClick) {
      intervalId = setInterval(click, autoClickInterval);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [autoClick, autoClickInterval, count, step, mode]);

  const toggleAutoClick = () => {
    setAutoClick(!autoClick);
  };

  const toggleMode = () => {
    const newMode = mode === 'add' ? 'subtract' : 'add';
    setMode(newMode);
  };

  const changeStep = (event) => {
    setStep(parseInt(event.target.value));
  };

  const changeAutoClickInterval = (event) => {
    setAutoClickInterval(parseInt(event.target.value));
  };

  const clickStep = () => {
    const newValue = mode === 'add' ? count + step : count - step;
    setCount(newValue);
  };

  return (
    <div>
      <h1>ЛІЧИЛЬНИК</h1>
      <Display
        count={count}
        onToggleAutoClick={toggleAutoClick}
        autoClick={autoClick}
        onManualStep={clickStep} // Call the clickStep function for single step
        mode={mode}
      />
      <Settings
        step={step}
        mode={mode}
        autoClick={autoClick}
        autoClickInterval={autoClickInterval}
        onToggleMode={toggleMode}
        onChangeStep={changeStep}
        onChangeAutoClickInterval={changeAutoClickInterval}
      />
    </div>
  );
};

export default Counter;
