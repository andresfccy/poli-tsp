# Proyecto

## Definición general

Tienda TSP es una SPA frontend para una tienda virtual académica. El producto permite consultar productos, buscar y filtrar catálogo, visualizar detalle, gestionar autenticación simulada, administrar carrito y ejecutar un checkout simulado.

El proyecto se planea con TSPi para controlar roles, reuniones, estimaciones, riesgos y calidad. La dimensión SDD se refleja en la descomposición modular del sistema, el modelo de dominio, la arquitectura, el backlog técnico y los criterios de aceptación.

## Objetivo general

Construir una tienda virtual frontend mantenible y sustentable academicamente, aplicando planeacion, seguimiento y control de calidad bajo TSPi/SDD.

## Alcance funcional

| Area | Alcance |
| --- | --- |
| Catálogo | Listado de productos, tarjetas y detalle por ruta. |
| Búsqueda | Consulta por nombre y criterios principales. |
| Filtros | Categoría, marca, precio, disponibilidad y características. |
| Autenticación | Registro e inicio de sesión simulados con persistencia local. |
| Carrito | Agregar, eliminar, modificar cantidades, validar stock y calcular totales. |
| Checkout | Flujo simulado sin pagos reales. |
| QA | Pruebas basicas, lint, build, responsive y accesibilidad. |

## Exclusiones

- Backend real.
- Base de datos real.
- Pagos reales.
- Panel administrativo.
- Inventario transaccional.
- Autenticación con proveedores externos.

## Stack tecnologico

| Capa | Tecnologia |
| --- | --- |
| UI | React 19 |
| Lenguaje | TypeScript |
| Bundler | Vite |
| Estilos | Tailwind CSS |
| Ruteo | React Router |
| Estado | Zustand |
| Persistencia | localStorage |
| Testing | Vitest, Testing Library, jsdom |
| Calidad | ESLint, Prettier |
| Documentación | VitePress |

## Estado del repositorio

| Elemento | Estado |
| --- | --- |
| Rama principal | `master` |
| Remoto | `git@github-personal:andresfccy/poli-tsp.git` |
| Commits revisados | `7b5757f`, `07ec87a` |
| Issues GitHub | 0 |
| Pull requests GitHub | 0 |
| Fase implementada | Base técnica inicial |

## Enlaces

- [Repositorio GitHub](https://github.com/andresfccy/poli-tsp)
- [Plan maestro](../planning/project-plan.md)
- [Backlog fuente](../planning/backlog.md)
