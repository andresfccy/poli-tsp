import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { products } from '../data/products';
import { CatalogPage } from './CatalogPage';

describe('CatalogPage', () => {
  it('renders the product catalog with detail links', () => {
    render(
      <MemoryRouter>
        <CatalogPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /productos disponibles/i })).toBeInTheDocument();
    expect(screen.getByText('Audifonos Bluetooth Neo')).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /detalle/i })).toHaveLength(products.length);
  });

  it('filters the catalog by query and category', () => {
    render(
      <MemoryRouter>
        <CatalogPage />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByLabelText(/buscar/i), { target: { value: 'mouse' } });
    fireEvent.change(screen.getByLabelText(/categoria/i), {
      target: { value: 'Computacion' },
    });

    expect(screen.getByText('Mouse Ergonomico Pro')).toBeInTheDocument();
    expect(screen.queryByText('Teclado Mecanico Aula')).not.toBeInTheDocument();
    expect(screen.getByText(`1 de ${products.length} productos encontrados`)).toBeInTheDocument();
  });

  it('shows an empty state when filters have no matches', () => {
    render(
      <MemoryRouter>
        <CatalogPage />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByLabelText(/buscar/i), {
      target: { value: 'producto inexistente' },
    });

    expect(screen.getByText('No hay productos para estos filtros')).toBeInTheDocument();
    expect(screen.queryAllByRole('link', { name: /detalle/i })).toHaveLength(0);
  });
});
