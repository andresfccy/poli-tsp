# Gestión de Riesgos

## Matriz de riesgos

| ID | Riesgo | Probabilidad | Impacto | Señal temprana | Mitigación | Responsable |
| --- | --- | --- | --- | --- | --- | --- |
| R-001 | Conflictos Git por trabajo simultáneo en los mismos archivos. | Media | Alto | Pull requests o merges con conflictos frecuentes. | Dividir tareas por módulo, ramas cortas y revisión antes de integrar. | Team Leader |
| R-002 | Retrasos por estimaciones optimistas. | Media | Alto | Tareas se mueven varias semanas sin cierre. | Revisar avance semanal, reducir alcance opcional y priorizar flujo principal. | Planning Manager |
| R-003 | Integración tardía entre catálogo, filtros y carrito. | Media | Alto | Módulos funcionan aislados pero fallan juntos. | Definir contratos de datos temprano y hacer integración parcial desde semana 3. | Development Manager |
| R-004 | Deuda técnica por crecer desde placeholders. | Media | Medio | Componentes grandes, duplicación o lógica en páginas. | Extraer componentes, hooks y utilidades cuando exista repetición real. | Process Manager |
| R-005 | Problemas responsive en catálogo, carrito o formularios. | Media | Medio | UI se rompe en 320 px o tablet. | QA responsive semanal desde catálogo y checklist final. | Quality Manager |
| R-006 | Testing insuficiente antes de Entrega 3. | Alta | Alto | `pnpm test` sin pruebas relevantes. | Priorizar lógica pura de filtros, stores y rutas principales. | Quality Manager |
| R-007 | Falta de documentación de decisiones. | Media | Medio | No hay actas o cambios sin explicación. | Usar template de acta y actualizar docs al cierre de cada semana. | Support/Documentation Manager |
| R-008 | Coordinación débil de roles TSPi. | Media | Medio | Responsables difusos o tareas duplicadas. | Confirmar responsables por issue y revisar tablero en seguimiento. | Team Leader |
| R-009 | Persistencia local inconsistente. | Media | Medio | Usuario o carrito se pierden o quedan corruptos. | Centralizar acceso a `localStorage` y probar recuperación inicial. | Development Manager |
| R-010 | Validación de stock incompleta. | Media | Alto | Carrito permite cantidades inválidas. | Validar en acciones del store y en controles de UI. | Quality Manager |
| R-011 | Accesibilidad básica omitida. | Media | Medio | Formularios sin labels o botones sin nombre accesible. | Checklist de labels, navegación por teclado y estados visibles. | Quality Manager |
| R-012 | Preparación tardía del video final. | Media | Medio | Producto listo pero sin guion ni evidencias. | Crear guion en semana 6 desde el inicio y asignar responsable. | Support/Documentation Manager |

## Riesgos técnicos críticos

Los módulos más críticos son catálogo, estado global, autenticación, carrito y checkout. Si alguno de estos se retrasa, el flujo central de la tienda queda incompleto. La estrategia recomendada es construir primero el camino feliz: ver producto, agregar al carrito, iniciar sesión y simular checkout. Los filtros, ordenamientos y mejoras visuales pueden estabilizarse después.

## Plan de respuesta

| Nivel | Acción |
| --- | --- |
| Bajo | Registrar en acta y monitorear semanalmente. |
| Medio | Crear issue de mitigación y asignar responsable. |
| Alto | Escalar en reunión de seguimiento, reducir alcance opcional y priorizar desbloqueo. |

## Checklist semanal de riesgos

- ¿Hay tareas bloqueadas por otra persona?
- ¿Hay archivos compartidos con cambios simultáneos?
- ¿El backlog refleja el estado real?
- ¿El build sigue funcionando?
- ¿Hay defectos críticos sin responsable?
- ¿La documentación de la semana quedó actualizada?
- ¿La carga semanal es sostenible para el equipo?
