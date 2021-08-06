describe('Object.getOwnPropertyDescriptor()', () => {
    const data = { prop: 111 };
    const descriptor = Object.getOwnPropertyDescriptor(data, 'prop');

    it('descriptor default structure', () => {
        const descrIs = {
            configurable: true,
            enumerable: true,
            writable: true,
            value: 111
        };
        expect(descriptor).toEqual(descrIs);
    })

    it('Descriptor configurable', () => {
        // true if and only if the type of this property descriptor
        // may be changed and if the property may be deleted from
        // the corresponding object.
        expect(descriptor?.configurable).toEqual(true);
    })

    it('descriptor value', () => {
        // The value associated with the property
        expect(descriptor?.value).toEqual(111);
    })

    it('descriptor writable', () => {
        // true if and only if the value associated with the
        // property may be changed
        expect(descriptor?.writable).toEqual(true);
    })

    it('descriptor enumerable', () => {
        // true if and only if this property shows up during
        // enumeration of the properties on the corresponding object.
        expect(descriptor?.enumerable).toEqual(true);
    })

    it('get is undefined', () => {
        expect(descriptor?.get).toBeUndefined();
    })

    it('set is undefined', () => {
        expect(descriptor?.set).toBeUndefined();
    })
})

test('data with getter', () => {
    const data = {
        get foo() { return 100; }
    };
    const descr = Object.getOwnPropertyDescriptor(data, 'foo');

    expect(descr?.get).toBeDefined();
})

test('data with setter', () => {
    const data = {
        foo: 'foo',
        set newFoo(value: string) {
            this.foo = value
        }
    };
    const descr = Object.getOwnPropertyDescriptor(data, 'newFoo');

    expect(descr?.set).toBeDefined();
})

test('change descriptor properties', () => {
    const data = {};
    Object.defineProperty(data, 'hello', {
        value: 100500,
        writable: false,
        enumerable: false
    });

    const descr = Object.getOwnPropertyDescriptor(data, 'hello');

    const result = {
        value: 100500,
        writable: false,
        enumerable: false,
        configurable: true
    }

    expect(descr).toEqual(result);
})
