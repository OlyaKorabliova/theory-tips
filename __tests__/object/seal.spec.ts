test('Object.seal() can update value', () => {
  const data = { a: 1 };
  Object.seal(data);
  data.a = 100;

  expect(data.a).toEqual(100);
});

test('Object.seal() throws error when try to add new prop', () => {
  const data = { a: 1 };

  expect(() => {
    Object.seal(data);
    Object.assign(data, { b: 'new value' });
  }).toThrow();
});

test('Object.seal() cannot convert data properties to accessors', () => {
  const data = {
    prop: function () {},
    foo: 'bar',
  };
  expect(() => {
    Object.seal(data);
    Object.defineProperty(data, 'foo', {
      get: function () {
        return 'g';
      },
    });
  }).toThrow();
});

test('Object.seal() cannot define new props', () => {
  const data = {
    foo: 'bar',
  };
  expect(() => {
    Object.seal(data);
    Object.defineProperty(data, 'bar', {
      value: 123,
    });
  }).toThrow();
});
