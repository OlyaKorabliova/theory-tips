import { Singleton } from '../../src/patterns/Singleton';

test('Singleton - both vars contain the same instance', () => {
  const singleton1 = Singleton.getInstance();
  const singleton2 = Singleton.getInstance();

  expect(Object.is(singleton1, singleton2)).toBe(true);
});
