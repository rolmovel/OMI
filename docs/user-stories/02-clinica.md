# Historias de Usuario - Área Clínica

## 🎯 Épica 1: Gestión de Pacientes

### US-C-001: Dar de Alta un Paciente
**Como** recepcionista  
**Quiero** registrar un nuevo paciente en el sistema  
**Para** que pueda empezar a usar el plan de salud infantil

**Criterios de Aceptación:**
- [ ] Puedo acceder al formulario de alta de paciente
- [ ] Introduzco datos obligatorios: nombre, fecha nacimiento, DNI, datos tutor, tipo plan
- [ ] Puedo añadir foto del niño (opcional)
- [ ] Puedo añadir datos médicos relevantes (alergias, medicación)
- [ ] Marco el checkbox de consentimiento RGPD
- [ ] El sistema valida que no falten datos obligatorios
- [ ] El sistema genera automáticamente un número de historia clínica
- [ ] El sistema genera un código QR para la familia
- [ ] Puedo imprimir o enviar el código QR por email
- [ ] El sistema envía email de bienvenida a los tutores

**Prioridad:** Alta  
**Estimación:** 8 puntos  
**Sprint:** 1

---

### US-C-002: Buscar Paciente
**Como** profesional de la clínica  
**Quiero** buscar rápidamente un paciente  
**Para** acceder a su información sin perder tiempo

**Criterios de Aceptación:**
- [ ] Puedo buscar por nombre, apellido, número de historia, email o teléfono
- [ ] Los resultados aparecen mientras escribo (búsqueda en tiempo real)
- [ ] Veo resultados relevantes ordenados por coincidencia
- [ ] Cada resultado muestra: foto, nombre, edad, nivel de riesgo
- [ ] Puedo hacer clic en un resultado para ver la ficha completa
- [ ] Si no hay resultados, veo un mensaje claro
- [ ] Puedo limpiar la búsqueda con un botón

**Prioridad:** Alta  
**Estimación:** 5 puntos  
**Sprint:** 1

---

### US-C-003: Filtrar Lista de Pacientes
**Como** profesional de la clínica  
**Quiero** filtrar la lista de pacientes  
**Para** encontrar grupos específicos (ej. todos los de riesgo alto)

**Criterios de Aceptación:**
- [ ] Puedo filtrar por nivel de riesgo (verde, amarillo, rojo)
- [ ] Puedo filtrar por tipo de plan (preventivo, HIM, crecimiento)
- [ ] Puedo filtrar por rango de edad
- [ ] Puedo filtrar por estado (activo, inactivo)
- [ ] Puedo combinar múltiples filtros
- [ ] Veo el número de resultados que cumplen los filtros
- [ ] Puedo limpiar todos los filtros con un botón
- [ ] Los filtros se mantienen al navegar entre páginas

**Prioridad:** Media  
**Estimación:** 5 puntos  
**Sprint:** 1

---

### US-C-004: Ver Ficha Completa del Paciente
**Como** odontólogo  
**Quiero** ver toda la información de un paciente en una sola pantalla  
**Para** tener contexto completo antes de atenderlo

**Criterios de Aceptación:**
- [ ] Veo datos personales: nombre, edad, foto, número de historia
- [ ] Veo datos de contacto de los tutores
- [ ] Veo el tipo de plan y estado
- [ ] Veo el nivel de riesgo actual con código de color
- [ ] Veo historia médica (alergias, medicación)
- [ ] Veo estadísticas: total revisiones, última revisión, próxima revisión
- [ ] Veo accesos rápidos: nueva revisión, ver carnet, generar informe
- [ ] Puedo navegar entre pestañas: datos, historial, plan, fotos, documentos

**Prioridad:** Alta  
**Estimación:** 8 puntos  
**Sprint:** 1

---

### US-C-005: Editar Datos del Paciente
**Como** recepcionista  
**Quiero** actualizar los datos de un paciente  
**Para** mantener la información actualizada

