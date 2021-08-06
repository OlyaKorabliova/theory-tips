describe('Object.setPrototypeOf()', () => {
  let obj1 = {
    name: '',
    getName: function (): string {
      return this.name;
    },
  };

  let obj2 = {
    name: '',
    sayHello: function (): string {
      return `Hello, ${this.name}`;
    },
  };

  let newObj = Object.create(obj1, {
    name: {
      value: 'Olya',
    },
  });

  Object.setPrototypeOf(newObj, obj2);

  it('check equality w/ new prototype', () => {
    expect(Object.getPrototypeOf(newObj)).toEqual(obj2);
  });

  it('throws an error when try to access prop from old prototype', () => {
    expect(() => {
      newObj.getName();
    }).toThrow();
  });
});
