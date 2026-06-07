---
layout: home

hero:
  name: Tienda TSP
  text: Portal de documentación técnica y académica
  tagline: Planeación TSPi/SDD, arquitectura, roadmap, entregas, QA y evidencias del proyecto de tienda virtual.
  actions:
    - theme: brand
      text: Ver proyecto
      link: /proyecto/
    - theme: alt
      text: Roadmap
      link: /roadmap/
    - theme: alt
      text: Repositorio
      link: https://github.com/andresfccy/poli-tsp

features:
  - title: Planeación defendible
    details: Alcance, roles, backlog, cronograma y entregas estructuradas bajo enfoque TSPi.
  - title: Arquitectura trazable
    details: Rutas, módulos, dependencias y evolución técnica alineadas al repositorio real.
  - title: Control académico
    details: Reuniones, riesgos, QA, evidencias y conclusiones organizadas para sustentación.
---

## Estado actual

<div class="status-grid">
  <div class="status-card">
    <strong>Repositorio</strong>
    React, TypeScript, Vite, Tailwind CSS, React Router, Zustand planificado y Vitest.
  </div>
  <div class="status-card">
    <strong>Implementación</strong>
    Fases 1, 2 y 3 funcionales: base técnica, catálogo, detalle, búsqueda, filtros y ordenamiento.
  </div>
  <div class="status-card">
    <strong>Gestión</strong>
    Seguimiento semanal registrado hasta el 2026-06-07; Fase 3 se cerró de forma adelantada.
  </div>
</div>

## Mapa del portal

```mermaid
flowchart LR
  H["Home"] --> P["Proyecto"]
  H --> A["Arquitectura"]
  H --> R["Roadmap"]
  R --> E1["Entrega 1"]
  R --> E2["Entrega 2"]
  R --> E3["Entrega 3"]
  H --> B["Backlog"]
  H --> S["Seguimiento"]
  H --> Q["QA"]
  H --> C["Conclusiones"]
```

## Fuentes principales

La base documental se encuentra en `docs/planning` y fue reorganizada en secciones navegables para consulta técnica, académica y de sustentación.
