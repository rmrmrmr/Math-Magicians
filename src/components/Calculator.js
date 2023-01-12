import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    const { name } = event.target;
    const newState = calculate(state, name);
    setState(newState);
  };

  return (
    <div className="flex flex-wrap w-screen h-screen">
      <span className="flex w-full h-1/6 bg-slate-500 text-white text-8xl items-center justify-end buttonx-3">
        { state.total }
        { state.operation }
        { state.next }
      </span>
      <button className="greyBttn" type="button" name="AC" onClick={handleClick}>AC</button>
      <button className="greyBttn" type="button" name="+/-" onClick={handleClick}>+/-</button>
      <button className="greyBttn" type="button" name="%" onClick={handleClick}>%</button>
      <button className="orangeBttn" type="button" name="÷" onClick={handleClick}>÷</button>
      <button className="greyBttn" type="button" name="7" onClick={handleClick}>7</button>
      <button className="greyBttn" type="button" name="8" onClick={handleClick}>8</button>
      <button className="greyBttn" type="button" name="9" onClick={handleClick}>9</button>
      <button className="orangeBttn" type="button" name="x" onClick={handleClick}>x</button>
      <button className="greyBttn" type="button" name="4" onClick={handleClick}>4</button>
      <button className="greyBttn" type="button" name="5" onClick={handleClick}>5</button>
      <button className="greyBttn" type="button" name="6" onClick={handleClick}>6</button>
      <button className="orangeBttn" type="button" name="-" onClick={handleClick}>-</button>
      <button className="greyBttn" type="button" name="1" onClick={handleClick}>1</button>
      <button className="greyBttn" type="button" name="3" onClick={handleClick}>2</button>
      <button className="greyBttn" type="button" name="3" onClick={handleClick}>3</button>
      <button className="orangeBttn" type="button" name="+" onClick={handleClick}>+</button>
      <button className="greyBttn w-1/2" type="button" name="0" onClick={handleClick}>0</button>
      <button className="greyBttn" type="button" name="." onClick={handleClick}>.</button>
      <button className="orangeBttn" type="button" name="=" onClick={handleClick}>=</button>
    </div>
  );
};

export default Calculator;
