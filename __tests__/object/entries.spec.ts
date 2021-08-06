test('Object.entries() simple object', () => {
    const data = { a: 1, b: 2, c: 3 };
    const result = [['a', 1], ['b', 2], ['c', 3]];

    expect(Object.entries(data)).toEqual(result);
})

test('Object.entries() key ordering', () => {
    const data = { 100: 'a', 2: 'b', 7: 'c' };
    const result = [['2', 'b'], ['7', 'c'], ['100', 'a']];

    expect(Object.entries(data)).toEqual(result);
})

test('Object.entries() of string', () => {
    const data = 'foo';
    const result = [['0', 'f'], ['1', 'o'], ['2', 'o']];

    expect(Object.entries(data)).toEqual(result);
})

test('Object.entries() with unenumerable property', () => {
    const data = Object.create(
        {},
        { getFoo: { value() { return this.foo; } } }
    );
    data.foo = 'bar';
    const result = [['foo', 'bar']];

    expect(Object.entries(data)).toEqual(result);
})

test('Object.entries() number', () => {
    const data = 10;
    const result: any = [];

    expect(Object.entries(data)).toEqual(result);
})