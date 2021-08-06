test('Object.freeze() throws error when try to change', () => {
    const data = { a: 1 };
    
    expect(() => {
        Object.freeze(data);
        data.a = 100;
    }).toThrow();
})

test('Object.freeze() works with the top-level properties only', () => {
    const data = {
        internal: { a: '' }
    };

    Object.freeze(data);
    
    data.internal.a = 'hello';

    expect(data).toEqual({
        internal: { a: 'hello' }
    })

})