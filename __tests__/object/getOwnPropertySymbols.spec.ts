test('Object.getOwnPropertySymbols() of simple object without Symbol props', () => {
  const data = { a: 1, b: 10, c: 100 };
  const actual = Object.getOwnPropertySymbols(data);

  expect(actual).toEqual([]);
});

test('Object.getOwnPropertySymbols() of empty object', () => {
  const data = {};
  const actual = Object.getOwnPropertySymbols(data);

  expect(actual).toEqual([]);
});

test('Object.getOwnPropertySymbols() of object w/ a Symbol prop', () => {
  const a = Symbol('a');
  const b = Symbol.for('b');

  const data = {
    [a]: 'localSymbol',
    [b]: 'globalSymbol',
  };

  const actual = Object.getOwnPropertySymbols(data);
  const result = [a, b];

  expect(actual).toEqual(result);
});
