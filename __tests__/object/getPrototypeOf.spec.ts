test('Object.getPrototypeOf() of an object [1]', () => {
  const proto = {};
  const obj = Object.create(proto);
  const actual = Object.getPrototypeOf(obj);

  expect(actual).toBe(proto);
});

test('Object.getPrototypeOf() of an object [2]', () => {
  const obj = { a: 123 };
  const actual = Object.getPrototypeOf(obj);

  expect(actual).toBe(Object.prototype);
});

test('Object.getPrototypeOf() of string', () => {
  const data = 'foo';
  const actual = Object.getPrototypeOf(data);

  expect(actual).toBe(String.prototype);
});

test('Object.getPrototypeOf() of number', () => {
  const data = 123;
  const actual = Object.getPrototypeOf(data);

  expect(actual).toBe(Number.prototype);
});

test('Object.getPrototypeOf() of Symbol', () => {
  const data = Symbol(123);
  const actual = Object.getPrototypeOf(data);

  expect(actual).toBe(Symbol.prototype);
});

test('Object.getPrototypeOf() of boolean', () => {
  const data = true;
  const actual = Object.getPrototypeOf(data);

  expect(actual).toBe(Boolean.prototype);
});

test('Object.getPrototypeOf() of object without prototype', () => {
  const actual = Object.getPrototypeOf(Object.prototype);

  expect(actual).toBeNull();
});
