import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import calculate from '../logic/calculate';

export default function Calculator() {
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
    <div className="flex w-screen h-screen flex-wrap justify-between p-8 gap-y-8">
      <h1 className="text-8xl w-4/5">Math Magicians</h1>
      <nav className="flex w-1/5 justify-between text-lg">
        <Link to="/">Home</Link>
        <p>|</p>
        <Link to="/calculator">Calculator</Link>
        <p>|</p>
        <Link to="/quote">Quote</Link>
      </nav>
      <h2 className="text-5xl w-2/4">Let&apos;s do some Math!</h2>
      <div className="flex flex-wrap w-2/4 h-4/5" id="calculator">
        <span className="flex w-full h-1/6 bg-slate-500 text-white text-8xl items-center justify-end buttonx-3 rounded-t-2xl border-slate-600 border-2">
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
        <button className="greyBttn w-1/2 rounded-bl-2xl" type="button" name="0" onClick={handleClick}>0</button>
        <button className="greyBttn" type="button" name="." onClick={handleClick}>.</button>
        <button className="orangeBttn rounded-br-2xl" type="button" name="=" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}
