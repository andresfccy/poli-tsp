# Plan de Proyecto TSPi/SDD - Tienda TSP

## 1. Resumen del estado actual

El repositorio `andresfccy/poli-tsp` contiene una tienda virtual frontend construida con React, TypeScript, Vite y Tailwind CSS. La implementación actual corresponde al cierre de Fase 2: existe configuración de tooling, rutas principales, layout global, tipado inicial de dominio, catálogo con datos mock, tarjetas de producto y detalle navegable por ruta.

La revisión local y del repositorio remoto muestra:

- Rama activa: `master`.
- Remoto: `git@github-personal:andresfccy/poli-tsp.git`.
- Commits principales:
  - `7b5757f chore: initial React storefront setup`.
  - `07ec87a docs: add project roadmap readme`.
- Issues existentes en GitHub: ninguno.
- Pull requests existentes en GitHub: ninguno.
- Estado actual documentado en `README.md`: Fases 1 y 2 completadas al 2026-06-07.

El sistema no tiene todavía búsqueda, filtros, autenticación simulada, store global, carrito ni flujo completo de QA. Estos elementos se planifican progresivamente bajo ciclos semanales con seguimiento TSPi/SDD.

## 2. Definición general del proyecto

### Nombre

Tienda TSP.

### Objetivo general

Construir una tienda virtual frontend tipo SPA que permita consultar productos, buscar y filtrar catálogo, visualizar detalle de producto, gestionar autenticación simulada, administrar un carrito de compras y ejecutar un checkout simulado, aplicando planeación, seguimiento y control de calidad bajo TSPi/SDD.

### Objetivos específicos

- Definir una arquitectura frontend modular, mantenible y sustentable académicamente.
- Implementar un catálogo con datos mock, tarjetas de producto y vista de detalle.
- Incorporar búsqueda, filtros y ordenamiento sobre productos.
- Implementar registro e inicio de sesión simulados con persistencia local.
- Implementar carrito global con validación de stock, subtotales y total.
- Ejecutar pruebas básicas, revisiones de calidad y estabilización antes de la entrega final.
- Mantener evidencias de planeación, reuniones, riesgos, backlog y avance por semanas.

### Enfoque TSPi/SDD

El proyecto se organiza con TSPi para controlar roles, reuniones, estimaciones, seguimiento, riesgos y calidad. La dimensión SDD se refleja en la descomposición progresiva del sistema: alcance, arquitectura, módulos, contratos de datos, tareas técnicas, criterios de aceptación, pruebas y evidencias de evolución.

Artefactos SDD usados en esta planeación:

- Definición del producto y alcance.
- Arquitectura frontend y estructura de carpetas.
- Modelo de dominio inicial.
- Descomposición modular.
- Backlog técnico trazable.
- Dependencias y plan de integración.
- Criterios de aceptación y QA.
- Riesgos técnicos y mitigaciones.

### Alcance funcional

- SPA con rutas públicas para catálogo, detalle, login, registro, carrito, checkout y página 404.
- Catálogo de productos con mínimo 20 registros mock.
- Búsqueda por nombre y filtros por categoría, marca, precio, disponibilidad y características.
- Ordenamiento por nombre y precio.
- Autenticación simulada con `localStorage`.
- Protección lógica de checkout cuando no exista sesión simulada.
- Carrito con agregar, eliminar, actualizar cantidad, validar stock y calcular totales.
- UI responsive para escritorio y móvil.
- Pruebas unitarias/componentes básicas con Vitest y Testing Library.

### Alcance no funcional

- Mantenibilidad mediante TypeScript, carpetas claras y componentes reutilizables.
- Calidad mediante ESLint, Prettier, build de producción y pruebas automatizadas.
- Accesibilidad básica con navegación semántica, labels, estados y contraste suficiente.
- Persistencia local sin backend.
- Rendimiento adecuado para catálogo mock pequeño.
- Documentación académica y técnica en Markdown.

### Exclusiones

- Backend real.
- Base de datos real.
- Pasarela de pagos real.
- Gestión administrativa de productos.
- Envío real de correos.
- Autenticación con proveedores externos.
- Inventario transaccional real.

### Stack tecnológico

