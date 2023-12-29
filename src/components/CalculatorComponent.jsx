import React, { useState } from 'react';

function CalculatorComponent() {
    const [inputValue, setInputValue] = useState('');
    const [resultValue, setResultValue] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                const result = Function(`"use strict"; return (${inputValue})`)();
                console.log(result);
                setResultValue(result.toString());
            } catch (error) {
                setResultValue('Error');
            }
        } else if (value === 'C') {
            setInputValue('');
            setResultValue('');
        } else {
            setInputValue(inputValue + value);
        }
    };

    return (
        <div className="container mt-4">
            <div className="card shadow">
                <h5 className="card-header bg-primary text-white text-center">Calculator</h5>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control text-end"
                            placeholder="0"
                            value={inputValue}
                            readOnly
                        />
                        <span className="input-group-text">{resultValue}</span>
                    </div>
                    <div className="d-grid gap-2">
                        <div className="btn-group" role="group">
                            <button className="btn btn-secondary" onClick={() => handleButtonClick('7')}>7</button>
                            <button className="btn btn-secondary" onClick={() => handleButtonClick('8')}>8</button>
                            <button className="btn btn-secondary" onClick={() => handleButtonClick('9')}>9</button>
                            <button className="btn btn-warning" onClick={() => handleButtonClick('+')}>+</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button className="btn btn-secondary" onClick={() => handleButtonClick('4')}>4</button>
                            <button className="btn btn-secondary" onClick={() => handleButtonClick('5')}>5</button>
                            <button className="btn btn-secondary" onClick={() => handleButtonClick('6')}>6</button>
                            <button className="btn btn-warning" onClick={() => handleButtonClick('-')}>-</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button className="btn btn-secondary" onClick={() => handleButtonClick('1')}>1</button>
                            <button className="btn btn-secondary" onClick={() => handleButtonClick('2')}>2</button>
                            <button className="btn btn-secondary" onClick={() => handleButtonClick('3')}>3</button>
                            <button className="btn btn-warning" onClick={() => handleButtonClick('*')}>*</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button className="btn btn-secondary" onClick={() => handleButtonClick('C')}>C</button>
                            <button className="btn btn-secondary" onClick={() => handleButtonClick('0')}>0</button>
                            <button className="btn btn-secondary" onClick={() => handleButtonClick('=')}>=</button>
                            <button className="btn btn-warning" onClick={() => handleButtonClick('/')}>/</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalculatorComponent;
