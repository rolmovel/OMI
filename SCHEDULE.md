# 📅 Cronograma de Actividades - Proyecto OMI

Este documento detalla el cronograma completo de actividades para el desarrollo e implementación del proyecto OMI, desde la fase actual hasta el lanzamiento y crecimiento.

## 🎯 Visión General del Cronograma

### Fases del Proyecto
- **Fase 1**: Setup y Desarrollo Inicial (Meses 1-2)
- **Fase 2**: Desarrollo Core (Meses 3-4)
- **Fase 3**: Testing y Piloto (Meses 5-6)
- **Fase 4**: Lanzamiento y Expansión (Meses 7-12)

---

## 📊 Cronograma Detallado por Meses

### 🗓️ Mes 1: Setup y Auth Service

#### Semana 1: Configuración Inicial
**Objetivo**: Configurar infraestructura y entorno de desarrollo

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Crear repositorio GitHub y configurar estructura | Tech Lead | Repositorio listo |
| **Mar** | Configurar infraestructura (Docker, CI/CD básico) | DevOps | Infraestructura base |
| **Mié** | Setup de IDEs y herramientas de desarrollo | Equipo | Entornos configurados |
| **Jue** | Crear estructura de módulos Maven | Backend Dev | Módulos creados |
| **Vie** | Configurar Service Discovery (Eureka) | Backend Dev | Eureka funcionando |
| **Sáb** | Configurar Config Server | Backend Dev | Config Server listo |
| **Dom** | Documentar setup inicial | Equipo | Guía actualizada |

#### Semana 2: Auth Service MVP
**Objetivo**: Sistema de autenticación básico funcional

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Diseñar entidades JPA (User, Role, Permission) | Backend Dev | Entidades diseñadas |
| **Mar** | Implementar repositorios | Backend Dev | Repositorios listos |
| **Mié** | Crear servicios de autenticación | Backend Dev | Servicios básicos |
| **Jue** | Implementar JWT token generation | Backend Dev | JWT funcional |
| **Vie** | Crear endpoints de login/logout | Backend Dev | API básica |
| **Sáb** | Tests unitarios y de integración | Equipo | Tests >80% coverage |
| **Dom** | Code review y ajustes | Tech Lead | Código aprobado |

#### Semana 3: Auth Service Avanzado
**Objetivo**: Autenticación completa con seguridad

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Implementar recuperación de contraseña | Backend Dev | Email recovery |
| **Mar** | Añadir login con código QR | Backend Dev | QR login funcional |
| **Mié** | Implementar 2FA opcional | Backend Dev | 2FA listo |
| **Jue** | Crear middleware de autenticación | Backend Dev | Middleware seguro |
| **Vie** | Tests de seguridad y edge cases | Equipo | Tests de seguridad |
| **Sáb** | Frontend básico de login | Frontend Dev | Pantalla de login |
| **Dom** | Integración frontend-backend | Equipo | Auth completo |

#### Semana 4: Refinamiento y Documentación
**Objetivo**: Pulir auth y preparar siguiente fase

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Optimización de rendimiento | Equipo | Performance mejorado |
| **Mar** | Documentar API de auth | Tech Lead | API docs actualizadas |
| **Mié** | Crear ejemplos de uso | Backend Dev | Ejemplos funcionales |
| **Jue** | Preparar estructura para Patient Service | Equipo | Estructura lista |
| **Vie** | Demo interna del auth | Equipo | Demo aprobada |
| **Sáb** | Actualizar roadmap | Product Owner | Roadmap actualizado |
| **Dom** | Planificación siguiente mes | Equipo | Plan definido |

**Hito Mes 1**: ✅ Sistema de autenticación completo y funcional

---

### 🗓️ Mes 2: Patient Service y Área Clínica Básica

#### Semana 5: Patient Service - Entidades
**Objetivo**: Modelo de datos de pacientes

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Diseñar entidades Patient, Guardian, HealthPlan | Backend Dev | Entidades diseñadas |
| **Mar** | Crear esquema de base de datos patient_db | Backend Dev | Schema creado |
| **Mié** | Implementar repositorios JPA | Backend Dev | Repositorios listos |
| **Jue** | Crear servicios básicos de paciente | Backend Dev | Servicios CRUD |
| **Vie** | Implementar validaciones | Backend Dev | Validaciones funcionando |
| **Sáb** | Tests unitarios | Equipo | Tests básicos |
| **Dom** | Code review | Tech Lead | Código revisado |

