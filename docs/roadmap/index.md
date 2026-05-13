# Roadmap

## Línea de tiempo de 6 semanas

```mermaid
gantt
  title Roadmap Tienda TSP
  dateFormat  YYYY-MM-DD
  axisFormat  Semana %W
  section Entrega 1
  Planeación y setup técnico        :done,    s1, 2026-05-13, 7d
  Arquitectura y rutas base         :done,    s1b, 2026-05-13, 7d
  section Entrega 2
  Catálogo y detalle                :active,  s2, 2026-05-20, 7d
  Búsqueda y filtros                :         s3, 2026-05-27, 7d
  Autenticación simulada            :         s4, 2026-06-03, 7d
  section Entrega 3
  Carrito y checkout                :         s5, 2026-06-10, 7d
  QA, estabilización y sustentación :         s6, 2026-06-17, 7d
```

## Roadmap visual

| Semana | Foco | Resultado |
| --- | --- | --- |
| 1 | Planeación, setup y arquitectura | Base técnica funcional y plan TSPi/SDD. |
| 2 | Catálogo y detalle | Mock data, tarjetas y detalle navegable. |
| 3 | Búsqueda y filtros | Catálogo consultable con filtros y ordenamiento. |
| 4 | Autenticación simulada | Registro, login, persistencia y checkout protegido. |
| 5 | Carrito y checkout | Store global, stock, totales y checkout simulado. |
| 6 | QA y sustentación | Pruebas, responsive, accesibilidad, documentación y video. |

## Dependencias principales

```mermaid
flowchart TD
  Setup["Setup base"] --> Routes["Rutas y layout"]
  Setup --> Domain["Tipos de dominio"]
  Domain --> Mock["Mock data"]
  Mock --> Catalog["Catálogo"]
  Catalog --> Filters["Búsqueda y filtros"]
  Catalog --> CartAdd["Agregar al carrito"]
  Domain --> Auth["Auth store"]
  Auth --> Protected["Checkout protegido"]
  Domain --> Cart["Cart store"]
  Cart --> Checkout["Checkout simulado"]
  Filters --> QA["QA final"]
  Protected --> QA
  Checkout --> QA
  QA --> Delivery["Entrega 3"]
```

## Relación con entregas

| Entrega | Semanas | Contenido |
| --- | --- | --- |
| Entrega 1 | Semana 1 | Definición, roles, arquitectura, backlog, cronograma y setup técnico. |
| Entrega 2 | Semanas 2 a 4 | Catálogo, filtros, auth, registros de avance, defectos y QA parcial. |
| Entrega 3 | Semanas 5 a 6 | Carrito, checkout, pruebas, estabilización, conclusiones y sustentación. |

## Fuente

Ver [roadmap base](../planning/roadmap.md).
