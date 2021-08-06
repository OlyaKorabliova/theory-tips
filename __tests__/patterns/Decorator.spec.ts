import {
  Body,
  JacketDecorator,
  RainCoatDecorator,
  TShirtDecorator,
} from '../../src/patterns/Decorator';

describe('Decorator', () => {
  test('Return Body without any decorators', () => {
    const body = new Body();

    expect(body.wearClothes()).toEqual('Body');
  });

  test('Ready for bad cold weather', () => {
    const result = 'RainCoat( Jacket( TShirt( Body)))';
    const body = new Body();

    const decorator1: TShirtDecorator = new TShirtDecorator(body);
    const decorator2: JacketDecorator = new JacketDecorator(decorator1);
    const decorator3: RainCoatDecorator = new RainCoatDecorator(decorator2);
    expect(decorator3.wearClothes()).toEqual(result);
  });

  test('Calls wearClothes at all levels', () => {
    const body = new Body();
    const decorator1: TShirtDecorator = new TShirtDecorator(body);
    const decorator2: JacketDecorator = new JacketDecorator(decorator1);

    body.wearClothes = jest.fn();
    decorator2.wearClothes();

    expect(body.wearClothes).toHaveBeenCalled();
  });
});