#### Semana 6: Patient Service - API Completa
**Objetivo**: API REST completa para pacientes

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Implementar endpoints CRUD | Backend Dev | Endpoints básicos |
| **Mar** | Añadir búsqueda y filtrado | Backend Dev | Búsqueda funcional |
| **Mié** | Implementar paginación | Backend Dev | Paginación lista |
| **Jue** | Crear DTOs y mappers | Backend Dev | DTOs optimizados |
| **Vie** | Tests de integración | Equipo | Tests integración |
| **Sáb** | Documentar API | Tech Lead | OpenAPI actualizada |
| **Dom** | Frontend lista de pacientes | Frontend Dev | UI básica |

#### Semana 7: Revisiones - Modelo Básico
**Objetivo**: Sistema de registro de revisiones

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Diseñar entidades Review, Odontogram | Backend Dev | Entidades diseñadas |
| **Mar** | Crear esquema para revisiones | Backend Dev | Schema creado |
| **Mié** | Implementar odontograma básico | Backend Dev | Odontograma simple |
| **Jue** | Crear servicios de revisión | Backend Dev | Servicios básicos |
| **Vie** | Tests unitarios | Equipo | Tests cobertura |
| **Sáb** | Frontend formulario revisión | Frontend Dev | UI formulario |
| **Dom** | Code review completo | Tech Lead | Código aprobado |

#### Semana 8: Área Clínica Básica
**Objetivo**: Dashboard y navegación principal

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Crear dashboard principal | Frontend Dev | Dashboard básico |
| **Mar** | Implementar navegación | Frontend Dev | Menús funcionales |
| **Mié** | Crear componentes reutilizables | Frontend Dev | Componentes UI |
| **Jue** | Integración con APIs | Equipo | Frontend-backend |
| **Vie** | Tests E2E básicos | Equipo | Tests funcionales |
| **Sáb** | Demo interna | Equipo | Demo aprobada |
| **Dom** | Planificación siguiente fase | Equipo | Plan definido |

**Hito Mes 2**: ✅ Área clínica básica funcional con pacientes y revisiones

---

### 🗓️ Mes 3: Carnet Digital y Área Familias

#### Semana 9: Carnet Digital - Backend
**Objetivo**: Lógica del carnet digital

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Diseñar lógica del carnet | Backend Dev | Algoritmo diseñado |
| **Mar** | Implementar cálculo de riesgo | Backend Dev | Cálculo automático |
| **Mié** | Crear servicio de logros | Backend Dev | Sistema de logros |
| **Jue** | Implementar sellos de revisiones | Backend Dev | Sellos funcionales |
| **Vie** | Tests de lógica de negocio | Equipo | Tests aprobados |
| **Sáb** | API del carnet | Backend Dev | Endpoints listos |
| **Dom** | Documentación | Tech Lead | Docs actualizadas |

#### Semana 10: Área Familias - Login
**Objetivo**: Acceso para familias

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Diseñar flujo de login familias | Frontend Dev | Flujo diseñado |
| **Mar** | Crear componentes de login | Frontend Dev | UI lista |
| **Mié** | Implementar login con email | Frontend Dev | Email login |
| **Jue** | Añadir login con código QR | Frontend Dev | QR funcional |
| **Vie** | Tests de usabilidad | Equipo | UX probado |
| **Sáb** | Responsive design | Frontend Dev | Mobile listo |
| **Dom** | Code review | Tech Lead | Código revisado |

#### Semana 11: Carnet Digital - Frontend
**Objetivo**: Visualización del carnet

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Crear componente Carnet Digital | Frontend Dev | Componente básico |
| **Mar** | Implementar visualización de datos | Frontend Dev | Datos mostrados |
| **Mié** | Añadir sellos de revisiones | Frontend Dev | Sellos visuales |
| **Jue** | Crear sistema de logros | Frontend Dev | Logros mostrados |
| **Vie** | Animaciones y transiciones | Frontend Dev | UX pulida |
| **Sáb** | Tests de componentes | Equipo | Tests aprobados |
| **Dom** | Integración completa | Equipo | Carnet funcional |

