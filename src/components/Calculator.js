import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="flex flex-wrap w-screen h-screen">
        <p className="flex w-full h-1/6 bg-slate-500 text-white text-8xl items-center justify-end px-3">0</p>
        <p className="greyBttn">AC</p>
        <p className="greyBttn">+/-</p>
        <p className="greyBttn">%</p>
        <p className="orangeBttn">÷</p>
        <p className="greyBttn">7</p>
        <p className="greyBttn">8</p>
        <p className="greyBttn">9</p>
        <p className="orangeBttn">x</p>
        <p className="greyBttn">4</p>
        <p className="greyBttn">5</p>
        <p className="greyBttn">6</p>
        <p className="orangeBttn">-</p>
        <p className="greyBttn">1</p>
        <p className="greyBttn">2</p>
        <p className="greyBttn">3</p>
        <p className="orangeBttn">+</p>
        <p className="greyBttn w-1/2">0</p>
        <p className="greyBttn">.</p>
        <p className="orangeBttn">=</p>
      </div>
    );
  }
}

export default Calculator;
