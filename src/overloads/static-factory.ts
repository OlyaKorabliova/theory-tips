/*
    PROS:
        - No logic in constructor.

    CONS:
        - Use of static methods.
        - Caller has to search static methods for initialization.
*/

import { calcSquareFromSidesArray } from './sides.helper';
import { Shape } from './shape.interface';

class RectangularEx3 implements Shape {
  private squareValue: number;

  static fromVoid() {
    return new RectangularEx3(0);
  }

  static fromShape(shape: Shape) {
    return new RectangularEx3(shape.square());
  }

  static fromSideA(a: number) {
    const square = a ** 2;

    return new RectangularEx3(square);
  }

  static fromSidesAB(a: number, b: number) {
    const square = a * b;

    return new RectangularEx3(square);
  }

  static fromSpread(...sides: number[]) {
    const square = calcSquareFromSidesArray(sides);

    return new RectangularEx3(square);
  }

  constructor(square: number) {
    this.squareValue = square;
  }

  square(): number {
    return this.squareValue;
  }
}

const fromVoid = RectangularEx3.fromVoid();
const shapeEx3 = new RectangularEx3(10);
const fromShape = RectangularEx3.fromShape(shapeEx3);
const fromSideA = RectangularEx3.fromSideA(3);
const fromSidesAB = RectangularEx3.fromSidesAB(3, 5);
const fromSpread = RectangularEx3.fromSpread(2, 4, 6);

console.log('----- Static factory methods -----');
console.log('fromVoid', fromVoid.square());
console.log('shape', shapeEx3.square());
console.log('fromShape', fromShape.square());
console.log('fromSideA', fromSideA.square());
console.log('fromSidesAB', fromSidesAB.square());
console.log('fromSpread', fromSpread.square());