#### Semana 12: Recursos Educativos
**Objetivo**: Contenido educativo básico

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Diseñar estructura de recursos | Backend Dev | Modelo diseñado |
| **Mar** | Crear servicio de recursos | Backend Dev | API lista |
| **Mié** | Frontend sección recursos | Frontend Dev | UI básica |
| **Jue** | Añadir contenido inicial | Equipo | Contenido cargado |
| **Vie** | Tests de funcionalidad | Equipo | Recursos funcionales |
| **Sáb** | Demo interna | Equipo | Demo aprobada |
| **Dom** | Planificación siguiente mes | Equipo | Plan definido |

**Hito Mes 3**: ✅ Carnet digital y área familias básico

---

### 🗓️ Mes 4: Report Service y Citas

#### Semana 13: Report Service - Generación PDF
**Objetivo**: Sistema de informes

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Elegir librería PDF (iText/PDFBox) | Tech Lead | Tecnología decidida |
| **Mar** | Crear servicio de generación | Backend Dev | Servicio básico |
| **Mié** | Diseñar plantilla base | Diseñador | Plantilla creada |
| **Jue** | Implementar odontograma en PDF | Backend Dev | Odontograma PDF |
| **Vie** | Añadir fotos clínicas | Backend Dev | Fotos en PDF |
| **Sáb** | Tests de generación | Equipo | PDFs válidos |
| **Dom** | Code review | Tech Lead | Código aprobado |

#### Semana 14: Report Service - Envío
**Objetivo**: Distribución de informes

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Crear servicio de email | Backend Dev | Email service |
| **Mar** | Implementar envío automático | Backend Dev | Auto envío |
| **Mié** | Frontend descarga PDF | Frontend Dev | Botón descarga |
| **Jue** | Tests de integración | Equipo | Emails enviados |
| **Vie** | Manejo de errores | Equipo | Error handling |
| **Sáb** | UI de gestión de informes | Frontend Dev | Interfaz completa |
| **Dom** | Documentación | Tech Lead | Docs actualizadas |

#### Semana 15: Sistema de Citas - Modelo
**Objetivo**: Gestión básica de citas

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Diseñar entidades de citas | Backend Dev | Entidades diseñadas |
| **Mar** | Crear esquema appointment_db | Backend Dev | Schema creado |
| **Mié** | Implementar servicios básicos | Backend Dev | Servicios CRUD |
| **Jue** | Crear lógica de disponibilidad | Backend Dev | Disponibilidad |
| **Vie** | Tests unitarios | Equipo | Tests básicos |
| **Sáb** | API de citas | Backend Dev | Endpoints listos |
| **Dom** | Code review | Tech Lead | Código revisado |

#### Semana 16: Área Clínica Completa
**Objetivo**: Dashboard y navegación final

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Mejorar dashboard | Frontend Dev | Dashboard avanzado |
| **Mar** | Crear gráficos y métricas | Frontend Dev | Visualizaciones |
| **Mié** | Optimizar navegación | Frontend Dev | UX fluida |
| **Jue** | Tests de usabilidad | Equipo | UX probado |
| **Vie** | Performance optimization | Equipo | Carga rápida |
| **Sáb** | Demo interna completa | Equipo | Demo aprobada |
| **Dom** | Planificación siguiente fase | Equipo | Plan definido |

**Hito Mes 4**: ✅ Sistema de informes y citas básico

---

### 🗓️ Mes 5: Testing y Clínica Piloto

#### Semana 17: Testing Integral
**Objetivo**: Testing completo del sistema

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Plan de testing | QA Engineer | Plan definido |
| **Mar** | Tests E2E automatizados | QA Engineer | Tests E2E |
| **Mié** | Tests de carga | Equipo | Performance tests |
| **Jue** | Tests de seguridad | Equipo | Security tests |
| **Vie** | Bug fixing | Equipo | Bugs corregidos |
| **Sáb** | Regresión testing | QA Engineer | Regresión ok |
| **Dom** | Documentar issues | Equipo | Issues documentados |

