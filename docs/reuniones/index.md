# Reuniones

## Cadencia

| Reunion | Frecuencia | Duracion | Participantes |
| --- | --- | --- | --- |
| Launch meeting | Semana 1 | 60 min | Todo el equipo |
| Seguimiento semanal | Semanal | 30 min | Todo el equipo |
| Revision tecnica | Semanal | 30 min | Team Leader, Development Manager, Quality Manager |
| QA review | Semanas 2 a 6 | 30 min | Quality Manager, Development Manager |
| Integracion | Semanas 3 a 6 | 30 min | Development Manager y responsables |
| Retrospectiva | Semanas 3, 5 y 6 | 30 min | Todo el equipo |
| Preparacion de entrega | Antes de cada entrega | 45 min | Todo el equipo |

## Flujo de seguimiento

```mermaid
flowchart TD
  Start[Inicio de semana] --> Seguimiento[Seguimiento semanal]
  Seguimiento --> Bloqueos{Hay bloqueos?}
  Bloqueos -- Si --> Accion[Asignar accion correctiva]
  Bloqueos -- No --> Ejecucion[Continuar ejecucion]
  Accion --> QA[QA review]
  Ejecucion --> QA
  QA --> Acta[Actualizar acta]
  Acta --> Backlog[Actualizar backlog]
```

## Template de acta

```md
# Acta de reunion

Fecha:
Semana:
Tipo de reunion:
Participantes:

## Objetivo

## Avances revisados

## Decisiones

## Riesgos o bloqueos

## Tareas asignadas

| Tarea | Responsable | Fecha compromiso |
| --- | --- | --- |

## Evidencias

## Proxima reunion
```

## Fuente

Ver [plan de reuniones base](../planning/meetings.md).
