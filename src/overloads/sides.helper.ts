export function calcSquareFromSidesArray<T>(sides: number[] | T[]): number {
  if (!sides.length) {
    return 0;
  } if (sides.length === 1 && typeof sides[0] === 'number') {
    return sides[0] ** 2;
  } if (typeof sides[0] === 'number' && typeof sides[1] === 'number') {
    return sides[0] * sides[1];
  }

  return 0;
}