#### Semana 18: Clínica Piloto - Preparación
**Objetivo**: Preparar clínica para pruebas

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Seleccionar clínica piloto | Product Owner | Clínica elegida |
| **Mar** | Capacitación inicial | Equipo | Equipo entrenado |
| **Mié** | Configurar entorno piloto | DevOps | Entorno listo |
| **Jue** | Cargar datos de prueba | Equipo | Datos cargados |
| **Vie** | Tests en entorno piloto | Equipo | Tests piloto |
| **Sáb** | Feedback inicial | Clínica | Feedback recibido |
| **Dom** | Ajustes basados en feedback | Equipo | Cambios aplicados |

#### Semana 19: Clínica Piloto - Primera Semana
**Objetivo**: Primera semana de uso real

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Monitoreo continuo | Equipo | Sistema monitoreado |
| **Mar** | Soporte técnico | Equipo | Issues resueltos |
| **Mié** | Recopilar feedback | Product Owner | Feedback diario |
| **Jue** | Análisis de uso | Equipo | Métricas analizadas |
| **Vie** | Correcciones rápidas | Equipo | Fixes aplicados |
| **Sáb** | Reporte semanal | Product Owner | Reporte generado |
| **Dom** | Planificación mejoras | Equipo | Mejoras planificadas |

#### Semana 20: Clínica Piloto - Segunda Semana
**Objetivo**: Segunda semana y evaluación

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Implementar mejoras | Equipo | Mejoras aplicadas |
| **Mar** | Seguimiento de uso | Equipo | Uso monitoreado |
| **Mié** | Sesiones de feedback | Product Owner | Feedback sesiones |
| **Jue** | Análisis final | Equipo | Análisis completo |
| **Vie** | Reporte final piloto | Product Owner | Reporte final |
| **Sáb** | Decisión go/no-go | Equipo | Decisión tomada |
| **Dom** | Planificación lanzamiento | Equipo | Plan de lanzamiento |

**Hito Mes 5**: ✅ Clínica piloto completada y evaluada

---

### 🗓️ Mes 6: Lanzamiento y Marketing

#### Semana 21: Preparación de Lanzamiento
**Objetivo**: Preparar lanzamiento oficial

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Definir estrategia de lanzamiento | Product Owner | Estrategia definida |
| **Mar** | Crear materiales de marketing | Marketing | Materiales listos |
| **Mié** | Configurar producción | DevOps | Entorno producción |
| **Jue** | Tests finales | Equipo | Sistema estable |
| **Vie** | Documentación final | Tech Lead | Docs completas |
| **Sáb** | Training del equipo | Equipo | Equipo entrenado |
| **Dom** | Checklist final | Product Owner | Checklist ok |

#### Semana 22: Lanzamiento Oficial
**Objetivo**: Lanzamiento al mercado

| Día | Actividad | Responsable | Entregable |
|-----|-----------|-------------|------------|
| **Lun** | Lanzamiento oficial | Equipo | Lanzamiento realizado |
| **Mar** | Monitoreo inicial | Equipo | Sistema monitoreado |
| **Mié** | Soporte early adopters | Equipo | Soporte activo |
| **Jue** | Recopilar feedback inicial | Product Owner | Feedback recibido |
| **Vie** | Correcciones post-lanzamiento | Equipo | Fixes aplicados |
| **Sáb** | Análisis primera semana | Equipo | Análisis realizado |
| **Dom** | Comunicación con usuarios | Marketing | Comunicación activa |

**Hito Mes 6**: 🚀 Lanzamiento oficial completado

---

## 📈 Seguimiento y Métricas

### Métricas Clave por Fase

| Métrica | Mes 1-2 | Mes 3-4 | Mes 5-6 | Objetivo |
|---------|---------|---------|---------|----------|
| **Usuarios activos** | 0 | 1-5 | 10-50 | 100+ |
| **Clínicas activas** | 0 | 1 | 3-5 | 10+ |
| **Tiempo respuesta API** | <1s | <500ms | <200ms | <100ms |
| **Uptime** | 95% | 98% | 99.5% | 99.9% |
| **Bugs críticos** | <5 | <2 | 0 | 0 |

### Reuniones de Seguimiento

- **Daily Standup**: 15 min diarios (L-V)
- **Sprint Planning**: Inicio de cada sprint (2h)
- **Sprint Review**: Fin de cada sprint (1h)
- **Retrospectiva**: Fin de cada sprint (1h)
- **Reunión Ejecutiva**: Semanal (30 min)

---

## 🎯 Hitos Principales

