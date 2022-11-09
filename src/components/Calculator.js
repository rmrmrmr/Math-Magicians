import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="flex flex-wrap w-screen h-screen">
        <div className="flex w-full h-1/6 bg-slate-500 text-white text-8xl items-center justify-end px-3">0</div>
        <div className="greyBttn">AC</div>
        <div className="greyBttn">+/-</div>
        <div className="greyBttn">%</div>
        <div className="orangeBttn">÷</div>
        <div className="greyBttn">7</div>
        <div className="greyBttn">8</div>
        <div className="greyBttn">9</div>
        <div className="orangeBttn">x</div>
        <div className="greyBttn">4</div>
        <div className="greyBttn">5</div>
        <div className="greyBttn">6</div>
        <div className="orangeBttn">-</div>
        <div className="greyBttn">1</div>
        <div className="greyBttn">2</div>
        <div className="greyBttn">3</div>
        <div className="orangeBttn">+</div>
        <div className="greyBttn w-1/2">0</div>
        <div className="greyBttn">.</div>
        <div className="orangeBttn">AC</div>
      </div>
    );
  }
}

export default Calculator;