**Criterios de Aceptación:**
- [ ] Puedo hacer clic en "Editar" en la ficha del paciente
- [ ] Puedo modificar datos personales (excepto número de historia)
- [ ] Puedo actualizar datos de contacto de tutores
- [ ] Puedo añadir o modificar foto
- [ ] Puedo actualizar historia médica
- [ ] El sistema valida los cambios
- [ ] Veo confirmación de que los cambios se guardaron
- [ ] Los cambios se registran en el log de auditoría

**Prioridad:** Alta  
**Estimación:** 5 puntos  
**Sprint:** 1

---

## 🎯 Épica 2: Registro de Revisiones

### US-C-006: Crear Nueva Revisión
**Como** odontólogo  
**Quiero** registrar una nueva revisión de un paciente  
**Para** documentar los hallazgos y tratamientos

**Criterios de Aceptación:**
- [ ] Puedo acceder a "Nueva Revisión" desde la ficha del paciente
- [ ] Veo un formulario con múltiples secciones (datos, exploración, higiene, tratamientos)
- [ ] Puedo seleccionar fecha y hora de la revisión
- [ ] Puedo seleccionar tipo de revisión (preventiva, urgencia, seguimiento, HIM)
- [ ] Puedo introducir motivo de consulta
- [ ] Puedo navegar entre las secciones del formulario
- [ ] Puedo guardar como borrador en cualquier momento
- [ ] Puedo recuperar un borrador guardado previamente

**Prioridad:** Alta  
**Estimación:** 13 puntos  
**Sprint:** 1

---

### US-C-007: Completar Odontograma Interactivo
**Como** odontólogo  
**Quiero** marcar el estado de cada diente en un odontograma visual  
**Para** documentar de forma clara y rápida

**Criterios de Aceptación:**
- [ ] Veo un odontograma con todas las piezas dentales
- [ ] Puedo hacer clic en cada diente para marcar su estado
- [ ] Estados disponibles: sano, caries, obturado, sellador, ausente, en erupción
- [ ] Puedo marcar superficies específicas (oclusal, mesial, distal, vestibular, palatino)
- [ ] Los cambios se reflejan visualmente en el odontograma
- [ ] Puedo añadir notas a cada diente
- [ ] El odontograma se guarda automáticamente
- [ ] Puedo comparar con odontogramas anteriores

**Prioridad:** Alta  
**Estimación:** 13 puntos  
**Sprint:** 1

---

### US-C-008: Registrar Índice de Higiene
**Como** higienista  
**Quiero** registrar el índice de placa del paciente  
**Para** evaluar objetivamente su higiene oral

**Criterios de Aceptación:**
- [ ] Puedo introducir el índice O'Leary (0-100%)
- [ ] Puedo marcar en un diagrama las zonas con más placa
- [ ] Puedo registrar la técnica de cepillado observada
- [ ] Puedo indicar si usa hilo dental (sí/no/a veces)
- [ ] Puedo añadir observaciones sobre higiene
- [ ] El sistema calcula automáticamente si la higiene es buena/regular/deficiente
- [ ] Veo la evolución del índice comparado con revisiones anteriores
- [ ] El índice se usa para calcular el nivel de riesgo

**Prioridad:** Alta  
**Estimación:** 8 puntos  
**Sprint:** 1

---

### US-C-009: Registrar Tratamientos Aplicados
**Como** odontólogo  
**Quiero** registrar los tratamientos preventivos aplicados  
**Para** tener documentado qué se hizo en cada visita

**Criterios de Aceptación:**
- [ ] Puedo añadir múltiples tratamientos a la revisión
- [ ] Tipos disponibles: fluoración, selladores, limpieza, otros
- [ ] Para fluoración: tipo, concentración, zonas aplicadas
- [ ] Para selladores: dientes específicos donde se aplicaron
- [ ] Puedo añadir notas a cada tratamiento
- [ ] Los tratamientos se muestran en el historial del paciente
- [ ] Los tratamientos se incluyen automáticamente en el informe

