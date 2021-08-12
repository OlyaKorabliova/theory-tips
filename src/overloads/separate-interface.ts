/*
    PROS: 
        - Constructor logic got simpler (only need to check if member is present).
    
    CONS:
        - Ambiguous arguments interface (harder for the caller to work with the class).
        - Still contains logic in constructor.
*/

import { calcSquareFromSidesArray } from './sides.helper';
import { Shape } from './shape.interface';

interface ShapeParams {
  shape?: Shape;
  sides?: number[];
  a?: number;
  ab?: { a: number; b: number };
}

class RectangularEx2 implements Shape {
  private squareValue: number;

  constructor(params?: ShapeParams) {
    if (!params) {
      this.squareValue = 0;
    } else if (params.shape) {
      this.squareValue = params.shape.square();
    } else if (params.sides) {
      this.squareValue = calcSquareFromSidesArray(params.sides);
    } else if (typeof params.a !== 'undefined') {
      this.squareValue = params.a ** 2;
    } else if (params.ab) {
      this.squareValue = params.ab.a * params.ab.b;
    } else {
      this.squareValue = 0;
    }
  }

  square(): number {
    return this.squareValue;
  }
}

const zeroSquare = new RectangularEx2();
const sideA = new RectangularEx2({ a: 10 });
const shape = new RectangularEx2({ shape: sideA });
const sides = new RectangularEx2({ sides: [3, 2] });
const sidesAB = new RectangularEx2({ ab: { a: 4, b: 5 } });
const shape_firstValue = new RectangularEx2({
  sides: [3, 2],
  shape: sideA,
  ab: { a: 4, b: 5 },
});

console.log('----- Separate interface for arguments -----');
console.log('zeroSquare', zeroSquare.square());
console.log('sideA', sideA.square());
console.log('shape', shape.square());
console.log('sides', sides.square());
console.log('sidesAB', sidesAB.square());
console.log('shape_firstValue', shape_firstValue.square());
