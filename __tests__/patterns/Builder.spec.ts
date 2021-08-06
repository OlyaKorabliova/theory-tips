import { Chef, BakeryBuilder } from '../../src/patterns/Builder';

describe('Builder', () => {
  const chef = new Chef();
  const cooking = new BakeryBuilder();
  chef.setCooking(cooking);

  it('Standard cookie:', () => {
    const resultIngredients = ['flour', 'water', 'sugar'];
    const resultRecipe = [
      'Add flour',
      'Add water',
      'Add sugar',
      '---> Mix flour & water & sugar',
      '------> Bake on 165 degrees',
    ];

    chef.cookCookie();

    expect(cooking.getCookie().ingredients).toEqual(resultIngredients);
    expect(cooking.getCookie(true).recipe).toEqual(resultRecipe);
  });

  it('Chocolate cookie:', () => {
    const resultIngredients = ['flour', 'water', 'chocolate', 'sugar'];
    const resultRecipe = [
      'Add flour',
      'Add water',
      'Add chocolate',
      'Add sugar',
      '---> Mix flour & water & chocolate & sugar',
      '------> Bake on 180 degrees',
    ];

    chef.cookChocolateCookie();

    expect(cooking.getCookie().ingredients).toEqual(resultIngredients);
    expect(cooking.getCookie(true).recipe).toEqual(resultRecipe);
  });

  it('Mix ingredients:', () => {
    const resultIngredients = ['flour', 'water'];
    const resultRecipe = ['Add flour', 'Add water', '---> Mix flour & water'];

    cooking.addFlour();
    cooking.addWater();
    cooking.mix();

    expect(cooking.getCookie().ingredients).toEqual(resultIngredients);
    expect(cooking.getCookie(true).recipe).toEqual(resultRecipe);
  });

  it('Bake is obligatory', () => {
    chef.cooking.bake = jest.fn();
    chef.cookCookie();

    expect(chef.cooking.bake).toHaveBeenCalled();
  });
});