| Capa | Tecnología |
| --- | --- |
| Runtime frontend | React 19 |
| Lenguaje | TypeScript |
| Bundler | Vite |
| Ruteo | React Router |
| Estado global planificado | Zustand |
| Estilos | Tailwind CSS |
| Persistencia | `localStorage` |
| Iconografía | Lucide React |
| Utilidades | clsx |
| Testing | Vitest, Testing Library, jsdom |
| Calidad | ESLint, Prettier |
| Package manager | pnpm |

## 3. Arquitectura identificada

La arquitectura actual es una SPA frontend por capas simples:

```text
src/
  app/
    App.tsx                 # Definición de rutas
    layouts/
      MainLayout.tsx        # Shell visual, navegación y Outlet
  lib/
    cn.ts                   # Utilidad para clases condicionales
  components/
    catalog/
      ProductCard.tsx       # Tarjeta reutilizable de producto
  data/
    products.ts             # Dataset mock de 20 productos
  pages/
    CatalogPage.tsx         # Página raíz del catálogo con grilla
    ProductDetailPage.tsx   # Detalle por productId
    CartPage.tsx            # Carrito
    CheckoutPage.tsx        # Checkout simulado
    LoginPage.tsx           # Login simulado
    RegisterPage.tsx        # Registro simulado
    NotFoundPage.tsx        # 404
  styles/
    index.css               # Tailwind y estilos base
  test/
    setup.ts                # Setup de jest-dom para Vitest
  types/
    domain.ts               # Tipos Product, User, Cart y filtros
  utils/
    money.ts                # Formato de moneda
```

### Rutas actuales

| Ruta | Página | Estado |
| --- | --- | --- |
| `/` | `CatalogPage` | Catálogo mock implementado |
| `/products/:productId` | `ProductDetailPage` | Detalle implementado |
| `/cart` | `CartPage` | Placeholder funcional |
| `/checkout` | `CheckoutPage` | Placeholder funcional |
| `/login` | `LoginPage` | Placeholder funcional |
| `/register` | `RegisterPage` | Placeholder funcional |
| `*` | `NotFoundPage` | Implementada básica |

### Arquitectura propuesta para evolución

```text
src/
  components/
    catalog/
    cart/
    auth/
    ui/
  data/
    products.ts
  hooks/
    useFilteredProducts.ts
  stores/
    authStore.ts
    cartStore.ts
  services/
    storage.ts
  utils/
    money.ts
    filters.ts
```

Esta evolución mantiene el nivel adecuado para un proyecto universitario: separación por dominio, sin backend artificial ni abstracciones innecesarias.

## 4. Módulos identificados

| Módulo | Descripción | Dependencias | Complejidad | Prioridad | Responsable sugerido |
| --- | --- | --- | --- | --- | --- |
| Autenticación | Registro, login, sesión simulada y persistencia local. | Tipos `User`, `localStorage`, rutas login/register/checkout. | Media | Alta | Development Manager |
| Catálogo | Listado de productos, tarjetas y detalle. | `Product`, mock data, routing. | Media | Alta | Development Manager |
| Búsqueda | Búsqueda por nombre o texto simple. | Catálogo, filtros, estado local. | Baja | Alta | Developer Frontend |
| Filtros | Categoría, marca, precio, stock y características. | Mock data, `ProductFilters`, catálogo. | Media | Alta | Developer Frontend |
| Carrito | Agregar, eliminar, cantidades, subtotales y total. | Zustand, `CartItem`, catálogo, stock. | Alta | Alta | Development Manager |
| Routing | Navegación principal y rutas base. | React Router, `MainLayout`. | Baja | Alta | Support/Documentation Manager |
| Estado global | Stores de carrito y autenticación. | Zustand, persistencia local. | Media | Alta | Software Architect |
| Persistencia | Guardado de usuario y carrito en `localStorage`. | Stores, servicios de storage. | Media | Media | Development Manager |
| UI | Layout, navegación, responsive, componentes reutilizables. | Tailwind, Lucide, pages. | Media | Alta | Developer Frontend |
| Testing | Setup Vitest, pruebas de rutas, filtros, carrito y auth. | Vitest, Testing Library. | Media | Media | Quality Manager |
| Configuración | Vite, TypeScript, ESLint, Prettier, pnpm. | Archivos raíz. | Baja | Alta | Support/Documentation Manager |
| Utilidades | `cn`, formateo de moneda, filtros puros. | `clsx`, TypeScript. | Baja | Media | Developer Frontend |
| Mocks | Dataset de productos realista para pruebas de UI. | `Product`, imágenes o URLs mock. | Baja | Alta | Planning Manager |

