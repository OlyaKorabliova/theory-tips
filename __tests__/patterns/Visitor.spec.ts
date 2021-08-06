import {
  Bank,
  CleaningAgentVisitor,
  Factory,
  Home,
  InsuranceAgentVisitor,
} from '../../src/patterns/Visitor';

describe('Visitor', () => {
  const insuranceAgentVisitor = new InsuranceAgentVisitor();
  const cleaningAgentVisitor = new CleaningAgentVisitor();
  const home = new Home();
  const factory = new Factory();
  const bank = new Bank();

  test('Insurance agent visits Home', () => {
    const insuranceAgentVisitor = new InsuranceAgentVisitor();
    const result = 'Sell Medical insurance for Home';

    expect(home.accept(insuranceAgentVisitor)).toEqual(result);
  });

  test('Insurance agent visits Factory', () => {
    const result = 'Sell Fire insurance for Factory';

    expect(factory.accept(insuranceAgentVisitor)).toEqual(result);
  });

  test('Cleaning agent visits Bank', () => {
    const result = 'Clean hall at Bank';

    expect(bank.accept(cleaningAgentVisitor)).toEqual(result);
  });

  test('Call cleanHall from Bank when calling accept()', () => {
    bank.cleanHall = jest.fn();

    bank.accept(cleaningAgentVisitor);

    expect(bank.cleanHall).toHaveBeenCalled();
  });
});
