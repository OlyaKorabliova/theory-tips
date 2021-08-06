interface Builder {
  addFlour(): void;
  addWater(): void;
  addSugar(): void;
  addChocolate(): void;
  mix(): void;
  bake(temprature: number): void;
}

export class BakeryBuilder implements Builder {
  cookie!: Cookie;

  constructor() {
    this.clean();
  }

  clean = (): void => {
    this.cookie = new Cookie();
  };

  updateRecipe = (ingredient: string) => {
    this.cookie.ingredients.push(ingredient);
    this.cookie.recipe.push(`Add ${ingredient}`);
  };

  addFlour = (): void => {
    this.updateRecipe('flour');
  };

  addWater = (): void => {
    this.updateRecipe('water');
  };

  addSugar = (): void => {
    this.updateRecipe('sugar');
  };

  addChocolate = (): void => {
    this.updateRecipe('chocolate');
  };

  mix = (): void => {
    const mixture = this.cookie.ingredients.join(' & ');
    this.cookie.recipe.push(`---> Mix ${mixture}`);
  };

  bake = (temprature: number): void => {
    this.cookie.recipe.push(`------> Bake on ${temprature} degrees`);
  };

  getCookie = (clean: boolean = false): Cookie => {
    const result = this.cookie;
    clean && this.clean();

    return result;
  };
}

class Cookie {
  ingredients: string[] = [];
  recipe: string[] = [];

  showIngredients = (): string => {
    return `Ingredients: ${this.ingredients.join(', ')}`;
  };

  showRecipe = (): string => {
    return `The cookie recipe is: ${this.recipe}`;
  };
}

export class Chef {
  cooking!: Builder;

  setCooking = (cooking: Builder): void => {
    this.cooking = cooking;
  };

  cookCookie = (): void => {
    this.cooking.addFlour();
    this.cooking.addWater();
    this.cooking.addSugar();

    this.cooking.mix();

    this.cooking.bake(165);
  };

  cookChocolateCookie = (): void => {
    this.cooking.addFlour();
    this.cooking.addWater();
    this.cooking.addChocolate();
    this.cooking.addSugar();

    this.cooking.mix();

    this.cooking.bake(180);
  };
}

// const chef = new Chef();
// const cooking = new BakeryBuilder();
// chef.setCooking(cooking);

// console.log('Standard cookie:');
// chef.cookCookie();
// cooking.getCookie().showIngredients();
// cooking.getCookie(true).showRecipe();

// console.log('\nChocolate cookie:');
// chef.cookChocolateCookie();
// cooking.getCookie().showIngredients();
// cooking.getCookie(true).showRecipe();

// console.log('\nCustom cookie:');
// cooking.addFlour();
// cooking.addWater();
// cooking.getCookie().showIngredients();
// cooking.getCookie(true).showRecipe();
