import React from 'react';
import { Link } from 'react-router-dom';

export default function Quote() {
  return (
    <div className="flex w-screen h-screen flex-wrap p-8">
      <h1 className="text-8xl w-4/5">Math Magicians</h1>
      <nav className="flex w-1/5 justify-between text-lg">
        <Link to="/">Home</Link>
        <p>|</p>
        <Link to="/calculator">Calculator</Link>
        <p>|</p>
        <Link to="/quote">Quote</Link>
      </nav>
      <div className="flex flex-col gap-y-6">
        <h2 className="text-4xl w-full text-center pt-30 px-9 pb-0 h-min">
          “What wonderful power there is in the real numbers,
          since one is in a position to determine uniquely,
          with a single coordinate, the elements of an n-dimensional continuous space.”
        </h2>
        <h2 className="text-3xl w-full text-center pt-0">
          -Georg Cantor
        </h2>
      </div>
    </div>
  );
}
