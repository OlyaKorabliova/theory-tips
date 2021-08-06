test('Object.is() truthy comparisons', () => {
    const foo = { a: 1 };
    const foo2 = foo;
    const r = [
        [25, 25],
        [true, true],
        [false, false],
        ['bar', 'bar'],
        [foo, foo2],
        [-0, -0],
        [null, null],
        [undefined, undefined],
        [NaN, 0/0],
        [NaN, Number.NaN]
    ];

    r.forEach(element => {
        expect(Object.is(element[0], element[1])).toEqual(true)
    });
    
})

test('Object.is() falsy comparisons', () => {
    const foo = { a: 1 };
    const bar = { a: 1 };
    const r = [
        [true, false],
        [[], []],
        ['foo', 'bar'],
        [foo, bar],
        [0, -0],
        [+0, -0]
    ];

    r.forEach(element => {
        expect(Object.is(element[0], element[1])).toEqual(false)
    });
    
})