# Backlog Técnico y Organización GitHub

## Estado de GitHub

La revisión mediante el conector de GitHub encontró:

- Issues abiertos o cerrados: 0.
- Pull requests abiertos o cerrados: 0.

Este documento define el backlog sugerido para crear issues y organizar milestones. No se crearon issues remotos automáticamente para evitar llenar el repositorio con tareas sin validación del equipo.

## Épicas

| Épica | Objetivo | Módulos |
| --- | --- | --- |
| EPIC-01 Setup y arquitectura | Base técnica, rutas, layout y documentación inicial. | Configuración, routing, UI, documentación. |
| EPIC-02 Catálogo | Productos mock, tarjetas y detalle. | Catálogo, mocks, UI. |
| EPIC-03 Búsqueda y filtros | Consulta avanzada de productos. | Búsqueda, filtros, utilidades. |
| EPIC-04 Autenticación simulada | Registro, login y sesión local. | Autenticación, persistencia, routing. |
| EPIC-05 Carrito y checkout | Gestión de compra simulada. | Carrito, estado global, checkout. |
| EPIC-06 Calidad y cierre | Pruebas, responsive, accesibilidad y sustentación. | Testing, QA, documentación. |

## Issues sugeridos

| Issue | Título | Tipo | Labels | Milestone | Prioridad |
| --- | --- | --- | --- | --- | --- |
| GH-001 | Configurar base React, TypeScript y Vite | task | frontend, setup | Setup | Alta |
| GH-002 | Configurar Tailwind, ESLint y Prettier | task | setup, technical-debt | Setup | Alta |
| GH-003 | Crear rutas base y layout principal | enhancement | frontend, routing | Setup | Alta |
| GH-004 | Definir tipos de dominio | task | frontend, architecture | Setup | Alta |
| GH-005 | Crear dataset mock de productos | task | mocks, catalog | Core Features | Alta |
| GH-006 | Implementar tarjetas de producto | enhancement | frontend, catalog | Core Features | Alta |
| GH-007 | Implementar grilla de catálogo | enhancement | frontend, catalog, responsive | Core Features | Alta |
| GH-008 | Implementar detalle de producto | enhancement | frontend, catalog, routing | Core Features | Alta |
| GH-009 | Implementar búsqueda por nombre | enhancement | frontend, search | Search & Filters | Alta |
| GH-010 | Implementar filtros por categoría, marca y stock | enhancement | frontend, filters | Search & Filters | Alta |
| GH-011 | Implementar filtros por precio y características | enhancement | frontend, filters | Search & Filters | Alta |
| GH-012 | Implementar ordenamiento de catálogo | enhancement | frontend, search | Search & Filters | Media |
| GH-013 | Crear login simulado | enhancement | auth, frontend | Auth | Alta |
| GH-014 | Crear registro simulado | enhancement | auth, frontend | Auth | Alta |
| GH-015 | Persistir usuario en localStorage | enhancement | auth, persistence | Auth | Alta |
| GH-016 | Proteger checkout por sesión | enhancement | auth, routing | Auth | Alta |
| GH-017 | Crear store de carrito con Zustand | enhancement | cart, state | Cart | Alta |
| GH-018 | Agregar productos al carrito | enhancement | cart, catalog | Cart | Alta |
| GH-019 | Editar cantidades y eliminar items | enhancement | cart, frontend | Cart | Alta |
| GH-020 | Validar stock disponible | enhancement | cart, validation | Cart | Alta |
| GH-021 | Calcular subtotales y total | enhancement | cart | Cart | Alta |
| GH-022 | Completar checkout simulado | enhancement | checkout, cart, auth | Cart | Media |
| GH-023 | Agregar pruebas de filtros | testing | testing, filters | Stabilization | Media |
| GH-024 | Agregar pruebas de auth y carrito | testing | testing, auth, cart | Stabilization | Media |
| GH-025 | Agregar pruebas de rutas principales | testing | testing, routing | Stabilization | Media |
| GH-026 | Revisar responsive móvil y escritorio | qa | responsive, frontend | Stabilization | Alta |
| GH-027 | Revisar accesibilidad básica | qa | accessibility, frontend | Stabilization | Media |
| GH-028 | Limpiar deuda técnica | chore | technical-debt | Stabilization | Media |
| GH-029 | Actualizar documentación final | documentation | documentation | Final Delivery | Alta |
| GH-030 | Preparar sustentación y video final | documentation | documentation, delivery | Final Delivery | Alta |

