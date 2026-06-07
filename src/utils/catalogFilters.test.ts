import { describe, expect, it } from 'vitest';

import { products } from '../data/products';
import { applyProductFilters, defaultProductFilters } from './catalogFilters';

describe('applyProductFilters', () => {
  it('filters products by normalized search query', () => {
    const filteredProducts = applyProductFilters(products, {
      ...defaultProductFilters,
      query: 'bluetooth neo',
    });

    expect(filteredProducts.map((product) => product.id)).toEqual(['audifonos-bluetooth-neo']);
  });

  it('combines category, brand, price and characteristics filters', () => {
    const filteredProducts = applyProductFilters(products, {
      ...defaultProductFilters,
      category: 'Computacion',
      brand: 'KeyLab',
      minPrice: 100000,
      maxPrice: 200000,
      characteristics: ['Conexion USB'],
    });

    expect(filteredProducts.map((product) => product.id)).toEqual(['mouse-ergonomico-pro']);
  });

  it('sorts products by price descending', () => {
    const filteredProducts = applyProductFilters(products, {
      ...defaultProductFilters,
      category: 'Audio',
      sortBy: 'price-desc',
    });

    expect(filteredProducts.map((product) => product.id)).toEqual([
      'microfono-usb-studio',
      'audifonos-bluetooth-neo',
      'parlante-bluetooth-mini',
    ]);
  });
});
