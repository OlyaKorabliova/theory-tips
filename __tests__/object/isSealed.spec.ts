test('Object.isSealed() false by default', () => {
    const obj = { a: 1 };
    expect(Object.isSealed(obj)).toEqual(false);
})

test('Object.isSealed() empty object with preventExtensions', () => {
    const obj = Object.preventExtensions({});
    expect(Object.isSealed(obj)).toEqual(true);
})

test('Object.isSealed() non-empty object with preventExtensions', () => {
    const obj = Object.preventExtensions({ a: 1 });
    expect(Object.isSealed(obj)).toEqual(false);
})

test('Object.isSealed() with seal', () => {
    const data = {};
    Object.seal(data);
    expect(Object.isSealed(data)).toEqual(true);
})