# Entrega 2 - Evolución funcional

## Objetivo

Consolidar los módulos principales de catálogo, búsqueda, filtros y autenticación simulada, manteniendo registros de avance y QA parcial.

## Alcance planificado

| Módulo | Tareas | Criterio de aceptación |
| --- | --- | --- |
| Catálogo | Mock data, tarjetas, grilla y detalle. | Mínimo 20 productos navegables. |
| Búsqueda | Búsqueda por nombre. | El resultado cambia según texto ingresado. |
| Filtros | Categoría, marca, precio, stock y características. | Los filtros se pueden combinar sin romper la UI. |
| Auth | Registro, login y persistencia local. | El usuario puede iniciar sesión simulada. |
| Checkout protegido | Bloqueo o redirección sin sesión. | No se accede al checkout si no hay usuario. |
| QA parcial | Defectos, responsive base y pruebas iniciales. | Checklist parcial registrado. |

## Tareas principales

| ID | Tarea | Semana |
| --- | --- | --- |
| TSP-008 | Crear mock de productos | 2 |
| TSP-009 | Crear componente ProductCard | 2 |
| TSP-010 | Completar CatalogPage | 2 |
| TSP-011 | Completar ProductDetailPage | 2 |
| TSP-013 | Implementar busqueda | 3 |
| TSP-014 | Implementar filtros basicos | 3 |
| TSP-015 | Implementar filtros avanzados | 3 |
| TSP-018 | Formularios de login | 4 |
| TSP-019 | Formularios de registro | 4 |
| TSP-020 | Store de autenticacion | 4 |
| TSP-021 | Proteccion de checkout | 4 |

## Flujo esperado

```mermaid
sequenceDiagram
  actor Usuario
  participant Catalogo as Catálogo
  participant Filtros
  participant Detalle
  participant Auth
  Usuario->>Catalogo: Consulta productos
  Usuario->>Filtros: Aplica busqueda y filtros
  Filtros-->>Catalogo: Lista filtrada
  Usuario->>Detalle: Abre producto
  Usuario->>Auth: Inicia sesión simulada
  Auth-->>Usuario: Sesion persistida
```

## QA parcial

- Validar rutas de catalogo y detalle.
- Validar estados sin resultados.
- Validar combinaciones de filtros.
- Validar formularios con datos incompletos.
- Validar persistencia de usuario al recargar.
- Registrar defectos y ajustes en backlog.

## Evidencias esperadas

- Capturas de catalogo y detalle.
- Capturas de filtros activos.
- Capturas de login y registro.
- Commits por módulo.
- Actas de seguimiento.
- Checklist QA parcial.
