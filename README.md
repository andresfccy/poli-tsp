# Tienda TSP

Catalogo y tienda virtual construida con React y tecnologias modernas. El objetivo es entregar una
SPA funcional para un proyecto academico, con una arquitectura simple, mantenible y facil de
sustentar.

## Objetivo

Construir una tienda virtual frontend que permita registro e inicio de sesion simulado, busqueda de
productos, filtros avanzados, visualizacion de catalogo, detalle de producto, carrito de compras y
checkout simulado.

El proyecto no contempla backend real, base de datos real ni pagos reales. La persistencia inicial se
manejara en `localStorage`.

## Stack

- React
- TypeScript
- Vite
- pnpm
- Tailwind CSS
- React Router
- Zustand
- LocalStorage
- ESLint
- Prettier
- Vitest y Testing Library
- Lucide React
- clsx

## Estado actual

Fase 1 completada:

- Proyecto inicializado con Vite, React y TypeScript.
- Tailwind CSS configurado.
- ESLint y Prettier configurados.
- React Router configurado con rutas base.
- Layout principal creado.
- Estructura base de carpetas creada.
- Tipos de dominio iniciales creados.
- Repositorio Git inicializado y conectado al remote SSH.

Fase 2 completada al 2026-06-07:

- Dataset mock con 20 productos.
- Componente `ProductCard` creado.
- Catálogo renderizado como grilla responsive.
- Detalle de producto resuelto por `productId`.
- Utilidad de formato de moneda creada.
- Pruebas iniciales para dataset y catálogo.

## Scripts

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
pnpm test
```

## Rutas base

- `/`: catalogo.
- `/products/:productId`: detalle de producto.
- `/cart`: carrito de compras.
- `/checkout`: checkout simulado.
- `/login`: inicio de sesion.
- `/register`: registro.

## Estructura inicial

```text
src/
  app/
    App.tsx
    layouts/
      MainLayout.tsx
  lib/
    cn.ts
  pages/
    CartPage.tsx
    CatalogPage.tsx
    CheckoutPage.tsx
    LoginPage.tsx
    NotFoundPage.tsx
    ProductDetailPage.tsx
    RegisterPage.tsx
  styles/
    index.css
  test/
    setup.ts
  types/
    domain.ts
```

## Modelo de dominio esperado

- `Product`: producto del catalogo con nombre, imagen, precio, stock, categoria, marca,
  caracteristicas y descripcion.
- `User`: usuario registrado localmente para autenticacion simulada.
- `CartItem`: item del carrito con producto, cantidad y precio unitario.
- `Cart`: coleccion de items y totales calculados.
- `ProductFilters`: criterios para busqueda basica y avanzada.

## Roadmap por fases

### Fase 1: Base tecnica

- Inicializar proyecto con Vite, React, TypeScript y pnpm.
- Configurar Tailwind CSS.
- Configurar ESLint y Prettier.
- Crear estructura base de carpetas.
- Crear layout principal y rutas.

### Fase 2: Catalogo

- Crear mock data con minimo 20 productos.
- Completar tipos TypeScript del dominio.
- Crear vista de catalogo.
- Crear tarjetas de producto.
- Crear detalle de producto con descripcion ampliada.

### Fase 3: Busqueda y filtros

- Implementar busqueda basica por nombre de producto.
- Implementar filtros avanzados por caracteristicas, categoria, marca, precio y disponibilidad.
- Agregar ordenamiento por nombre o precio si aporta claridad al catalogo.

### Fase 4: Autenticacion simulada

- Implementar registro local.
- Implementar login simulado.
- Persistir usuario en `localStorage`.
- Proteger rutas que requieran sesion, como checkout.

### Fase 5: Carrito

- Implementar carrito global con Zustand.
- Agregar productos al carrito.
- Eliminar productos.
- Modificar cantidades.
- Validar stock disponible.
- Calcular subtotal por producto y total general.

### Fase 6: Calidad y cierre

- Mejorar UI responsive.
- Revisar accesibilidad basica.
- Agregar pruebas unitarias basicas.
- Limpiar codigo.
- Mantener este README como documentacion tecnica minima.

## Criterios de aceptacion

- La aplicacion corre con `pnpm dev`.
- El build de produccion pasa con `pnpm build`.
- El lint pasa con `pnpm lint`.
- El catalogo contiene minimo 20 productos.
- La busqueda basica filtra por nombre.
- La busqueda avanzada filtra por caracteristicas del producto.
- Cada producto muestra detalle ampliado.
- El usuario puede registrarse e iniciar sesion de forma simulada.
- El carrito permite agregar, eliminar y modificar cantidades.
- El sistema valida que la cantidad no exceda el stock.
- El carrito calcula subtotales y total general.
- El checkout es simulado y no procesa pagos reales.

## Skills necesarios

- React moderno con hooks.
- TypeScript.
- Manejo de estado global.
- Diseno responsive con Tailwind CSS.
- Ruteo con React Router.
- Formularios y validaciones.
- Modelado de datos frontend.
- Persistencia en LocalStorage.
- Git y flujo de ramas.
- Pruebas unitarias basicas.
- Accesibilidad basica.
- Organizacion modular de componentes.
