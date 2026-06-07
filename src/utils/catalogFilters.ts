import type { Product, ProductFilters } from '../types/domain';

export const defaultProductFilters: ProductFilters = {
  query: '',
  inStockOnly: false,
  characteristics: [],
  sortBy: 'name-asc',
};

function normalizeSearchValue(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function productMatchesQuery(product: Product, query: string) {
  const normalizedQuery = normalizeSearchValue(query);

  if (!normalizedQuery) {
    return true;
  }

  const searchableText = [
    product.name,
    product.brand,
    product.category,
    product.description,
    product.characteristics.join(' '),
  ].join(' ');

  return normalizeSearchValue(searchableText).includes(normalizedQuery);
}

function productMatchesCharacteristics(product: Product, selectedCharacteristics: string[]) {
  if (selectedCharacteristics.length === 0) {
    return true;
  }

  return selectedCharacteristics.every((characteristic) =>
    product.characteristics.includes(characteristic),
  );
}

export function applyProductFilters(products: Product[], filters: ProductFilters) {
  const filteredProducts = products.filter((product) => {
    const matchesCategory = !filters.category || product.category === filters.category;
    const matchesBrand = !filters.brand || product.brand === filters.brand;
    const matchesMinPrice = filters.minPrice === undefined || product.price >= filters.minPrice;
    const matchesMaxPrice = filters.maxPrice === undefined || product.price <= filters.maxPrice;
    const matchesStock = !filters.inStockOnly || product.stock > 0;

    return (
      productMatchesQuery(product, filters.query) &&
      matchesCategory &&
      matchesBrand &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesStock &&
      productMatchesCharacteristics(product, filters.characteristics)
    );
  });

  return filteredProducts.toSorted((a, b) => {
    switch (filters.sortBy) {
      case 'price-asc':
        return a.price - b.price || a.name.localeCompare(b.name);
      case 'price-desc':
        return b.price - a.price || a.name.localeCompare(b.name);
      case 'name-asc':
      default:
        return a.name.localeCompare(b.name);
    }
  });
}
