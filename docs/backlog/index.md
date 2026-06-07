# Backlog

## Estado

El repositorio no tiene issues ni pull requests registrados al momento de la inspeccion. El seguimiento local marca completadas las tareas de Setup, Core Features y Search & Filters hasta el corte 2026-06-07.

## Epicas

| Epica | Objetivo |
| --- | --- |
| EPIC-01 Setup y arquitectura | Base técnica, rutas, layout y documentación inicial. |
| EPIC-02 Catálogo | Productos mock, tarjetas y detalle. |
| EPIC-03 Búsqueda y filtros | Consulta avanzada de productos. |
| EPIC-04 Autenticación simulada | Registro, login y sesión local. |
| EPIC-05 Carrito y checkout | Gestión de compra simulada. |
| EPIC-06 Calidad y cierre | Pruebas, responsive, accesibilidad y sustentación. |

## Tablero Kanban

```mermaid
flowchart LR
  B[Backlog] --> R[Ready]
  R --> P[In Progress]
  P --> V[Review]
  V --> Q[QA]
  Q --> D[Done]
  Q --> P
```

## Milestones

| Milestone | Semana | Objetivo |
| --- | --- | --- |
| Setup | 1 | Base técnica y documentación inicial. |
| Core Features | 2 | Catálogo, tarjetas y detalle. |
| Search & Filters | 3 | Búsqueda, filtros y ordenamiento. |
| Auth | 4 | Registro, login y proteccion de checkout. |
| Cart | 5 | Carrito, totales, stock y checkout. |
| Stabilization | 6 | Pruebas, responsive, accesibilidad y deuda técnica. |
| Final Delivery | 6 | Sustentación, video y documentación final. |

## Labels sugeridos

| Label | Uso |
| --- | --- |
| `frontend` | Cambios de UI o comportamiento cliente. |
| `setup` | Configuración inicial o tooling. |
| `architecture` | Decisiones de estructura y diseño técnico. |
| `catalog` | Catálogo, tarjetas y detalle. |
| `search` | Búsqueda y ordenamiento. |
| `filters` | Filtros de productos. |
| `auth` | Registro, login y sesión simulada. |
| `cart` | Carrito, cantidades y totales. |
| `testing` | Pruebas automatizadas. |
| `qa` | Revision manual y defectos. |
| `documentation` | README, actas, guiones y planeacion. |
| `technical-debt` | Refactor, limpieza y mejoras internas. |

## Tabla de tareas resumida

| ID | Nombre | Prioridad | Semana | Entrega |
| --- | --- | --- | --- | --- |
| TSP-001 | Setup base | Alta | 1 | Entrega 1 |
| TSP-004 | Definir rutas | Alta | 1 | Entrega 1 |
| TSP-008 | Crear mock de productos | Alta | 2 | Entrega 2 |
| TSP-010 | Completar CatalogPage | Alta | 2 | Entrega 2 |
| TSP-013 | Implementar busqueda | Alta | 3 | Entrega 2 |
| TSP-014 | Implementar filtros basicos | Alta | 3 | Entrega 2 |
| TSP-015 | Implementar filtros avanzados | Alta | 3 | Entrega 2 |
| TSP-016 | Implementar ordenamiento | Media | 3 | Entrega 2 |
| TSP-017 | Validar estado sin resultados | Media | 3 | Entrega 2 |
| TSP-020 | Store de autenticacion | Alta | 4 | Entrega 2 |
| TSP-022 | Store de carrito | Alta | 5 | Entrega 3 |
| TSP-027 | Completar checkout simulado | Media | 5 | Entrega 3 |
| TSP-028 | Pruebas de filtros | Media | 6 | Entrega 3 |
| TSP-031 | Revision responsive | Alta | 6 | Entrega 3 |
| TSP-035 | Preparar sustentación | Alta | 6 | Entrega 3 |

## Estado por tarea al 2026-06-07

| ID | Estado | Evidencia |
| --- | --- | --- |
| TSP-001 a TSP-007 | Done | Base técnica, rutas, layout, tooling y documentación inicial. |
| TSP-008 | Done | `src/data/products.ts` con 20 productos mock. |
| TSP-009 | Done | `src/components/catalog/ProductCard.tsx`. |
| TSP-010 | Done | `src/pages/CatalogPage.tsx` renderiza resumen y grilla. |
| TSP-011 | Done | `src/pages/ProductDetailPage.tsx` resuelve `productId`. |
| TSP-012 | Done | `src/utils/money.ts`. |
| TSP-013 | Done | Búsqueda por nombre, marca, categoría, descripción y características en `CatalogPage`. |
| TSP-014 | Done | Filtros por categoría, marca, precio y disponibilidad. |
| TSP-015 | Done | Filtros por características combinables. |
| TSP-016 | Done | Ordenamiento por nombre, menor precio y mayor precio. |
| TSP-017 | Done | Estado vacío y contador de resultados. |
| TSP-018 a TSP-035 | Backlog | Pendientes según dependencias del roadmap. |

## Fuente completa

Ver [backlog base](../planning/backlog.md).
