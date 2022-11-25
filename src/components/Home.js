import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
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
      <h2 className="text-5xl w-full">Welcome to our Page!</h2>
      <h3>
        &emsp; Let us consider three distinct systems of things. The things composing the first
        system, we will call points and designate them by the letters A, B, C,. . . ; those of
        the second, we will call straight lines and designate them by the letters a, b, c,. . . ;
        and those of the third system, we will call planes and designate them by the Greek
        letters α, β, γ,. . . The points are called the elements of linear geometry; the points
        and straight lines, the elements of plane geometry; and the points, lines, and planes,
        the elements of the geometry of space or the elements of space. We think of these
        points, straight lines, and planes as having certain mutual relations, which we indicate
        by means of such words as “are situated,” “between,” “parallel,” “congruent,” “continuous,”
        etc. The complete and exact description of these relations follows as a consequence of
        the axioms of geometry. These axioms may be arranged
        in five groups. Each of these groups expresses, by itself, certain related fundamental
        facts of our intuition. We will name these groups as follows:
        <br />
        &emsp; Let us consider three distinct systems of things. The things composing the first
        system, we will call points and designate them by the letters A, B, C,. . . ; those of
        the second, we will call straight lines and designate them by the letters a, b, c,. . . ;
        and those of the third system, we will call planes and designate them by the Greek
        letters α, β, γ,. . . The points are called the elements of linear geometry; the points
        and straight lines, the elements of plane geometry; and the points, lines, and planes,
        the elements of the geometry of space or the elements of space. We think of these
        points, straight lines, and planes as having certain mutual relations, which we indicate
        by means of such words as “are situated,” “between,” “parallel,” “congruent,” “continuous,”
        etc. The complete and exact description of these relations follows as a consequence of
        the axioms of geometry. These axioms may be arranged
        in five groups. Each of these groups expresses, by itself, certain related fundamental
        facts of our intuition. We will name these groups as follows:
        <br />
        &emsp; Let us consider three distinct systems of things. The things composing the first
        system, we will call points and designate them by the letters A, B, C,. . . ; those of
        the second, we will call straight lines and designate them by the letters a, b, c,. . . ;
        and those of the third system, we will call planes and designate them by the Greek
        letters α, β, γ,. . . The points are called the elements of linear geometry; the points
        and straight lines, the elements of plane geometry; and the points, lines, and planes,
        the elements of the geometry of space or the elements of space. We think of these
        points, straight lines, and planes as having certain mutual relations, which we indicate
        by means of such words as “are situated,” “between,” “parallel,” “congruent,” “continuous,”
        etc. The complete and exact description of these relations follows as a consequence of
        the axioms of geometry. These axioms may be arranged
        in five groups. Each of these groups expresses, by itself, certain related fundamental
        facts of our intuition. We will name these groups as follows:
        <br />
        (from
        <em> The Foundations of geometry </em>
        by David Hilbert)
      </h3>
    </div>
  );
}
