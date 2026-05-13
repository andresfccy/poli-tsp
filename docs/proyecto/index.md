# Proyecto

## Definicion general

Tienda TSP es una SPA frontend para una tienda virtual academica. El producto permite consultar productos, buscar y filtrar catalogo, visualizar detalle, gestionar autenticacion simulada, administrar carrito y ejecutar un checkout simulado.

El proyecto se planea con TSPi para controlar roles, reuniones, estimaciones, riesgos y calidad. La dimension SDD se refleja en la descomposicion modular del sistema, el modelo de dominio, la arquitectura, el backlog tecnico y los criterios de aceptacion.

## Objetivo general

Construir una tienda virtual frontend mantenible y sustentable academicamente, aplicando planeacion, seguimiento y control de calidad bajo TSPi/SDD.

## Alcance funcional

| Area | Alcance |
| --- | --- |
| Catalogo | Listado de productos, tarjetas y detalle por ruta. |
| Busqueda | Consulta por nombre y criterios principales. |
| Filtros | Categoria, marca, precio, disponibilidad y caracteristicas. |
| Autenticacion | Registro e inicio de sesion simulados con persistencia local. |
| Carrito | Agregar, eliminar, modificar cantidades, validar stock y calcular totales. |
| Checkout | Flujo simulado sin pagos reales. |
| QA | Pruebas basicas, lint, build, responsive y accesibilidad. |

## Exclusiones

- Backend real.
- Base de datos real.
- Pagos reales.
- Panel administrativo.
- Inventario transaccional.
- Autenticacion con proveedores externos.

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
| Documentacion | VitePress |

## Estado del repositorio

| Elemento | Estado |
| --- | --- |
| Rama principal | `master` |
| Remoto | `git@github-personal:andresfccy/poli-tsp.git` |
| Commits revisados | `7b5757f`, `07ec87a` |
| Issues GitHub | 0 |
| Pull requests GitHub | 0 |
| Fase implementada | Base tecnica inicial |

## Enlaces

- [Repositorio GitHub](https://github.com/andresfccy/poli-tsp)
- [Plan maestro](../planning/project-plan.md)
- [Backlog fuente](../planning/backlog.md)
