import React, { Component } from 'react';
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
        <button onClick={e => onClick('AC')}>AC</button>
        <button onClick={e => onClick('(')}>(</button>
        <button onClick={e => onClick(')')}>)</button>
        <button onClick={e => onClick('/')}>/</button>
      </div>
      <div className="row">
        <button onClick={e => onClick('7')}>7</button>
        <button onClick={e => onClick('8')}>8</button>
        <button onClick={e => onClick('9')}>9</button>
        <button onClick={e => onClick('*')}>X</button>
      </div>
      <div className="row">
        <button onClick={e => onClick('4')}>4</button>
        <button onClick={e => onClick('5')}>5</button>
        <button onClick={e => onClick('6')}>6</button>
        <button onClick={e => onClick('-')}>-</button>
      </div>
      <div className="row">
        <button onClick={e => onClick('1')}>1</button>
        <button onClick={e => onClick('2')}>2</button>
        <button onClick={e => onClick('3')}>3</button>
        <button onClick={e => onClick('+')}>+</button>
      </div>
      <div className="row">
        <button onClick={e => onClick('0')}>0</button>
        <button onClick={e => onClick('.')}>.</button>
        <button onClick={e => onClick('=')}>=</button>
      </div>
    </div>
  );
}

class App extends Component {
  state = {
    expression: '',
    result: ''
  }

  calculate = (exp) => {
    try {
      this.setState({ result: eval(exp) })
    }
    catch (e) {
      this.clear();
    }
  }

  clear = () => {
    this.setState({ expression: '', result: '' })
  }

  handleClick = (btnValue) => {
    if (btnValue === 'AC') this.clear();
    else if (btnValue === "=") this.calculate(this.state.expression);
    else {
      this.setState({ expression: this.state.expression + btnValue })
    }
  }

  render() {
    const { expression, result } = this.state;

    return (
      <div className="calc">
        <Result expression={expression} result={result} />
        <Rows onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;