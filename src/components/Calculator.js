import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(buttonrobuttons) {
    super(buttonrobuttons);
    this.state = {
      total: null,
      next: null,
      obuttoneration: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    const result = calculate(this.state, event.target.textContent);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="flex flex-wrap w-screen h-screen">
        <span className="flex w-full h-1/6 bg-slate-500 text-white text-8xl items-center justify-end buttonx-3">
          { total }
          { operation }
          { next }
        </span>
        <button className="greyBttn" type="button" name="AC" onClick={this.handleClick}>AC</button>
        <button className="greyBttn" type="button" name="+/-" onClick={this.handleClick}>+/-</button>
        <button className="greyBttn" type="button" name="%" onClick={this.handleClick}>%</button>
        <button className="orangeBttn" type="button" name="÷" onClick={this.handleClick}>÷</button>
        <button className="greyBttn" type="button" name="7" onClick={this.handleClick}>7</button>
        <button className="greyBttn" type="button" name="8" onClick={this.handleClick}>8</button>
        <button className="greyBttn" type="button" name="9" onClick={this.handleClick}>9</button>
        <button className="orangeBttn" type="button" name="x" onClick={this.handleClick}>x</button>
        <button className="greyBttn" type="button" name="4" onClick={this.handleClick}>4</button>
        <button className="greyBttn" type="button" name="5" onClick={this.handleClick}>5</button>
        <button className="greyBttn" type="button" name="6" onClick={this.handleClick}>6</button>
        <button className="orangeBttn" type="button" name="-" onClick={this.handleClick}>-</button>
        <button className="greyBttn" type="button" name="1" onClick={this.handleClick}>1</button>
        <button className="greyBttn" type="button" name="3" onClick={this.handleClick}>2</button>
        <button className="greyBttn" type="button" name="3" onClick={this.handleClick}>3</button>
        <button className="orangeBttn" type="button" name="+" onClick={this.handleClick}>+</button>
        <button className="greyBttn w-1/2" type="button" name="0" onClick={this.handleClick}>0</button>
        <button className="greyBttn" type="button" name="." onClick={this.handleClick}>.</button>
        <button className="orangeBttn" type="button" name="=" onClick={this.handleClick}>=</button>
      </div>
    );
  }
}

export default Calculator;
