import type { Category, Product } from '../src/alias';

describe('Alias', function () {
  it('should support alias type', function () {
    const category: Category = {
      id: '1',
      name: 'Handphone',
    };

    const product: Product = {
      id: 1,
      name: 'Redmi Note 8',
      price: 2_000_000,
      category: category,
    };

    console.info(category);
    console.info(product);
  });
});
