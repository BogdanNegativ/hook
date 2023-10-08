import React from 'react';

const Display = ({ count, onIncrement, mode }) => {
    return (
        <div>
            <h2>Display</h2>
            <p>Counter Value: {count}</p>
            <button onClick={onIncrement}>{mode === 'add' ? 'Add' : 'Subtract'}</button>
        </div>
    );
};

export default Display;
