import React from 'react';

const Settings = ({ step, mode, onToggleMode, onChangeStep }) => {
    return (
        <div>
            <h2>Settings</h2>
            <div>
                <label>
                    Step:
                    <input type="number" value={step} onChange={(e) => onChangeStep(+e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Mode:
                    <select value={mode} onChange={onToggleMode}>
                        <option value="add">Addition</option>
                        <option value="subtract">Subtraction</option>
                    </select>
                </label>
            </div>
        </div>
    );
};

export default Settings;
