test('Object.getOwnPropertyDescriptors() of simple object', () => {
  const data = { a: 1, b: 10, c: 100 };
  const descriptors = Object.getOwnPropertyDescriptors(data);
  const defaultProps = {
    writable: true,
    enumerable: true,
    configurable: true,
  };

  const result = {
    a: { value: 1, ...defaultProps },
    b: { value: 10, ...defaultProps },
    c: { value: 100, ...defaultProps },
  };

  expect(descriptors).toEqual(result);
});

test('Object.getOwnPropertyDescriptors() of empty object', () => {
  const data = {};
  const descriptors = Object.getOwnPropertyDescriptors(data);

  expect(descriptors).toEqual({});
});