**Prioridad:** Alta  
**Estimación:** 5 puntos  
**Sprint:** 1

---

### US-C-010: Subir Fotografías Clínicas
**Como** odontólogo  
**Quiero** adjuntar fotografías a la revisión  
**Para** documentar visualmente el estado del paciente

**Criterios de Aceptación:**
- [ ] Puedo capturar fotos directamente con la cámara
- [ ] Puedo importar fotos desde el ordenador
- [ ] Puedo categorizar cada foto (extraoral, intraoral, HIM, hallazgo específico)
- [ ] Puedo añadir subcategoría (frontal, lateral, oclusal, etc.)
- [ ] Puedo añadir anotaciones sobre las fotos
- [ ] Las fotos se comprimen automáticamente para optimizar almacenamiento
- [ ] Las fotos se encriptan automáticamente
- [ ] Puedo eliminar fotos antes de guardar la revisión
- [ ] Veo una vista previa de todas las fotos adjuntas

**Prioridad:** Alta  
**Estimación:** 8 puntos  
**Sprint:** 1

---

### US-C-011: Guardar Revisión Completa
**Como** odontólogo  
**Quiero** guardar la revisión completa  
**Para** que quede registrada en el historial del paciente

**Criterios de Aceptación:**
- [ ] Puedo hacer clic en "Guardar Revisión"
- [ ] El sistema valida que no falten datos obligatorios
- [ ] Si falta algo, veo mensajes claros indicando qué falta
- [ ] La revisión se guarda en el historial del paciente
- [ ] Se actualiza automáticamente el nivel de riesgo
- [ ] Se verifica si el paciente ganó algún logro
- [ ] Se actualiza el carnet digital con un nuevo sello
- [ ] Veo confirmación de que se guardó correctamente
- [ ] Se me ofrece generar el informe inmediatamente

**Prioridad:** Alta  
**Estimación:** 8 puntos  
**Sprint:** 1

---

### US-C-012: Ver Historial de Revisiones
**Como** odontólogo  
**Quiero** ver todas las revisiones anteriores del paciente  
**Para** conocer su evolución y tomar mejores decisiones

**Criterios de Aceptación:**
- [ ] Veo una línea temporal con todas las revisiones
- [ ] Cada revisión muestra: fecha, tipo, profesional, hallazgos principales
- [ ] Puedo hacer clic en una revisión para ver detalles completos
- [ ] Puedo comparar dos revisiones lado a lado
- [ ] Puedo filtrar por tipo de revisión o rango de fechas
- [ ] Veo gráficos de evolución (índice de placa, nivel de riesgo)
- [ ] Puedo exportar el historial completo

**Prioridad:** Media  
**Estimación:** 8 puntos  
**Sprint:** 2

---

## 🎯 Épica 3: Generación de Informes

### US-C-013: Generar Informe PDF
**Como** odontólogo  
**Quiero** generar automáticamente un informe en PDF de la revisión  
**Para** enviárselo a los padres

**Criterios de Aceptación:**
- [ ] Después de guardar una revisión, puedo hacer clic en "Generar Informe"
- [ ] Veo una vista previa del informe antes de generarlo
- [ ] El informe incluye: logo clínica, datos paciente, hallazgos, odontograma, fotos, tratamientos, recomendaciones
- [ ] Puedo seleccionar qué fotos incluir en el informe
- [ ] Puedo editar las recomendaciones antes de generar
- [ ] El PDF se genera en menos de 10 segundos
- [ ] El PDF tiene formato profesional y legible
- [ ] El PDF se almacena automáticamente en el sistema

**Prioridad:** Alta  
**Estimación:** 13 puntos  
**Sprint:** 1

---

### US-C-014: Enviar Informe a la Familia
**Como** odontólogo  
**Quiero** enviar el informe directamente a los padres  
**Para** que lo reciban inmediatamente

