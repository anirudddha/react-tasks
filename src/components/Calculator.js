import React, { useState } from 'react';
import './style.css';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setResult(result + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result) || '');
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setResult('');
  };

  return (
    <div className="calculator">
      <input
        type="text"
        className="display"
        value={result}
        readOnly
      />
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button className="operator" onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button className="operator" onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button className="operator" onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button className="calculate" onClick={() => handleCalculate()}>=</button>
          <button className="operator" onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button className="clear" onClick={() => handleClear()}>C</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
