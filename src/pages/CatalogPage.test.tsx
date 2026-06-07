import { render, screen } from '@testing-library/react';
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
});