**Criterios de Aceptación:**
- [ ] Después de generar el informe, puedo hacer clic en "Enviar"
- [ ] Veo las opciones: email, WhatsApp (si disponible), solo descargar
- [ ] Si elijo email, se envía automáticamente a los tutores registrados
- [ ] El email incluye un mensaje personalizable
- [ ] El PDF va adjunto al email
- [ ] También se incluye un enlace para ver en la app
- [ ] Veo confirmación de que se envió correctamente
- [ ] El envío queda registrado en el historial
- [ ] Los padres reciben notificación en la app

**Prioridad:** Alta  
**Estimación:** 5 puntos  
**Sprint:** 1

---

### US-C-015: Personalizar Plantilla de Informe
**Como** administrador  
**Quiero** personalizar la plantilla del informe  
**Para** que refleje la imagen de mi clínica

**Criterios de Aceptación:**
- [ ] Puedo acceder a configuración de plantillas
- [ ] Puedo subir el logo de la clínica
- [ ] Puedo configurar colores corporativos
- [ ] Puedo editar textos estándar (encabezados, pies de página)
- [ ] Puedo previsualizar cómo quedará el informe
- [ ] Puedo crear múltiples plantillas (ej. una por profesional)
- [ ] Puedo establecer una plantilla como predeterminada
- [ ] Los cambios se aplican a nuevos informes (no a los ya generados)

**Prioridad:** Media  
**Estimación:** 8 puntos  
**Sprint:** 2

---

## 🎯 Épica 4: Gestión de Nivel de Riesgo

### US-C-016: Actualización Automática de Riesgo
**Como** sistema  
**Quiero** calcular automáticamente el nivel de riesgo tras cada revisión  
**Para** mantener actualizado el estado del paciente

**Criterios de Aceptación:**
- [ ] Al guardar una revisión, el sistema calcula el nivel de riesgo
- [ ] El cálculo considera: caries en último año, índice de placa, asistencia, dieta, fluoración
- [ ] El sistema asigna puntuación según criterios predefinidos
- [ ] Verde: 0-3 puntos, Amarillo: 4-7 puntos, Rojo: 8+ puntos
- [ ] Si el nivel cambia, se registra en el historial
- [ ] Si cambia a rojo, se genera una alerta
- [ ] El nuevo nivel se muestra en el carnet digital
- [ ] Se notifica a la familia si hay cambio significativo

**Prioridad:** Alta  
**Estimación:** 8 puntos  
**Sprint:** 1

---

### US-C-017: Ajuste Manual de Riesgo
**Como** odontólogo  
**Quiero** ajustar manualmente el nivel de riesgo si lo considero necesario  
**Para** reflejar situaciones que el cálculo automático no captura

**Criterios de Aceptación:**
- [ ] Puedo hacer clic en el indicador de riesgo
- [ ] Veo los criterios que se evaluaron y la puntuación
- [ ] Puedo hacer clic en "Ajustar Manualmente"
- [ ] Puedo seleccionar el nivel correcto (verde, amarillo, rojo)
- [ ] Debo justificar por qué hago el ajuste manual
- [ ] El ajuste se registra indicando quién y por qué lo hizo
- [ ] El ajuste manual prevalece sobre el cálculo automático
- [ ] Puedo revertir al cálculo automático si lo deseo

**Prioridad:** Media  
**Estimación:** 5 puntos  
**Sprint:** 2

---

### US-C-018: Ver Evolución del Riesgo
**Como** odontólogo  
**Quiero** ver la evolución del nivel de riesgo a lo largo del tiempo  
**Para** evaluar si las intervenciones están funcionando

**Criterios de Aceptación:**
- [ ] Veo un gráfico con la evolución del riesgo
- [ ] El gráfico muestra cambios a lo largo del tiempo
- [ ] Puedo ver qué factores influyeron en cada cambio
- [ ] Puedo filtrar por rango de fechas
- [ ] Veo marcadores en eventos importantes (cambio de plan, tratamientos)
- [ ] Puedo exportar el gráfico como imagen
- [ ] Puedo incluir el gráfico en informes

