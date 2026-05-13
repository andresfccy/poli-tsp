import { Route, Routes } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout';
import { CartPage } from '../pages/CartPage';
import { CatalogPage } from '../pages/CatalogPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { LoginPage } from '../pages/LoginPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { RegisterPage } from '../pages/RegisterPage';

export function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<CatalogPage />} />
        <Route path="products/:productId" element={<ProductDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
