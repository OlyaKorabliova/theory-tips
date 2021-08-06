test('Object.keys() with simple object', () => {
    const data = { a: 1, b: 2 };
    const result = ['a', 'b'];
    expect(Object.keys(data)).toEqual(result);
})

test('Object.keys() with array', () => {
    const data = ['a', 'b'];
    const result = ['0', '1'];
    expect(Object.keys(data)).toEqual(result);
})

test('Object.keys() key ordering', () => {
    const data = { 100: 'a', 2: 'b', 7: 'c' };
    const result = ['2', '7', '100'];
    expect(Object.keys(data)).toEqual(result);
})

test('Object.keys() with string', () => {
    const data = 'foo';
    const result = ['0', '1', '2'];
    expect(Object.keys(data)).toEqual(result);
})