## 5. Breakdown técnico completo

| ID | Tarea | Descripción | Prioridad | Dependencia | Complejidad | Estimación | Semana | Entregable |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TSP-001 | Setup base | Inicializar Vite, React, TypeScript y pnpm. | Alta | Ninguna | Baja | 3 h | 1 | Entrega 1 |
| TSP-002 | Configurar Tailwind | Integrar Tailwind CSS y estilos base. | Alta | TSP-001 | Baja | 2 h | 1 | Entrega 1 |
| TSP-003 | Configurar calidad | Configurar ESLint, Prettier, build y scripts. | Alta | TSP-001 | Baja | 2 h | 1 | Entrega 1 |
| TSP-004 | Definir rutas | Crear rutas base con React Router. | Alta | TSP-001 | Baja | 2 h | 1 | Entrega 1 |
| TSP-005 | Crear layout principal | Header, navegación y shell visual. | Alta | TSP-004 | Baja | 3 h | 1 | Entrega 1 |
| TSP-006 | Definir tipos de dominio | Modelar `Product`, `User`, `Cart` y `ProductFilters`. | Alta | TSP-001 | Baja | 2 h | 1 | Entrega 1 |
| TSP-007 | Documentar arquitectura inicial | Registrar stack, rutas, alcance y exclusiones. | Alta | TSP-001 | Baja | 3 h | 1 | Entrega 1 |
| TSP-008 | Crear mock de productos | Construir dataset de mínimo 20 productos. | Alta | TSP-006 | Baja | 4 h | 2 | Entrega 2 |
| TSP-009 | Crear componente ProductCard | Tarjeta con imagen, nombre, precio, stock y CTA. | Alta | TSP-008 | Media | 5 h | 2 | Entrega 2 |
| TSP-010 | Completar CatalogPage | Renderizar grilla responsive de productos. | Alta | TSP-009 | Media | 5 h | 2 | Entrega 2 |
| TSP-011 | Completar ProductDetailPage | Resolver producto por `productId` y mostrar detalle. | Alta | TSP-008 | Media | 4 h | 2 | Entrega 2 |
| TSP-012 | Crear utilidades de moneda | Formatear precios de forma consistente. | Media | TSP-009 | Baja | 1 h | 2 | Entrega 2 |
| TSP-013 | Implementar búsqueda | Filtrar productos por nombre o texto. | Alta | TSP-010 | Baja | 3 h | 3 | Entrega 2 |
| TSP-014 | Implementar filtros básicos | Categoría, marca y disponibilidad. | Alta | TSP-010 | Media | 5 h | 3 | Entrega 2 |
| TSP-015 | Implementar filtros avanzados | Rango de precio y características. | Alta | TSP-014 | Media | 5 h | 3 | Entrega 2 |
| TSP-016 | Implementar ordenamiento | Ordenar por nombre, precio ascendente y descendente. | Media | TSP-013 | Baja | 2 h | 3 | Entrega 2 |
| TSP-017 | Extraer hook de filtros | Crear `useFilteredProducts` o utilidad pura testeable. | Media | TSP-015 | Media | 3 h | 3 | Entrega 2 |
| TSP-018 | Formularios de login | Crear UI y validaciones básicas de inicio de sesión. | Alta | TSP-006 | Media | 4 h | 4 | Entrega 2 |
| TSP-019 | Formularios de registro | Crear UI y validaciones básicas de registro. | Alta | TSP-006 | Media | 4 h | 4 | Entrega 2 |
| TSP-020 | Store de autenticación | Implementar Zustand y persistencia de usuario. | Alta | TSP-018 | Media | 5 h | 4 | Entrega 2 |
| TSP-021 | Protección de checkout | Redirigir o bloquear checkout sin sesión simulada. | Alta | TSP-020 | Media | 3 h | 4 | Entrega 2 |
| TSP-022 | Store de carrito | Crear store global para items y operaciones. | Alta | TSP-006 | Alta | 6 h | 5 | Entrega 3 |
| TSP-023 | Agregar al carrito | Integrar CTA desde catálogo y detalle. | Alta | TSP-022 | Media | 4 h | 5 | Entrega 3 |
| TSP-024 | Editar cantidades | Incrementar, reducir y eliminar productos. | Alta | TSP-022 | Media | 4 h | 5 | Entrega 3 |
| TSP-025 | Validar stock | Evitar cantidades mayores al inventario mock. | Alta | TSP-024 | Media | 3 h | 5 | Entrega 3 |
| TSP-026 | Calcular totales | Subtotales, total general y estado vacío. | Alta | TSP-022 | Baja | 3 h | 5 | Entrega 3 |
| TSP-027 | Completar checkout simulado | Resumen, confirmación y limpieza opcional del carrito. | Media | TSP-021, TSP-026 | Media | 4 h | 5 | Entrega 3 |
| TSP-028 | Pruebas de filtros | Cubrir búsqueda, filtros y ordenamiento. | Media | TSP-017 | Media | 4 h | 6 | Entrega 3 |
| TSP-029 | Pruebas de stores | Cubrir auth y carrito. | Media | TSP-020, TSP-022 | Media | 4 h | 6 | Entrega 3 |
| TSP-030 | Pruebas de rutas | Verificar render de rutas principales y 404. | Media | TSP-004 | Baja | 3 h | 6 | Entrega 3 |
| TSP-031 | Revisión responsive | Ajustar layout móvil, grillas y formularios. | Alta | TSP-010, TSP-018, TSP-022 | Media | 5 h | 6 | Entrega 3 |
| TSP-032 | Revisión accesibilidad | Labels, navegación por teclado, aria y contraste. | Media | UI consolidada | Media | 4 h | 6 | Entrega 3 |
| TSP-033 | Limpieza técnica | Eliminar duplicación, revisar nombres y dependencias. | Media | Funcionalidad completa | Media | 3 h | 6 | Entrega 3 |
| TSP-034 | Documentación final | Actualizar README y documentación de planeación. | Alta | QA final | Baja | 4 h | 6 | Entrega 3 |
| TSP-035 | Preparar sustentación | Línea de tiempo, evidencias, video y guion. | Alta | TSP-034 | Baja | 5 h | 6 | Entrega 3 |

