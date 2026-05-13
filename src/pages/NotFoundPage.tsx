import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Pagina no encontrada</h1>
      <Link className="mt-4 inline-flex text-sm font-medium text-teal-700 hover:text-teal-800" to="/">
        Volver al catalogo
      </Link>
    </section>
  );
}
