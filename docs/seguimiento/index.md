# Seguimiento semanal

## Corte actual

| Campo | Valor |
| --- | --- |
| Fecha de corte | 2026-06-07 |
| Ciclo activo | Cierre de Fase 2 y preparación de Fase 3 |
| Estado técnico | Catálogo y detalle implementados |
| Estado de calidad | `pnpm docs:build` validado para el portal; `lint` general requiere excluir artefactos generados de VitePress |
| Estado documentación | Portal VitePress corregido para renderizar diagramas Mermaid sin colapsar saltos de línea |
| Siguiente fase | Búsqueda, filtros y ordenamiento |

## Resumen ejecutivo

El proyecto completa la base técnica y el módulo de catálogo. Al corte 2026-06-07 ya existe un flujo navegable desde catálogo hacia detalle de producto, con datos mock suficientes para iniciar filtros, carrito y pruebas funcionales.

La planificación se mantiene en ciclos semanales. Como el avance real se concentró en el cierre de Fase 2, el cronograma se reajusta para que Fase 3 inicie el 2026-06-08 con un bloque completo de una semana.

## Ciclos registrados

| Ciclo | Fechas | Foco | Estado | Resultado |
| --- | --- | --- | --- | --- |
| Semana 1 | 2026-05-13 a 2026-05-19 | Planeación, setup y arquitectura | Cerrado | Proyecto Vite/React, rutas base, layout, tooling y documentación inicial. |
| Semana 2 | 2026-05-20 a 2026-05-26 | Catálogo y detalle | Cerrado | Contrato de producto, alcance de mock data y diseño de grilla definidos. |
| Semana 3 | 2026-05-27 a 2026-06-02 | Control y ajuste | Cerrado | Se confirma dependencia crítica: filtros, carrito y checkout requieren catálogo real antes de continuar. |
| Semana 4 | 2026-06-03 a 2026-06-07 | Cierre de Fase 2 | Cerrado | 20 productos mock, `ProductCard`, grilla responsive, detalle por ruta y pruebas iniciales. |

## Burndown cualitativo

| Área | Planeado | Completado | Pendiente |
| --- | --- | --- | --- |
| Setup | 7 tareas | 7 tareas | 0 |
| Catálogo | 5 tareas | 5 tareas | 0 |
| Búsqueda y filtros | 5 tareas | 0 tareas | 5 |
| Auth | 4 tareas | 0 tareas | 4 |
| Carrito y checkout | 6 tareas | 0 tareas | 6 |
| QA final | 8 tareas | 0 tareas | 8 |

## Decisiones del corte

- Mantener datos mock locales en `src/data/products.ts`.
- Usar imágenes remotas de referencia para dar señal visual al catálogo sin incorporar assets pesados al repositorio.
- Dejar el botón de carrito deshabilitado en detalle hasta Fase 5 para no mezclar alcance.
- Agregar pruebas mínimas desde Fase 2 para que el comando `pnpm test` tenga valor desde ahora.
- Replanificar Fase 3 desde el 2026-06-08.
- Corregir el render de diagramas Mermaid del portal para que GitHub Pages no muestre errores de sintaxis en secciones como Mapa del portal.

## Riesgos activos

| Riesgo | Impacto | Mitigación |
| --- | --- | --- |
| Entrega 2 incompleta si filtros y auth se retrasan | Alto | Priorizar filtros en el siguiente ciclo y dejar auth con alcance mínimo funcional. |
| Imágenes externas pueden no cargar sin conexión | Medio | Mantener `alt` descriptivo y considerar assets locales si se requiere demo offline. |
| Crecimiento de lógica en páginas | Medio | Extraer filtros a utilidad pura o hook testeable en Fase 3. |

## Próximo ciclo

| Fecha | Objetivo | Criterio de salida |
| --- | --- | --- |
| 2026-06-08 a 2026-06-14 | Implementar búsqueda, filtros y ordenamiento | El catálogo responde a query, categoría, marca, precio, stock, características y ordenamiento. |
