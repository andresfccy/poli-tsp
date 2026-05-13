# Roadmap

## Linea de tiempo de 6 semanas

```mermaid
gantt
  title Roadmap Tienda TSP
  dateFormat  YYYY-MM-DD
  axisFormat  Semana %W
  section Entrega 1
  Planeacion y setup tecnico        :done,    s1, 2026-05-13, 7d
  Arquitectura y rutas base         :done,    s1b, 2026-05-13, 7d
  section Entrega 2
  Catalogo y detalle                :active,  s2, 2026-05-20, 7d
  Busqueda y filtros                :         s3, 2026-05-27, 7d
  Autenticacion simulada            :         s4, 2026-06-03, 7d
  section Entrega 3
  Carrito y checkout                :         s5, 2026-06-10, 7d
  QA, estabilizacion y sustentacion :         s6, 2026-06-17, 7d
```

## Roadmap visual

| Semana | Foco | Resultado |
| --- | --- | --- |
| 1 | Planeacion, setup y arquitectura | Base tecnica funcional y plan TSPi/SDD. |
| 2 | Catalogo y detalle | Mock data, tarjetas y detalle navegable. |
| 3 | Busqueda y filtros | Catalogo consultable con filtros y ordenamiento. |
| 4 | Autenticacion simulada | Registro, login, persistencia y checkout protegido. |
| 5 | Carrito y checkout | Store global, stock, totales y checkout simulado. |
| 6 | QA y sustentacion | Pruebas, responsive, accesibilidad, documentacion y video. |

## Dependencias principales

```mermaid
flowchart TD
  Setup[Setup base] --> Routes[Rutas y layout]
  Setup --> Domain[Tipos de dominio]
  Domain --> Mock[Mock data]
  Mock --> Catalog[Catalogo]
  Catalog --> Filters[Busqueda y filtros]
  Catalog --> CartAdd[Agregar al carrito]
  Domain --> Auth[Auth store]
  Auth --> Protected[Checkout protegido]
  Domain --> Cart[Cart store]
  Cart --> Checkout[Checkout simulado]
  Filters --> QA[QA final]
  Protected --> QA
  Checkout --> QA
  QA --> Delivery[Entrega 3]
```

## Relacion con entregas

| Entrega | Semanas | Contenido |
| --- | --- | --- |
| Entrega 1 | Semana 1 | Definicion, roles, arquitectura, backlog, cronograma y setup tecnico. |
| Entrega 2 | Semanas 2 a 4 | Catalogo, filtros, auth, registros de avance, defectos y QA parcial. |
| Entrega 3 | Semanas 5 a 6 | Carrito, checkout, pruebas, estabilizacion, conclusiones y sustentacion. |

## Fuente

Ver [roadmap base](../planning/roadmap.md).
