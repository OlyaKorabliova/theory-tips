test('Object.isExtensible() simple object', () => {
    const data = { a: 1, b: 2, c: 3 };
    expect(Object.isExtensible(data)).toEqual(true);
})

test('Object.isExtensible() with number', () => {
    expect(Object.isExtensible(1)).toEqual(false);
})

test('Object.isExtensible() with preventExtensions', () => {
    const data = { a: 1, b: 2, c: 3 };
    Object.preventExtensions(data);
    expect(Object.isExtensible(data)).toEqual(false);
})

test('Object.isExtensible() with seal', () => {
    const data = Object.seal({});
    expect(Object.isExtensible(data)).toEqual(false);
})

test('Object.isExtensible() with freeze', () => {
    const data = Object.freeze({});
    expect(Object.isExtensible(data)).toEqual(false);
})