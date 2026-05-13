# Roadmap de 6 Semanas

## Resumen visual

| Semana | Foco | Resultado esperado |
| --- | --- | --- |
| 1 | Planeación, setup y arquitectura | Base técnica funcional, rutas, layout y documentación inicial. |
| 2 | Catálogo y detalle | Mock data, tarjetas, grilla responsive y detalle de producto. |
| 3 | Búsqueda y filtros | Búsqueda, filtros avanzados y ordenamiento del catálogo. |
| 4 | Autenticación simulada | Registro, login, sesión persistida y protección de checkout. |
| 5 | Carrito y checkout | Store global, gestión de cantidades, validación de stock y checkout simulado. |
| 6 | QA, estabilización y sustentación | Pruebas, responsive, accesibilidad, documentación final y video. |

## Semana 1 - Planeación y base técnica

Objetivo: formalizar el proyecto y dejar una base ejecutable.

Tareas principales:

- Definir alcance funcional, no funcional y exclusiones.
- Asignar roles TSPi.
- Crear backlog inicial y cronograma.
- Inicializar React, TypeScript, Vite y pnpm.
- Configurar Tailwind, ESLint, Prettier y Vitest.
- Crear rutas base y layout principal.
- Crear tipos de dominio iniciales.
- Registrar evidencias en README y documentación.

Reuniones:

- Launch meeting.
- Revisión de arquitectura.
- Cierre semanal con acta.

Entregable asociado: Entrega 1.

## Semana 2 - Catálogo y detalle

Objetivo: convertir la base en una tienda navegable con productos mock.

Tareas principales:

- Crear dataset de mínimo 20 productos.
- Implementar `ProductCard`.
- Completar `CatalogPage` con grilla responsive.
- Completar `ProductDetailPage` resolviendo `productId`.
- Crear utilidad de formato de moneda.
- Revisar navegación entre catálogo y detalle.

Reuniones:

- Seguimiento de avance.
- Revisión UI de catálogo.
- QA parcial de rutas.

Entregable asociado: avance Entrega 2.

## Semana 3 - Búsqueda y filtros

Objetivo: implementar consulta avanzada sobre el catálogo.

Tareas principales:

- Implementar búsqueda por nombre.
- Implementar filtros por categoría, marca y disponibilidad.
- Implementar filtros por rango de precio y características.
- Implementar ordenamiento por nombre y precio.
- Extraer lógica de filtrado a hook o utilidad testeable.
- Registrar defectos de filtrado y responsive.

Reuniones:

- Revisión de integración catálogo-filtros.
- QA review parcial.
- Refinamiento del backlog.

Entregable asociado: avance Entrega 2.

## Semana 4 - Autenticación simulada

Objetivo: habilitar sesión simulada y proteger el flujo de checkout.

Tareas principales:

- Implementar formulario de registro.
- Implementar formulario de login.
- Crear store de autenticación con Zustand.
- Persistir usuario en `localStorage`.
- Agregar logout en navegación si aplica.
- Proteger checkout cuando no exista sesión.
- Documentar limitaciones de seguridad por tratarse de simulación académica.

Reuniones:

- Revisión funcional de auth.
- Control de defectos.
- Preparación de Entrega 2.

Entregable asociado: Entrega 2.

## Semana 5 - Carrito y checkout

Objetivo: completar el flujo principal de compra simulada.

Tareas principales:

- Crear store global de carrito.
- Agregar productos desde catálogo y detalle.
- Editar cantidades.
- Eliminar productos.
- Validar stock disponible.
- Calcular subtotales y total general.
- Completar checkout simulado con resumen.
- Ejecutar QA funcional de flujo completo.

Reuniones:

- Integración de módulos críticos.
- Revisión de defectos.
- Retrospectiva técnica corta.

Entregable asociado: avance Entrega 3.

## Semana 6 - Estabilización y cierre

Objetivo: cerrar producto, evidencias y sustentación.

Tareas principales:

- Agregar pruebas de filtros, stores y rutas.
- Ejecutar `pnpm lint`, `pnpm build` y `pnpm test`.
- Revisar responsive en móvil y escritorio.
- Revisar accesibilidad básica.
- Limpiar deuda técnica.
- Actualizar README y documentación final.
- Preparar línea de tiempo, conclusiones y video final.
- Realizar retrospectiva final.

Reuniones:

- QA review final.
- Preparación de sustentación.
- Retrospectiva final.

Entregable asociado: Entrega 3.

## Dependencias críticas

| Bloqueador | Tareas dependientes |
| --- | --- |
| Setup base | Rutas, layout, páginas, pruebas. |
| Tipos de dominio | Mock data, catálogo, filtros, auth y carrito. |
| Mock data | Catálogo, detalle, búsqueda, filtros y carrito. |
| Catálogo | Filtros, agregar al carrito y pruebas funcionales. |
| Auth store | Protección de checkout. |
| Cart store | Carrito, checkout y pruebas de totales. |
| QA final | Documentación final y sustentación. |

## Paralelización recomendada

- Semana 1: documentación TSPi y setup técnico pueden avanzar en paralelo.
- Semana 2: mock data y diseño de `ProductCard` pueden avanzar en paralelo si se acuerda el contrato `Product`.
- Semana 3: búsqueda simple y filtros visuales pueden separarse de la lógica pura de filtrado.
- Semana 4: formularios de login y registro pueden desarrollarse en paralelo con el diseño del store.
- Semana 5: UI de carrito y lógica de store pueden avanzar en paralelo, con integración al final de la semana.
- Semana 6: pruebas, documentación y preparación de video pueden dividirse entre Quality, Support y Team Leader.
