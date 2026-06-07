# QA

## Estrategia

La estrategia de calidad combina revisiones manuales, pruebas automatizadas básicas y validaciones de entrega. El objetivo no es cubrir exhaustivamente todos los casos, sino asegurar que el flujo académico principal sea demostrable y estable.

## Pirámide de pruebas propuesta

```mermaid
flowchart TD
  E2E["Revisión manual flujo completo"] --> Components["Pruebas de rutas y componentes"]
  Components --> Logic["Pruebas de lógica pura"]
  Logic --> Static["Lint, TypeScript y build"]
```

## Comandos de verificación

| Comando | Propósito |
| --- | --- |
| `pnpm lint` | Validar reglas estáticas. |
| `pnpm build` | Validar compilación de la app React. |
| `pnpm test` | Ejecutar pruebas con Vitest. |
| `pnpm docs:build` | Validar build del portal VitePress. |

## Verificación del corte 2026-06-07

| Comando | Resultado |
| --- | --- |
| `vitest --run` | Pasa: 3 archivos, 8 pruebas. |
| `tsc` | Pasa sin errores de tipos. |
| `vite build` | Pasa build de producción de la SPA. |
| `eslint .` | Pasa sin errores. |
| `vitepress build docs` | Pasa build del portal. |

## Casos QA principales

| ID | Caso | Módulo | Resultado esperado |
| --- | --- | --- | --- |
| QA-001 | Abrir catálogo | Routing/Catálogo | La ruta `/` renderiza catálogo. |
| QA-002 | Abrir detalle | Catálogo/Routing | La ruta de producto muestra información ampliada. |
| QA-003 | Buscar producto | Búsqueda | La lista se filtra por texto. |
| QA-004 | Combinar filtros | Filtros | Los criterios se aplican sin errores. |
| QA-004A | Ordenar catálogo | Filtros | Los productos se ordenan por nombre, menor precio o mayor precio. |
| QA-004B | Sin resultados | Filtros | El sistema muestra un estado vacío cuando no hay coincidencias. |
| QA-005 | Registrar usuario | Auth | Se guarda usuario simulado. |
| QA-006 | Iniciar sesión | Auth | Se crea sesión local. |
| QA-007 | Acceder checkout sin sesión | Auth/Routing | El sistema bloquea o redirige. |
| QA-008 | Agregar al carrito | Carrito | El item aparece en carrito. |
| QA-009 | Modificar cantidad | Carrito | Subtotal y total se actualizan. |
| QA-010 | Exceder stock | Carrito | Se muestra validación. |
| QA-011 | Confirmar checkout | Checkout | Se muestra confirmación simulada. |
| QA-012 | Responsive móvil | UI | No hay desbordes ni solapamientos. |

## Definition of Done

- Criterios de aceptación cumplidos.
- Revisor asignado valida la tarea.
- Lint/build/test ejecutados cuando aplique.
- Defectos criticos cerrados o documentados.
- Evidencia registrada.

## Accesibilidad básica

- Formularios con labels visibles o accesibles.
- Botones con nombre accesible.
- Navegacion por teclado en controles principales.
- Contraste suficiente.
- Estados vacios y errores comprensibles.
