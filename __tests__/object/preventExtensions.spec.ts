test('Object.preventExtensions() saves ref', () => {
    const obj = {}
    const obj1 = Object.preventExtensions(obj);
    expect(obj).toBe(obj1);
})

test('Object.preventExtensions() make obj non-extensible', () => {
    const obj = Object.preventExtensions({});
    expect(Object.isExtensible(obj)).toEqual(false);
})

test('Object.preventExtensions() make obj frozen', () => {
    const obj = Object.preventExtensions({});
    expect(Object.isFrozen(obj)).toEqual(true);
})

test('Object.preventExtensions() make obj sealed', () => {
    const obj = Object.preventExtensions({});
    expect(Object.isSealed(obj)).toEqual(true);
})

test('Object.preventExtensions() make obj sealed', () => {
    const object1 = {};
    Object.preventExtensions(object1);

    expect(() => {
        Object.defineProperty(object1, 'property1', {
        value: 42
    })}).toThrow();
})
