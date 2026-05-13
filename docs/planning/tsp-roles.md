# Roles TSPi Sugeridos

## Asignación de roles

| Rol | Responsabilidades | Artefactos asociados | Frecuencia de seguimiento |
| --- | --- | --- | --- |
| Team Leader | Coordinar al equipo, remover bloqueos, validar prioridades y mantener foco en entregas. | Actas, tablero Kanban, reporte de avance. | Seguimiento semanal y preparación de entregas. |
| Planning Manager | Mantener cronograma, estimaciones, dependencias y carga por semana. | Roadmap, backlog, plan de iteración. | Revisión semanal. |
| Development Manager | Guiar implementación, integración técnica y decisiones de código. | Arquitectura, PRs, estándares de implementación. | Revisión técnica semanal. |
| Quality Manager | Definir criterios de aceptación, QA, defectos y pruebas. | Checklist QA, reporte de defectos, pruebas. | QA review semanal. |
| Support/Documentation Manager | Mantener README, actas, evidencias, guion y material de sustentación. | Documentación, capturas, video, línea de tiempo. | Actualización semanal y cierre de entrega. |
| Process Manager | Vigilar cumplimiento TSPi, Definition of Ready/Done y retrospectivas. | Métricas simples, retrospectivas, acciones de mejora. | Retrospectivas y revisión de proceso. |
| Software Architect | Validar estructura, modularidad, dependencias y decisiones de diseño. | Resumen de arquitectura, módulos, decisiones técnicas. | Revisión en semanas 1, 3 y 5. |

## Responsabilidades por módulo

| Módulo | Rol líder | Roles de apoyo |
| --- | --- | --- |
| Configuración | Support/Documentation Manager | Development Manager |
| Routing | Software Architect | Development Manager |
| Catálogo | Development Manager | Quality Manager |
| Mocks | Planning Manager | Development Manager |
| Búsqueda y filtros | Development Manager | Quality Manager |
| Autenticación | Development Manager | Software Architect |
| Estado global | Software Architect | Development Manager |
| Carrito | Development Manager | Quality Manager |
| Testing | Quality Manager | Development Manager |
| Documentación | Support/Documentation Manager | Process Manager |

## Frecuencia de seguimiento

- Diario o por sesión de trabajo: actualización breve del tablero.
- Semanal: revisión de avance, bloqueos y riesgos.
- Por entrega: consolidación de evidencias y validación de criterios.
- Final de semanas 3, 5 y 6: retrospectiva de proceso.

## Métricas académicas simples

| Métrica | Propósito |
| --- | --- |
| Tareas planeadas vs. completadas | Medir cumplimiento del cronograma. |
| Defectos encontrados vs. cerrados | Medir eficacia de QA. |
| Tareas reestimadas | Identificar desviaciones de planeación. |
| Commits por módulo | Evidenciar trabajo progresivo. |
| Reuniones con acta | Evidenciar disciplina TSPi. |

## Reglas de trabajo sugeridas

- Cada tarea debe tener responsable y criterio de aceptación.
- Los cambios funcionales deben pasar por revisión de al menos un integrante.
- Las decisiones técnicas relevantes deben quedar en acta o documentación.
- No se fusionan cambios si rompen build, lint o flujo principal.
- La documentación se actualiza en la misma semana en que cambia el alcance.
