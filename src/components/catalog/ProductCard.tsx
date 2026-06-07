import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { Product } from '../../types/domain';
import { formatCurrency } from '../../utils/money';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const stockLabel = product.stock > 0 ? `${product.stock} disponibles` : 'Sin stock';

  return (
    <article className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link to={`/products/${product.id}`} className="block" aria-label={`Ver ${product.name}`}>
        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="space-y-4 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              {product.category}
            </p>
            <h2 className="mt-1 line-clamp-2 text-base font-semibold text-slate-950">
              {product.name}
            </h2>
            <p className="mt-1 text-sm text-slate-500">{product.brand}</p>
          </div>
          <span className="shrink-0 rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
            {stockLabel}
          </span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="text-lg font-semibold text-slate-950">{formatCurrency(product.price)}</p>
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center gap-2 rounded-md bg-teal-700 px-3 py-2 text-sm font-semibold text-white hover:bg-teal-800"
          >
            <Eye aria-hidden="true" size={16} />
            Detalle
          </Link>
        </div>
      </div>
    </article>
  );
}
