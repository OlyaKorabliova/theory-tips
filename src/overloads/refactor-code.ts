/* eslint-disable @typescript-eslint/no-unused-vars */
/*
    PROS:
        - No logic in constructor.
        - No static methods.
        - Most reusable code.

    CONS:
        - Burden on caller to find ways for instantiation.
*/

import { Shape } from './shape.interface';
import { calcSquareFromSidesArray } from './sides.helper';

class RectangularEx7 implements Shape {
  private squareValue: number;

  constructor(square: number) {
    this.squareValue = square;
  }

  square(): number {
    return this.squareValue;
  }
}

class NoParamsRectangular implements Shape {
  square(): number {
    return 0;
  }
}

class IterableOf<T> {
  private value: T | number;

  constructor(...items: T[]) {
    const value = calcSquareFromSidesArray(items);
    this.value = value;
  }
}

const zeroSquareEx5 = new RectangularEx7(0);
const a = new RectangularEx7(new RectangularEx7(100).square());
// const aw = new RectangularEx7(new IterableOf(...[10, 2]));
// const squareItself = new RectangularEx7(100);
// const bothSides = new RectangularEx7(3 * 10);

// const shape = RectangularEx7.fromNumber(squareItself.square());
// const oneSide = RectangularEx7.fromNumber(4 ** 2);

// const spreadArray = RectangularEx7.fromSpread(...[1, 2, 4]);
// const moreParams = RectangularEx7.fromSpread(1, 2, 4);

console.log('----- Refactor code -----');
console.log('zeroSquare', zeroSquareEx5.square());
// console.log('squareItself', squareItself.square());
// console.log('shape', shape.square());
// console.log('oneSide', oneSide.square());
// console.log('bothSides', bothSides.square());
// console.log('spreadArray', spreadArray.square());
// console.log('moreParams', moreParams.square());
