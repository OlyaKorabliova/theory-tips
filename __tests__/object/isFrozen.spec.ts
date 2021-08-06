test('Object.isFrozen() simple object', () => {
    const obj = { a: 1, b: 2 };
    expect(Object.isFrozen(obj)).toEqual(false);
})

test('Object.isFrozen() with freeze', () => {
    const obj = Object.freeze({ a: 1 });
    expect(Object.isFrozen(obj)).toEqual(true);
})

test('Object.isFrozen() empty object with preventExtensions', () => {
    const obj = Object.preventExtensions({});
    expect(Object.isFrozen(obj)).toEqual(true);
})

test('Object.isFrozen() non-empty object with preventExtensions', () => {
    const obj = Object.preventExtensions({ a: 1 });
    expect(Object.isFrozen(obj)).toEqual(false);
})