**Prioridad:** Baja  
**Estimación:** 5 puntos  
**Sprint:** 3

---

## 🎯 Épica 5: Dashboard y Estadísticas

### US-C-019: Ver Dashboard Principal
**Como** profesional de la clínica  
**Quiero** ver un dashboard al iniciar sesión  
**Para** tener una visión general del día

**Criterios de Aceptación:**
- [ ] Veo widgets con métricas clave: pacientes activos, citas hoy, alertas
- [ ] Veo distribución de pacientes por nivel de riesgo
- [ ] Veo mi agenda del día con próximas citas
- [ ] Veo lista de revisiones pendientes
- [ ] Veo alertas de pacientes que requieren atención
- [ ] Puedo hacer clic en cualquier elemento para ver detalles
- [ ] El dashboard se actualiza en tiempo real
- [ ] Puedo personalizar qué widgets ver

**Prioridad:** Alta  
**Estimación:** 13 puntos  
**Sprint:** 1

---

### US-C-020: Ver Estadísticas Clínicas
**Como** odontólogo  
**Quiero** ver estadísticas sobre el estado de salud de mis pacientes  
**Para** evaluar la efectividad de los tratamientos preventivos

**Criterios de Aceptación:**
- [ ] Veo distribución de niveles de riesgo (gráfico circular)
- [ ] Veo porcentaje de niños con HIM activo
- [ ] Veo índice de caries medio (CAOD/ceod)
- [ ] Veo efectividad de selladores (% que permanecen intactos)
- [ ] Veo evolución de índices de higiene
- [ ] Puedo filtrar por rango de fechas, edad, tipo de plan
- [ ] Puedo comparar periodos (ej. este año vs año anterior)
- [ ] Puedo exportar las estadísticas

**Prioridad:** Media  
**Estimación:** 13 puntos  
**Sprint:** 2

---

### US-C-021: Ver Estadísticas Operativas
**Como** administrador  
**Quiero** ver métricas operativas de la clínica  
**Para** optimizar la gestión

**Criterios de Aceptación:**
- [ ] Veo tasa de asistencia a citas
- [ ] Veo tasa de cancelación
- [ ] Veo tiempo medio por tipo de cita
- [ ] Veo productividad por profesional
- [ ] Veo ocupación de agenda
- [ ] Veo pacientes nuevos vs recurrentes
- [ ] Puedo filtrar por profesional, periodo, tipo de cita
- [ ] Puedo exportar los datos

**Prioridad:** Media  
**Estimación:** 13 puntos  
**Sprint:** 2

---

### US-C-022: Exportar Datos
**Como** administrador  
**Quiero** exportar datos del sistema  
**Para** análisis externos o auditorías

**Criterios de Aceptación:**
- [ ] Puedo seleccionar qué datos exportar (pacientes, citas, pagos, etc.)
- [ ] Puedo aplicar filtros antes de exportar
- [ ] Puedo elegir formato: Excel, CSV, PDF
- [ ] El archivo se genera y descarga automáticamente
- [ ] Los datos sensibles se anonimizan si es necesario
- [ ] La exportación queda registrada en el log de auditoría
- [ ] Puedo programar exportaciones automáticas periódicas

**Prioridad:** Media  
**Estimación:** 8 puntos  
**Sprint:** 2

---

## 🎯 Épica 6: Gestión de Agenda

### US-C-023: Ver Agenda del Día
**Como** recepcionista  
**Quiero** ver todas las citas programadas para hoy  
**Para** organizar el flujo de pacientes

