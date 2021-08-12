/*
    PROS: 
        - No logic in constructor.
    
    CONS:
        - Use of static methods.
        - Small burden on caller to discover static methods and to transform input.
*/

import { Shape } from './shape.interface';
import { calcSquareFromSidesArray } from './sides.helper';

class RectangularEx6 implements Shape {
  private squareValue: number;

  static fromNumber(square: number) {
    return new RectangularEx6(square);
  }

  static fromSpread(...sides: number[]) {
    const square = calcSquareFromSidesArray(sides);

    return new RectangularEx6(square);
  }

  constructor(square: number) {
    this.squareValue = square;
  }

  square(): number {
    return this.squareValue;
  }
}

const zeroSquareEx5 = new RectangularEx6(0);
const squareItself = new RectangularEx6(100);
const bothSides = new RectangularEx6(3 * 10);

const shape = RectangularEx6.fromNumber(squareItself.square());
const oneSide = RectangularEx6.fromNumber(4 ** 2);

const spreadArray = RectangularEx6.fromSpread(...[1, 2, 4]);
const moreParams = RectangularEx6.fromSpread(1, 2, 4);

console.log('----- Combination of several approaches -----');
console.log('zeroSquare', zeroSquareEx5.square());
console.log('squareItself', squareItself.square());
console.log('shape', shape.square());
console.log('oneSide', oneSide.square());
console.log('bothSides', bothSides.square());
console.log('spreadArray', spreadArray.square());
console.log('moreParams', moreParams.square());
