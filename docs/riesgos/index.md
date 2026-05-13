# Riesgos

## Matriz resumida

| ID | Riesgo | Probabilidad | Impacto | Mitigación |
| --- | --- | --- | --- | --- |
| R-001 | Conflictos Git | Media | Alto | Ramas cortas, división por módulo y revisión antes de integrar. |
| R-002 | Retrasos | Media | Alto | Reestimacion semanal y priorizacion del flujo principal. |
| R-003 | Integracion tardia | Media | Alto | Integracion parcial desde semana 3. |
| R-004 | Deuda técnica | Media | Medio | Extraer componentes, hooks y utilidades cuando exista repetición real. |
| R-005 | Problemas responsive | Media | Medio | QA responsive semanal y checklist final. |
| R-006 | Testing insuficiente | Alta | Alto | Priorizar filtros, stores y rutas principales. |
| R-007 | Falta de documentación | Media | Medio | Actas y actualización semanal de docs. |
| R-008 | Coordinacion debil | Media | Medio | Responsables por issue y seguimiento de tablero. |

## Mapa de respuesta

```mermaid
flowchart TD
  Risk[Riesgo detectado] --> Level{Nivel}
  Level -- Bajo --> Monitor[Registrar y monitorear]
  Level -- Medio --> Issue[Crear issue de mitigacion]
  Level -- Alto --> Escalate[Escalar en seguimiento]
  Issue --> Owner[Asignar responsable]
  Escalate --> Scope[Reducir alcance opcional]
  Owner --> Review[Revisar en QA]
  Scope --> Review
```

## Checklist semanal

- ¿Hay tareas bloqueadas por otra persona?
- ¿Hay archivos compartidos con cambios simultaneos?
- ¿El backlog refleja el estado real?
- ¿El build sigue funcionando?
- ¿Hay defectos criticos sin responsable?
- ¿La documentación de la semana quedó actualizada?
- ¿La carga semanal es sostenible?

## Fuente

Ver [matriz de riesgos base](../planning/risks.md).
