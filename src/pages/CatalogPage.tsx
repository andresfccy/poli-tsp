import { ProductCard } from '../components/catalog/ProductCard';
import { products } from '../data/products';
import { formatCurrency } from '../utils/money';

export function CatalogPage() {
  const categories = new Set(products.map((product) => product.category));
  const brands = new Set(products.map((product) => product.brand));
  const minPrice = Math.min(...products.map((product) => product.price));
  const maxPrice = Math.max(...products.map((product) => product.price));

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-teal-700">Catalogo</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Productos disponibles</h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Explora el inventario mock de la tienda. Cada producto tiene detalle navegable,
            descripcion ampliada, marca, categoria, precio y stock.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:min-w-[36rem]">
          <div className="rounded-md border border-slate-200 bg-white p-3">
            <dt className="text-xs font-medium text-slate-500">Productos</dt>
            <dd className="mt-1 text-lg font-semibold text-slate-950">{products.length}</dd>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-3">
            <dt className="text-xs font-medium text-slate-500">Categorias</dt>
            <dd className="mt-1 text-lg font-semibold text-slate-950">{categories.size}</dd>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-3">
            <dt className="text-xs font-medium text-slate-500">Marcas</dt>
            <dd className="mt-1 text-lg font-semibold text-slate-950">{brands.size}</dd>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-3">
            <dt className="text-xs font-medium text-slate-500">Rango</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-950">
              {formatCurrency(minPrice)} - {formatCurrency(maxPrice)}
            </dd>
          </div>
        </dl>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