**Criterios de Aceptación:**
- [ ] Veo una lista de todas las citas de hoy
- [ ] Cada cita muestra: hora, paciente, tipo, profesional, estado
- [ ] Puedo ver en vista lista o calendario
- [ ] Puedo filtrar por profesional
- [ ] Veo códigos de color según tipo de cita
- [ ] Puedo marcar citas como "Paciente llegó"
- [ ] Veo alertas de citas sin confirmar
- [ ] Puedo hacer clic en una cita para ver/editar detalles

**Prioridad:** Alta  
**Estimación:** 8 puntos  
**Sprint:** 2

---

### US-C-024: Crear Nueva Cita
**Como** recepcionista  
**Quiero** programar una cita para un paciente  
**Para** organizar las visitas

**Criterios de Aceptación:**
- [ ] Puedo hacer clic en un hueco libre del calendario
- [ ] Busco y selecciono el paciente
- [ ] Selecciono tipo de cita (revisión, urgencia, seguimiento)
- [ ] Selecciono profesional
- [ ] Selecciono duración (prellenada según tipo)
- [ ] Puedo añadir observaciones
- [ ] El sistema valida que no haya conflictos
- [ ] Se crea la cita y aparece en el calendario
- [ ] Se envía confirmación automática a la familia
- [ ] Se programan recordatorios automáticos

**Prioridad:** Alta  
**Estimación:** 8 puntos  
**Sprint:** 2

---

### US-C-025: Gestionar Disponibilidad
**Como** administrador  
**Quiero** configurar la disponibilidad de cada profesional  
**Para** que solo se puedan agendar citas en horarios válidos

**Criterios de Aceptación:**
- [ ] Puedo acceder a configuración de disponibilidad
- [ ] Selecciono un profesional
- [ ] Configuro horarios por día de la semana
- [ ] Puedo marcar días/horarios como no disponibles (vacaciones, formación)
- [ ] Puedo configurar duración por defecto de cada tipo de cita
- [ ] Puedo establecer tiempo de buffer entre citas
- [ ] Los cambios se reflejan inmediatamente en el calendario
- [ ] Las citas existentes no se ven afectadas

**Prioridad:** Media  
**Estimación:** 8 puntos  
**Sprint:** 2

---

### US-C-026: Gestionar Lista de Espera
**Como** recepcionista  
**Quiero** gestionar la lista de espera  
**Para** aprovechar huecos que se liberan

**Criterios de Aceptación:**
- [ ] Veo lista de pacientes en espera
- [ ] Cada entrada muestra: paciente, tipo cita, preferencias, prioridad
- [ ] Puedo ordenar por prioridad o fecha de solicitud
- [ ] Cuando se libera un hueco, veo sugerencias de la lista de espera
- [ ] Puedo contactar al paciente directamente desde la lista
- [ ] Puedo convertir una entrada de espera en cita programada
- [ ] Puedo eliminar entradas de la lista
- [ ] Los pacientes reciben notificación cuando hay disponibilidad

**Prioridad:** Media  
**Estimación:** 8 puntos  
**Sprint:** 2

---

## 🎯 Épica 7: Configuración y Administración

### US-C-027: Gestionar Usuarios de la Clínica
**Como** administrador  
**Quiero** crear y gestionar usuarios del sistema  
**Para** dar acceso a mi equipo

**Criterios de Aceptación:**
- [ ] Puedo ver lista de todos los usuarios
- [ ] Puedo crear nuevo usuario: email, nombre, rol
- [ ] Roles disponibles: admin, odontólogo, higienista, recepción
- [ ] El sistema genera contraseña temporal
- [ ] El usuario recibe email con credenciales
- [ ] Puedo editar datos de usuarios existentes
- [ ] Puedo desactivar usuarios (no eliminar)
- [ ] Puedo resetear contraseña de un usuario
- [ ] Veo último acceso de cada usuario

**Prioridad:** Alta  
**Estimación:** 8 puntos  
**Sprint:** 1

---

### US-C-028: Configurar Datos de la Clínica
**Como** administrador  
**Quiero** configurar los datos de mi clínica  
**Para** personalizar el sistema

