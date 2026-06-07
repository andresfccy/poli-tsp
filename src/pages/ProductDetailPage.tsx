import { ArrowLeft, BadgeCheck, Boxes, ShoppingCart } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import { getProductById } from '../data/products';
import { formatCurrency } from '../utils/money';

export function ProductDetailPage() {
  const { productId } = useParams();
  const product = getProductById(productId);

  if (!product) {
    return (
      <section className="space-y-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
        >
          <ArrowLeft aria-hidden="true" size={16} />
          Volver al catalogo
        </Link>
        <div className="rounded-md border border-slate-200 bg-white p-6">
          <h1 className="text-3xl font-semibold text-slate-950">Producto no encontrado</h1>
          <p className="mt-2 text-slate-600">
            El producto solicitado no existe en el catalogo mock actual.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
      >
        <ArrowLeft aria-hidden="true" size={16} />
        Volver al catalogo
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="overflow-hidden rounded-md border border-slate-200 bg-white">
          <img src={product.image} alt={product.name} className="aspect-[4/3] w-full object-cover" />
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              {product.category}
            </p>
            <h1 className="mt-2 text-4xl font-semibold text-slate-950">{product.name}</h1>
            <p className="mt-2 text-slate-500">{product.brand}</p>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-5">
            <p className="text-3xl font-semibold text-slate-950">
              {formatCurrency(product.price)}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
                <Boxes aria-hidden="true" size={16} />
                {product.stock} unidades disponibles
              </span>
              <span className="inline-flex items-center gap-2 rounded-md bg-teal-50 px-3 py-2 text-sm font-medium text-teal-700">
                <BadgeCheck aria-hidden="true" size={16} />
                Producto mock verificado
              </span>
            </div>
            <button
              type="button"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-3 text-sm font-semibold text-white opacity-70"
              disabled
            >
              <ShoppingCart aria-hidden="true" size={18} />
              Agregar al carrito en Fase 5
            </button>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-950">Descripcion</h2>
            <p className="mt-2 leading-7 text-slate-600">{product.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-950">Caracteristicas</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {product.characteristics.map((characteristic) => (
                <li
                  key={characteristic}
                  className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                >
                  {characteristic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
