test('Object.assign() copies content', () => {
    const obj = { a: 1 };
    
    const expected = Object.assign({}, obj);
    
    expect(expected).toEqual(obj);
})

test('Object.assign() merges objects && ref of source obj is saved', () => {
    const o1 = { a: 1 };
    const o2 = { b: 2 };
    const o3 = { c: 3 };
    
    const expected = Object.assign(o1, o2, o3);
    
    expect(expected).toBe(o1);
})

test('Object.assign() merges objects with same properties', () => {
    const o1 = { a: 1, b: 1, c: 1 };
    const o2 = { b: 2, c: 2 };
    const o3 = { c: 3 };
    const result = { a: 1, b: 2, c: 3 };
    
    const expected = Object.assign({}, o1, o2, o3);
    
    expect(expected).toEqual(result);
})

test('Object.assign() wraps primitives and ignores null w/ undefined', () => {
    const v1 = 'abc';
    const v2 = true;
    const v3 = 10;
    const v4 = Symbol('foo');

    const expected = { '0': 'a', '1': 'b', '2': 'c'}

    const actual = Object.assign({}, v1, null, v2, undefined, v3, v4);
    
    expect(actual).toEqual(expected);
})