**Criterios de Aceptación:**
- [ ] Puedo editar nombre de la clínica
- [ ] Puedo subir logo
- [ ] Puedo configurar colores corporativos
- [ ] Puedo editar datos de contacto (dirección, teléfono, email, web)
- [ ] Puedo configurar redes sociales
- [ ] Los cambios se reflejan en toda la aplicación
- [ ] Los cambios se aplican a informes generados posteriormente
- [ ] Puedo previsualizar cómo quedará

**Prioridad:** Alta  
**Estimación:** 5 puntos  
**Sprint:** 1

---

### US-C-029: Configurar Planes de Salud
**Como** administrador  
**Quiero** configurar los tipos de planes y precios  
**Para** adaptarlos a mi modelo de negocio

**Criterios de Aceptación:**
- [ ] Veo lista de planes disponibles (Preventivo, HIM, Crecimiento)
- [ ] Puedo editar el precio de cada plan
- [ ] Puedo editar qué incluye cada plan
- [ ] Puedo configurar frecuencia de revisiones por plan
- [ ] Puedo activar/desactivar planes
- [ ] Puedo crear planes personalizados
- [ ] Los cambios solo afectan a nuevos pacientes
- [ ] Los pacientes existentes mantienen sus condiciones

**Prioridad:** Media  
**Estimación:** 8 puntos  
**Sprint:** 2

---

### US-C-030: Ver Logs de Auditoría
**Como** administrador  
**Quiero** ver el registro de todas las acciones en el sistema  
**Para** auditoría y seguridad

**Criterios de Aceptación:**
- [ ] Veo lista de todas las acciones registradas
- [ ] Cada entrada muestra: fecha/hora, usuario, acción, recurso afectado
- [ ] Puedo filtrar por usuario, tipo de acción, fecha
- [ ] Puedo buscar por recurso específico (ej. un paciente)
- [ ] Veo detalles de cambios (qué se modificó)
- [ ] Puedo exportar los logs
- [ ] Los logs no pueden ser modificados o eliminados
- [ ] Los logs se retienen por al menos 2 años

**Prioridad:** Media  
**Estimación:** 8 puntos  
**Sprint:** 2

---

## 📊 Resumen de Prioridades

### Sprint 1 (MVP)
- US-C-001: Dar de Alta Paciente
- US-C-002: Buscar Paciente
- US-C-003: Filtrar Lista
- US-C-004: Ver Ficha Completa
- US-C-005: Editar Datos
- US-C-006 a US-C-011: Registro de Revisiones
- US-C-013: Generar Informe
- US-C-014: Enviar Informe
- US-C-016: Actualización Automática Riesgo
- US-C-019: Dashboard Principal
- US-C-027: Gestionar Usuarios
- US-C-028: Configurar Clínica

### Sprint 2
- US-C-012: Historial de Revisiones
- US-C-015: Personalizar Plantilla
- US-C-017: Ajuste Manual Riesgo
- US-C-020 a US-C-022: Estadísticas
- US-C-023 a US-C-026: Gestión de Agenda
- US-C-029: Configurar Planes
- US-C-030: Logs de Auditoría

### Sprint 3
- US-C-018: Evolución del Riesgo
- Mejoras y optimizaciones

---

## 🎯 Definición de Hecho (Definition of Done)

Para considerar una historia de usuario como completada:

- [ ] Código implementado y revisado
- [ ] Tests unitarios escritos y pasando
- [ ] Tests de integración pasando
- [ ] Documentación técnica actualizada
- [ ] UI/UX revisada y aprobada
- [ ] Funcionalidad probada en diferentes navegadores/dispositivos
- [ ] Sin bugs críticos o bloqueantes
- [ ] Código mergeado a rama principal
- [ ] Desplegado en entorno de staging
- [ ] Demo realizada al Product Owner
- [ ] Aprobación del Product Owner
