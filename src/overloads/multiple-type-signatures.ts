/*
    PROS:
        - Easy for the caller to see different constructor overloads.

    CONS:
        - Too much logic in constructor.
        - Type checking.
*/

import { calcSquareFromSidesArray } from './sides.helper';
import { Shape } from './shape.interface';

class RectangularEx1 implements Shape {
  private squareValue: number;

  constructor();

  constructor(shape: Shape);

  constructor(a: number);

  constructor(a: number, b: number);

  constructor(...sides: number[]);

  constructor(sides: number[]);

  constructor(aOrSquare?: Shape | number | number[], b?: number) {
    if (typeof aOrSquare === 'undefined' || aOrSquare === null) {
      this.squareValue = 0;
    } else if (aOrSquare instanceof Array) {
      this.squareValue = calcSquareFromSidesArray(aOrSquare);
    } else if (typeof aOrSquare === 'number') {
      if (typeof b === 'undefined' || b === null) {
        this.squareValue = aOrSquare ** 2;
      } else {
        this.squareValue = aOrSquare * b;
      }
    } else {
      this.squareValue = aOrSquare.square();
    }
  }

  square(): number {
    return this.squareValue;
  }
}

const rectSquare1 = new RectangularEx1();
const rectSquare2 = new RectangularEx1(new RectangularEx1(10));
const rectSquare3 = new RectangularEx1(3);
const rectSquare4 = new RectangularEx1(3, 2);
const rectSquare5 = new RectangularEx1(3, 2, 5);
const rectSquare6 = new RectangularEx1([3, 2]);

console.log('----- Multiple type signatures -----');
console.log('rectSquare1', rectSquare1.square());
console.log('rectSquare2', rectSquare2.square());
console.log('rectSquare3', rectSquare3.square());
console.log('rectSquare4', rectSquare4.square());
console.log('rectSquare5', rectSquare5.square());
console.log('rectSquare6', rectSquare6.square());
