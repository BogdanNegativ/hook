// import React from 'react';

// const Display = ({ count, onIncrement, mode }) => {
//     return (
//         <div>
//             <h2>Display</h2>
//             <p>Counter Value: {count}</p>
//             <button onClick={onIncrement}>{mode === 'add' ? 'Add' : 'Subtract'}</button>
//         </div>
//     );
// };

// export default Display;

import React from 'react';

const Display = ({ count, onToggleAutoClick, autoClick, onManualStep, mode }) => (
    <div>
        <p>Значення : {count}</p>
        <button onClick={onManualStep}>{mode === 'add' ? 'Додати' : 'Відняти'}</button>
        <button onClick={onToggleAutoClick}>
            {autoClick ? 'Стоп' : 'Старт'}
        </button>
    </div>
);

export default Display;
