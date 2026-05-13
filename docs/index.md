---
layout: home

hero:
  name: Tienda TSP
  text: Portal de documentacion tecnica y academica
  tagline: Planeacion TSPi/SDD, arquitectura, roadmap, entregas, QA y evidencias del proyecto de tienda virtual.
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
  - title: Planeacion defendible
    details: Alcance, roles, backlog, cronograma y entregas estructuradas bajo enfoque TSPi.
  - title: Arquitectura trazable
    details: Rutas, modulos, dependencias y evolucion tecnica alineadas al repositorio real.
  - title: Control academico
    details: Reuniones, riesgos, QA, evidencias y conclusiones organizadas para sustentacion.
---

## Estado actual

<div class="status-grid">
  <div class="status-card">
    <strong>Repositorio</strong>
    React, TypeScript, Vite, Tailwind CSS, React Router, Zustand planificado y Vitest.
  </div>
  <div class="status-card">
    <strong>Implementacion</strong>
    Fase 1 funcional: rutas base, layout, tooling, tipado de dominio y README.
  </div>
  <div class="status-card">
    <strong>Gestion</strong>
    No existen issues ni PRs remotos; el backlog sugerido queda listo para GitHub Projects.
  </div>
</div>

## Mapa del portal

```mermaid
flowchart LR
  H[Home] --> P[Proyecto]
  H --> A[Arquitectura]
  H --> R[Roadmap]
  R --> E1[Entrega 1]
  R --> E2[Entrega 2]
  R --> E3[Entrega 3]
  H --> B[Backlog]
  H --> Q[QA]
  H --> C[Conclusiones]
```

## Fuentes principales

La base documental se encuentra en `docs/planning` y fue reorganizada en secciones navegables para consulta tecnica, academica y de sustentacion.
