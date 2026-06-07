import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useMemo, useState } from 'react';

import { ProductCard } from '../components/catalog/ProductCard';
import { products } from '../data/products';
import type { ProductFilters } from '../types/domain';
import { applyProductFilters, defaultProductFilters } from '../utils/catalogFilters';
import { formatCurrency } from '../utils/money';

export function CatalogPage() {
  const [filters, setFilters] = useState<ProductFilters>(defaultProductFilters);

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))].toSorted(),
    [],
  );
  const brands = useMemo(
    () => [...new Set(products.map((product) => product.brand))].toSorted(),
    [],
  );
  const characteristics = useMemo(
    () => [...new Set(products.flatMap((product) => product.characteristics))].toSorted(),
    [],
  );
  const minPrice = Math.min(...products.map((product) => product.price));
  const maxPrice = Math.max(...products.map((product) => product.price));
  const filteredProducts = useMemo(() => applyProductFilters(products, filters), [filters]);

  const updateFilter = <Key extends keyof ProductFilters>(key: Key, value: ProductFilters[Key]) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      [key]: value,
    }));
  };

  const toggleCharacteristic = (characteristic: string) => {
    setFilters((currentFilters) => {
      const isSelected = currentFilters.characteristics.includes(characteristic);

      return {
        ...currentFilters,
        characteristics: isSelected
          ? currentFilters.characteristics.filter((item) => item !== characteristic)
          : [...currentFilters.characteristics, characteristic],
      };
    });
  };

  const resetFilters = () => {
    setFilters(defaultProductFilters);
  };

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-teal-700">Catalogo</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Productos disponibles</h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Explora el inventario mock de la tienda con busqueda, filtros combinables,
            ordenamiento, detalle navegable, descripcion, marca, categoria, precio y stock.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:min-w-[36rem]">
          <div className="rounded-md border border-slate-200 bg-white p-3">
            <dt className="text-xs font-medium text-slate-500">Productos</dt>
            <dd className="mt-1 text-lg font-semibold text-slate-950">{products.length}</dd>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-3">
            <dt className="text-xs font-medium text-slate-500">Categorias</dt>
            <dd className="mt-1 text-lg font-semibold text-slate-950">{categories.length}</dd>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-3">
            <dt className="text-xs font-medium text-slate-500">Marcas</dt>
            <dd className="mt-1 text-lg font-semibold text-slate-950">{brands.length}</dd>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-3">
            <dt className="text-xs font-medium text-slate-500">Rango</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-950">
              {formatCurrency(minPrice)} - {formatCurrency(maxPrice)}
            </dd>
          </div>
        </dl>
      </div>

      <div className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div className="grid flex-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <label className="md:col-span-2 xl:col-span-1">
              <span className="text-sm font-medium text-slate-700">Buscar</span>
              <span className="mt-1 flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 focus-within:border-teal-700 focus-within:ring-2 focus-within:ring-teal-100">
                <Search aria-hidden="true" size={18} className="text-slate-500" />
                <input
                  type="search"
                  value={filters.query}
                  onChange={(event) => updateFilter('query', event.target.value)}
                  placeholder="Nombre, marca o característica"
                  className="w-full bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400"
                />
              </span>
            </label>

            <label>
              <span className="text-sm font-medium text-slate-700">Categoria</span>
              <select
                value={filters.category ?? ''}
                onChange={(event) => updateFilter('category', event.target.value || undefined)}
                className="mt-1 h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
              >
                <option value="">Todas</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className="text-sm font-medium text-slate-700">Marca</span>
              <select
                value={filters.brand ?? ''}
                onChange={(event) => updateFilter('brand', event.target.value || undefined)}
                className="mt-1 h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
              >
                <option value="">Todas</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className="text-sm font-medium text-slate-700">Ordenar</span>
              <select
                value={filters.sortBy ?? 'name-asc'}
                onChange={(event) =>
                  updateFilter('sortBy', event.target.value as ProductFilters['sortBy'])
                }
                className="mt-1 h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
              >
                <option value="name-asc">Nombre A-Z</option>
                <option value="price-asc">Menor precio</option>
                <option value="price-desc">Mayor precio</option>
              </select>
            </label>

            <label>
              <span className="text-sm font-medium text-slate-700">Precio minimo</span>
              <input
                type="number"
                min={minPrice}
                max={maxPrice}
                step="1000"
                value={filters.minPrice ?? ''}
                onChange={(event) =>
                  updateFilter(
                    'minPrice',
                    event.target.value ? Number(event.target.value) : undefined,
                  )
                }
                placeholder={formatCurrency(minPrice)}
                className="mt-1 h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
              />
            </label>

            <label>
              <span className="text-sm font-medium text-slate-700">Precio maximo</span>
              <input
                type="number"
                min={minPrice}
                max={maxPrice}
                step="1000"
                value={filters.maxPrice ?? ''}
                onChange={(event) =>
                  updateFilter(
                    'maxPrice',
                    event.target.value ? Number(event.target.value) : undefined,
                  )
                }
                placeholder={formatCurrency(maxPrice)}
                className="mt-1 h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
              />
            </label>

            <label className="flex items-center gap-3 self-end rounded-md border border-slate-200 px-3 py-2">
              <input
                type="checkbox"
                checked={filters.inStockOnly}
                onChange={(event) => updateFilter('inStockOnly', event.target.checked)}
                className="size-4 rounded border-slate-300 text-teal-700 focus:ring-teal-700"
              />
              <span className="text-sm font-medium text-slate-700">Solo disponibles</span>
            </label>
          </div>

          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-slate-300 px-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            <X aria-hidden="true" size={16} />
            Limpiar
          </button>
        </div>

        <div className="mt-5 border-t border-slate-200 pt-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-700">
            <SlidersHorizontal aria-hidden="true" size={16} />
            Caracteristicas
          </div>
          <div className="flex flex-wrap gap-2">
            {characteristics.map((characteristic) => {
              const isSelected = filters.characteristics.includes(characteristic);

              return (
                <label
                  key={characteristic}
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 hover:bg-slate-100"
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleCharacteristic(characteristic)}
                    className="size-4 rounded border-slate-300 text-teal-700 focus:ring-teal-700"
                  />
                  {characteristic}
                </label>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-slate-700">
          {filteredProducts.length} de {products.length} productos encontrados
        </p>
        <p className="text-sm text-slate-500">
          Los filtros se aplican en tiempo real y pueden combinarse.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="rounded-md border border-dashed border-slate-300 bg-white p-8 text-center">
          <h2 className="text-lg font-semibold text-slate-950">
            No hay productos para estos filtros
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Ajusta la busqueda, el rango de precio o las caracteristicas seleccionadas.
          </p>
        </div>
      )}
    </section>
  );
}
