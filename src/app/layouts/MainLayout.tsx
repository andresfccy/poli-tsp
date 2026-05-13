import { Menu, Search, ShoppingCart, UserRound } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';

import { cn } from '../../lib/cn';

const navigationItems = [
  { to: '/', label: 'Catalogo' },
  { to: '/cart', label: 'Carrito' },
  { to: '/login', label: 'Ingresar' },
];

export function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-3 font-semibold">
            <span className="grid size-10 place-items-center rounded-md bg-teal-600 text-white">
              <ShoppingCart aria-hidden="true" size={20} />
            </span>
            <span>Tienda TSP</span>
          </NavLink>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Principal">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950',
                    isActive && 'bg-slate-100 text-slate-950',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="grid size-10 place-items-center rounded-md border border-slate-200 bg-white text-slate-700 md:hidden"
              aria-label="Abrir menu"
            >
              <Menu aria-hidden="true" size={20} />
            </button>
            <Search className="hidden text-slate-500 sm:block" aria-hidden="true" size={20} />
            <UserRound className="text-slate-500" aria-hidden="true" size={20} />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}
