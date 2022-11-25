import React from 'react';
import { Link } from 'react-router-dom';

export default function Quote() {
  return (
    <div className="flex w-screen flex-wrap justify-between p-8 gap-y-8">
      <h1 className="text-8xl w-4/5">Math Magicians</h1>
      <nav className="flex w-1/5 justify-between text-lg">
        <Link to="/">Home</Link>
        <p>|</p>
        <Link to="/calculator">Calculator</Link>
        <p>|</p>
        <Link to="/quote">Quote</Link>
      </nav>
      <h2 className="text-4xl w-full text-center pt-40 px-9 pb-0">
        “What wonderful power there is in the real numbers,
        since one is in a position to determine uniquely,
        with a single coordinate, the elements of an n-dimensional continuous space.”
      </h2>
      <h2 className="text-3xl w-full text-center pt-0">
        -Georg Cantor
      </h2>
    </div>
  );
}
