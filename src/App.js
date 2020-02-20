import React, { useState } from 'react';
import './App.scss';

const Result = ({ result, expression }) => {
  return (
    <div className="calc__result">
      <p>{expression}</p>
      <h2>{result}</h2>
    </div>
  );
}

const Rows = ({ onClick }) => {
  return (
    <div className="calc__rows">
      <div className="row">
        <button name="AC" onClick={e => onClick(e.target.name)}>AC</button>
        <button name="delete" onClick={e => onClick(e.target.name)}>DELETE</button>
        <button name="%" onClick={e => onClick(e.target.name)}>%</button>
        <button name="/" onClick={e => onClick(e.target.name)}>/</button>
      </div>
      <div className="row">
        <button name="7" onClick={e => onClick(e.target.name)}>7</button>
        <button name="8" onClick={e => onClick(e.target.name)}>8</button>
        <button name="9" onClick={e => onClick(e.target.name)}>9</button>
        <button name="*" onClick={e => onClick(e.target.name)}>X</button>
      </div>
      <div className="row">
        <button name="4" onClick={e => onClick(e.target.name)}>4</button>
        <button name="5" onClick={e => onClick(e.target.name)}>5</button>
        <button name="6" onClick={e => onClick(e.target.name)}>6</button>
        <button name="-" onClick={e => onClick(e.target.name)}>-</button>
      </div>
      <div className="row">
        <button name="1" onClick={e => onClick(e.target.name)}>1</button>
        <button name="2" onClick={e => onClick(e.target.name)}>2</button>
        <button name="3" onClick={e => onClick(e.target.name)}>3</button>
        <button name="+" onClick={e => onClick(e.target.name)}>+</button>
      </div>
      <div className="row">
        <button name="0" onClick={e => onClick(e.target.name)}>0</button>
        <button name="." onClick={e => onClick(e.target.name)}>.</button>
        <button name="=" onClick={e => onClick(e.target.name)}>=</button>
      </div>
    </div>
  );
}
export default () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const backspace = () => {
    try {
      setExpression(expression.slice(0, -1));
    }
    catch (e) {
      setExpression('error');
    }
  }

  const calculate = (exp) => {
    try {
      console.log(exp);
      setResult(eval(exp));
    }
    catch (e) {
      setResult('error');
    }
  }

  const clear = () => {
    setExpression("");
    setResult("");
  }

  const onClick = (btnValue) => {
    if (btnValue === 'AC') clear();
    else if (btnValue === "=") calculate(expression);
    else if (btnValue === 'delete') backspace();
    else if (btnValue === '%') {
      setExpression(`(${expression})/100`);
      calculate(`(${expression})/100`);

    }
    else {
      setExpression(`${expression}${btnValue}`);
    }
  }

  return (
    <div className="calc">
      <Result expression={expression} result={result} />
      <Rows onClick={onClick} />
    </div>
  );
}

