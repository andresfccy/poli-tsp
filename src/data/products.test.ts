import { describe, expect, it } from 'vitest';

import { getProductById, products } from './products';

describe('products mock data', () => {
  it('contains at least 20 products with unique ids', () => {
    const productIds = new Set(products.map((product) => product.id));

    expect(products).toHaveLength(20);
    expect(productIds.size).toBe(products.length);
  });

  it('finds a product by id', () => {
    expect(getProductById('teclado-mecanico-aula')?.name).toBe('Teclado Mecanico Aula');
  });
});