### ✅ Completados
- **Enero 2024**: Documentación completa del proyecto
- **Mes 1**: Sistema de autenticación funcional
- **Mes 2**: Área clínica básica operativa
- **Mes 3**: Carnet digital y área familias
- **Mes 4**: Sistema de informes y citas
- **Mes 5**: Clínica piloto evaluada

### 🚀 Próximos Hitos
- **Mes 6**: Lanzamiento oficial
- **Mes 9**: 10 clínicas activas
- **Mes 12**: 50 clínicas activas
- **Mes 18**: Expansión internacional
- **Mes 24**: 200 clínicas activas

---

## 📋 Recursos por Fase

### Equipo Técnico

| Rol | Mes 1-2 | Mes 3-4 | Mes 5-6 | Mes 7+ |
|-----|---------|---------|---------|--------|
| **Tech Lead** | 100% | 100% | 100% | 100% |
| **Backend Dev** | 100% | 100% | 100% | 100% |
| **Frontend Dev** | 100% | 100% | 100% | 100% |
| **DevOps** | 50% | 50% | 100% | 100% |
| **QA Engineer** | 0% | 50% | 100% | 100% |
| **Diseñador UX** | 25% | 25% | 25% | 50% |

### Presupuesto Mensual Estimado

| Categoría | Mes 1-2 | Mes 3-4 | Mes 5-6 | Mes 7+ |
|-----------|---------|---------|---------|--------|
| **Desarrollo** | 15,000€ | 15,000€ | 15,000€ | 12,000€ |
| **Infraestructura** | 500€ | 500€ | 1,000€ | 1,500€ |
| **Marketing** | 1,000€ | 2,000€ | 3,000€ | 5,000€ |
| **Operaciones** | 1,000€ | 1,500€ | 2,000€ | 2,500€ |
| **Total Mensual** | **17,500€** | **19,000€** | **21,000€** | **21,000€** |

---

## ⚠️ Riesgos y Mitigación

### Riesgos Técnicos
- **Alta**: Problemas de rendimiento → Mitigación: Testing temprano, monitoreo continuo
- **Media**: Dependencias de terceros → Mitigación: Evaluación previa, plan B
- **Baja**: Bugs en producción → Mitigación: QA exhaustivo, staging environment

### Riesgos de Negocio
- **Alta**: Baja adopción inicial → Mitigación: Clínica piloto, feedback continuo
- **Media**: Competencia fuerte → Mitigación: Diferenciación clara, marketing enfocado
- **Baja**: Cambios regulatorios → Mitigación: Cumplimiento RGPD desde diseño

### Riesgos Operativos
- **Media**: Rotación de equipo → Mitigación: Cultura positiva, documentación excelente
- **Baja**: Problemas de infraestructura → Mitigación: Redundancia, backups automáticos

---

## 📞 Contactos y Comunicación

### Canales de Comunicación

| Canal | Propósito | Frecuencia |
|-------|-----------|------------|
| **Slack/Discord** | Comunicación diaria del equipo | Diario |
| **Email** | Comunicación formal, reportes | Semanal |
| **GitHub Issues** | Seguimiento de tareas y bugs | Diario |
| **Reuniones** | Sincronización y decisiones | Semanal |
| **Newsletter** | Comunicación con clínicas | Mensual |

### Puntos de Contacto

- **Tech Lead**: Desarrollo técnico, arquitectura
- **Product Owner**: Producto, roadmap, prioridades
- **DevOps**: Infraestructura, deployments
- **Soporte**: Issues usuarios, mantenimiento

---

## ✅ Checklist de Seguimiento

### Semanal
- [ ] Daily standups realizados
- [ ] Progreso del sprint revisado
- [ ] Issues críticos resueltos
- [ ] Comunicación con stakeholders

### Mensual
- [ ] Métricas revisadas y analizadas
- [ ] Presupuesto actual vs planificado
- [ ] Feedback de usuarios recopilado
- [ ] Roadmap ajustado si necesario

### Trimestral
- [ ] Objetivos del trimestre evaluados
- [ ] Estrategia ajustada basado en resultados
- [ ] Planificación siguiente trimestre
- [ ] Reunión con inversores/stakeholders

---

**Última actualización**: Enero 2024
**Próxima revisión**: Inicio de cada mes
**Responsable**: Tech Lead / Product Owner
