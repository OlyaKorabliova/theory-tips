/*
    PROS:
        - No logic in constructor.
        - No static methods.

    CONS:
        - Very verbose (many proxy classes).
        - Hard to discover variations.
*/

import { calcSquareFromSidesArray } from './sides.helper';
import { Shape } from './shape.interface';

class RectangularEx4 implements Shape {
  private squareValue: number;

  constructor(square: number) {
    this.squareValue = square;
  }

  square(): number {
    return this.squareValue;
  }
}

class WithOneSide implements Shape {
  private shape: Shape;

  constructor(a: number) {
    this.shape = new RectangularEx4(a ** 2);
  }

  square(): number {
    return this.shape.square();
  }
}

class WithBothSides implements Shape {
  private shape: Shape;

  constructor(a: number, b: number) {
    this.shape = new RectangularEx4(a * b);
  }

  square(): number {
    return this.shape.square();
  }
}

class WithSpreadSides implements Shape {
  private shape: Shape;

  constructor(...sides: number[]) {
    const square = calcSquareFromSidesArray(sides);

    this.shape = new RectangularEx4(square);
  }

  square(): number {
    return this.shape.square();
  }
}

class WithSidesArray implements Shape {
  private shape: Shape;

  constructor(sides: number[]) {
    const square = calcSquareFromSidesArray(sides);

    this.shape = new RectangularEx4(square);
  }

  square(): number {
    return this.shape.square();
  }
}

class WithNoParams implements Shape {
  square(): number {
    return 0;
  }
}

class WithShape implements Shape {
  private shape: Shape;

  constructor(shape: Shape) {
    this.shape = new RectangularEx4(shape.square());
  }

  square(): number {
    return this.shape.square();
  }
}

const rectangular = new RectangularEx4(100);
const noParams = new WithNoParams();
const withShape = new WithShape(rectangular);
const withOneSide = new WithOneSide(4);
const withBothSides = new WithBothSides(3, 10);
const withSpreadSides = new WithSpreadSides(3, 4, 6);
const withSidesArray = new WithSidesArray([1, 2, 3]);

console.log('----- Proxy classes with different constructors -----');
console.log('rectangular', rectangular.square());
console.log('noParams', noParams.square());
console.log('withShape', withShape.square());
console.log('withOneSide', withOneSide.square());
console.log('withBothSides', withBothSides.square());
console.log('withSpreadSides', withSpreadSides.square());
console.log('withSidesArray', withSidesArray.square());