## 6. Planeación alineada a entregas

### Entrega 1

Enfoque: definición del proyecto y base técnica.

- Definición del proyecto, alcance, exclusiones y stack.
- Roles TSPi iniciales.
- Cronograma preliminar de seis semanas.
- Backlog inicial priorizado.
- Arquitectura inicial y rutas base.
- Setup técnico reproducible.
- Evidencias: README, commits iniciales, estructura de carpetas y scripts.

### Entrega 2

Enfoque: evolución funcional y control parcial.

- Catálogo con mock data y tarjetas.
- Detalle de producto.
- Búsqueda y filtros.
- Autenticación simulada.
- Refinamiento del backlog según hallazgos.
- Registro de defectos y deuda técnica.
- QA parcial sobre catálogo, auth, rutas y responsive base.
- Evidencias: issues planeados, actas, pruebas parciales y commits por módulo.

### Entrega 3

Enfoque: producto consolidado y cierre académico.

- Carrito global y checkout simulado.
- Validaciones de stock y totales.
- Pruebas automatizadas mínimas.
- Revisión responsive y accesibilidad.
- Documentación final.
- Línea de tiempo del proyecto.
- Preparación y grabación del video final.
- Retrospectiva y conclusiones del proceso TSPi.

## 7. Criterios de aceptación globales

- `pnpm install` instala dependencias sin errores.
- `pnpm lint` pasa sin errores críticos.
- `pnpm build` genera build de producción.
- `pnpm test` ejecuta pruebas configuradas.
- El catálogo muestra mínimo 20 productos.
- La búsqueda y filtros modifican correctamente el resultado.
- El detalle resuelve productos por ruta.
- El login y registro simulados persisten sesión local.
- Checkout requiere sesión simulada.
- El carrito permite agregar, eliminar, modificar cantidades y calcular totales.
- La aplicación mantiene navegación responsive y accesibilidad básica.

## 8. Evidencias recomendadas

- Commits por fase o por módulo.
- Capturas de pantalla del avance semanal.
- Actas de reuniones semanales.
- Backlog en Markdown y, si se decide, issues en GitHub.
- Registro de defectos encontrados y corregidos.
- Resultados de `pnpm lint`, `pnpm build` y `pnpm test`.
- Guion y enlace del video de sustentación.
