/*
    PROS:
        - No logic in constructor.
        - No static methods.
        - Smallest implementation.

    CONS:
        - Burden on the caller to transform constructor input.
        - Duplicated code for argument transformation (e.g. repeat same code
            each time you want to clone a point).
*/

import { Shape } from './shape.interface';

class RectangularEx5 implements Shape {
  private squareValue: number;

  constructor(square: number) {
    this.squareValue = square;
  }

  square(): number {
    return this.squareValue;
  }
}

const zeroSquareEx5 = new RectangularEx5(0);
const squareItself = new RectangularEx5(100);
const shape = new RectangularEx5(squareItself.square());
const oneSide = new RectangularEx5(4 ** 2);
const bothSides = new RectangularEx5(3 * 10);

console.log('----- Single constructor -----');
console.log('zeroSquare', zeroSquareEx5.square());
console.log('squareItself', squareItself.square());
console.log('shape', shape.square());
console.log('oneSide', oneSide.square());
console.log('bothSides', bothSides.square());
