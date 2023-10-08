// import React from 'react';

// const Settings = ({ step, mode, onToggleMode, onChangeStep }) => {
//     return (
//         <div>
//             <h2>Settings</h2>
//             <div>
//                 <label>
//                     Step:
//                     <input type="number" value={step} onChange={(e) => onChangeStep(+e.target.value)} />
//                 </label>
//             </div>
//             <div>
//                 <label>
//                     Mode:
//                     <select value={mode} onChange={onToggleMode}>
//                         <option value="add">Addition</option>
//                         <option value="subtract">Subtraction</option>
//                     </select>
//                 </label>
//             </div>
//         </div>
//     );
// };

// export default Settings;

import React from 'react';

const Settings = ({
    step,
    mode,
    autoClick,
    autoClickInterval,
    onToggleMode,
    onChangeStep,
    onChangeAutoClickInterval,
}) => (
    <div>
        <div>
            <label>
                Крок лічильника:
                <input type="number" value={step} onChange={onChangeStep} />
            </label>
        </div>
        <div>
            <label>
                Режим:
                <select value={mode} onChange={onToggleMode}>
                    <option value="add">Додавання</option>
                    <option value="subtract">Віднімання</option>
                </select>
            </label>
        </div>
        <div>
            <label>
                Інтервал автокліка (мс):
                <input
                    type="number"
                    value={autoClickInterval}
                    onChange={onChangeAutoClickInterval}
                />
            </label>
        </div>
    </div>
);

export default Settings;
