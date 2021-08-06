interface Component {
  wearClothes(): string;
}

export class Body implements Component {
  public wearClothes(): string {
    return 'Body';
  }
}

export class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public wearClothes(): string {
    return this.component.wearClothes();
  }
}

export class TShirtDecorator extends Decorator {
  public wearClothes(): string {
    return `TShirt( ${super.wearClothes()})`;
  }
}

export class JacketDecorator extends Decorator {
  public wearClothes(): string {
    return `Jacket( ${super.wearClothes()})`;
  }
}

export class RainCoatDecorator extends Decorator {
  public wearClothes(): string {
    return `RainCoat( ${super.wearClothes()})`;
  }
}

// const clientCode = (component: Component) => {
//   console.log('RESULT: ', component.wearClothes());
// };

// const simple = new Body();
// console.log('Client: Simple comp');
// clientCode(simple);
// console.log('---------------------------');

// const decorator1: TShirtDecorator = new TShirtDecorator(simple);
// const decorator2: JacketDecorator = new JacketDecorator(decorator1);
// const decorator3: RainCoatDecorator = new RainCoatDecorator(decorator2);
// console.log('Client: Decorated comp');
// clientCode(decorator2);
// clientCode(decorator3);
