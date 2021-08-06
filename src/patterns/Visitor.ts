interface Visitor {
  visitHome(home: Home): string;
  visitBank(bank: Bank): string;
  visitFactory(factory: Factory): string;
}

interface Building {
  accept(visitor: Visitor): string;
}

export class InsuranceAgentVisitor implements Visitor {
  visitHome(home: Home): string {
    return `${home.sellMedicalInsurance()} for Home`;
  }

  visitBank(bank: Bank): string {
    return `${bank.sellTheftInsurance()} for Bank`;
  }

  visitFactory(factory: Factory): string {
    return `${factory.sellFireInsurance()} for Factory`;
  }
}

export class CleaningAgentVisitor implements Visitor {
  visitHome(home: Home): string {
    return `${home.cleanHomeKitchen()} at Home`;
  }

  visitBank(bank: Bank): string {
    return `${bank.cleanHall()} at Bank`;
  }

  visitFactory(factory: Factory): string {
    return `${factory.cleanToilets()} at Factory`;
  }
}

export class Home implements Building {
  accept(visitor: Visitor): string {
    return visitor.visitHome(this);
  }

  sellMedicalInsurance(): string {
    return 'Sell Medical insurance';
  }

  cleanHomeKitchen(): string {
    return 'Clean kitchen';
  }
}

export class Bank implements Building {
  accept(visitor: Visitor): string {
    return visitor.visitBank(this);
  }

  sellTheftInsurance(): string {
    return 'Sell Theft insurance';
  }

  cleanHall(): string {
    return 'Clean hall';
  }
}

export class Factory implements Building {
  accept(visitor: Visitor): string {
    return visitor.visitFactory(this);
  }

  sellFireInsurance(): string {
    return 'Sell Fire insurance';
  }

  cleanToilets(): string {
    return 'Clean toilets';
  }
}

// const insuranceAgentVisitor = new InsuranceAgentVisitor();
// const cleaningAgentVisitor = new CleaningAgentVisitor();

// const home = new Home();
// const factory = new Factory();

// console.log(home.accept(insuranceAgentVisitor));

// console.log(factory.accept(cleaningAgentVisitor));
