test('Object.getOwnPropertyNames() of simple object', () => {
  const data = { a: 1, b: 10, c: 100 };
  const actual = Object.getOwnPropertyNames(data);
  const result = ['a', 'b', 'c'];

  expect(actual).toEqual(result);
});

test('Object.getOwnPropertyNames() of empty object', () => {
  const data = {};
  const actual = Object.getOwnPropertyNames(data);

  expect(actual).toEqual([]);
});

test('Object.getOwnPropertyNames() of object w/ a non-enum prop', () => {
  const data = Object.create(
    {},
    {
      getFoo: {
        value: function () {
          return this.foo;
        },
        enumerable: false,
      },
    }
  );

  data.foo = 'foo';

  const actual = Object.getOwnPropertyNames(data);
  const result = ['getFoo', 'foo'];

  expect(actual).toEqual(result);
});

test('Object.getOwnPropertyNames() of string', () => {
  const data = 'foo';
  const actual = Object.getOwnPropertyNames(data);
  const result = ['0', '1', '2', 'length'];

  expect(actual).toEqual(result);
});

test('Object.getOwnPropertyNames() of array', () => {
  const data = ['a', 'b', 'c', 'd'];
  const actual = Object.getOwnPropertyNames(data);
  const result = ['0', '1', '2', '3', 'length'];

  expect(actual).toEqual(result);
});

test('Object.getOwnPropertyNames() of a number', () => {
  const data = 123;
  const actual = Object.getOwnPropertyNames(data);

  expect(actual).toEqual([]);
});