## Labels propuestos

| Label | Uso |
| --- | --- |
| `frontend` | Cambios de UI o comportamiento cliente. |
| `setup` | Configuración inicial o tooling. |
| `architecture` | Decisiones de estructura y diseño técnico. |
| `routing` | Rutas, navegación y protección de páginas. |
| `catalog` | Catálogo, tarjetas y detalle. |
| `search` | Búsqueda y ordenamiento. |
| `filters` | Filtros de productos. |
| `auth` | Registro, login y sesión simulada. |
| `cart` | Carrito, cantidades y totales. |
| `checkout` | Flujo de checkout simulado. |
| `state` | Zustand y estado global. |
| `persistence` | `localStorage` y recuperación de estado. |
| `mocks` | Datos simulados. |
| `validation` | Validaciones de formularios o reglas de negocio. |
| `testing` | Pruebas automatizadas. |
| `qa` | Revisión manual, defectos y estabilización. |
| `responsive` | Ajustes móvil/escritorio. |
| `accessibility` | Semántica, labels, teclado y contraste. |
| `documentation` | README, actas, guiones y planeación. |
| `technical-debt` | Refactor, limpieza y mejoras internas. |
| `urgent` | Bloquea entrega o integración. |

## Milestones propuestos

| Milestone | Semana | Objetivo |
| --- | --- | --- |
| Setup | 1 | Base técnica y documentación inicial. |
| Core Features | 2 | Catálogo, tarjetas y detalle. |
| Search & Filters | 3 | Búsqueda, filtros y ordenamiento. |
| Auth | 4 | Registro, login y protección de checkout. |
| Cart | 5 | Carrito, totales, stock y checkout. |
| Stabilization | 6 | Pruebas, responsive, accesibilidad y deuda técnica. |
| Final Delivery | 6 | Sustentación, video y documentación final. |

## Tablero Kanban sugerido

Columnas:

| Columna | Criterio de entrada | Criterio de salida |
| --- | --- | --- |
| Backlog | Tarea identificada, sin detalle suficiente. | Priorizada y con aceptación clara. |
| Ready | Tarea priorizada, estimada y sin bloqueos. | Miembro asignado inicia trabajo. |
| In Progress | Trabajo activo en rama o commit local. | Implementación lista para revisión. |
| Review | Código o documento listo para revisión del equipo. | Observaciones resueltas. |
| QA | Funcionalidad lista para pruebas manuales o automatizadas. | QA aprobado o defectos creados. |
| Done | Criterios de aceptación cumplidos y evidencias registradas. | No aplica. |

## Política de prioridades

| Prioridad | Criterio |
| --- | --- |
| Alta | Bloquea una entrega, un módulo crítico o una dependencia técnica. |
| Media | Mejora calidad, completitud o experiencia sin bloquear todo el flujo. |
| Baja | Ajuste menor o mejora opcional. |

## Definition of Ready

- La tarea tiene descripción clara.
- Existe responsable sugerido.
- Tiene dependencia identificada.
- Tiene estimación inicial.
- Tiene entregable asociado.
- Tiene criterios de aceptación verificables.

## Definition of Done

- Código o documento completado.
- Revisión por al menos un integrante.
- Lint/build/test ejecutado cuando aplique.
- Evidencia registrada en commit, acta o captura.
- Issue movido a `Done` o marcado como completado.
