# Requisitos Funcionales - OMI

## 📋 RF-01: Acceso y Perfiles

### RF-01.1: Sistema de Autenticación
**Prioridad**: Alta | **Fase**: MVP

#### Descripción
El sistema debe permitir el acceso seguro a diferentes tipos de usuarios con métodos de autenticación adaptados a cada perfil.

#### Requisitos Específicos

##### RF-01.1.1: Autenticación Área Clínica
- Login con email y contraseña
- Autenticación de dos factores (2FA) opcional
- Recuperación de contraseña por email
- Sesión con timeout configurable (30 min por defecto)
- Bloqueo de cuenta tras 5 intentos fallidos

##### RF-01.1.2: Autenticación Área Familias
- Login con email
- Login con número de teléfono + OTP
- Login con código QR (generado desde la clínica)
- Opción "Recordar dispositivo" (30 días)
- Autenticación biométrica en móviles (Face ID, Touch ID)

### RF-01.2: Gestión de Roles y Permisos
**Prioridad**: Alta | **Fase**: MVP

#### Roles del Sistema

##### Área Clínica

**Administrador**
- Acceso completo al sistema
- Gestión de usuarios y permisos
- Configuración de la clínica
- Acceso a todas las estadísticas
- Exportación de datos
- Gestión de planes y precios

**Odontólogo**
- Gestión completa de pacientes asignados
- Registro de revisiones y tratamientos
- Visualización de historial completo
- Generación de informes
- Subida de fotos clínicas
- Prescripción de tratamientos

**Higienista**
- Registro de sesiones de higiene
- Aplicación de fluoración y selladores
- Educación preventiva
- Seguimiento HIM (Higiene Interproximal Motivada)
- Visualización de historial
- Comunicación con familias

**Recepción**
- Gestión de citas
- Registro de pagos
- Envío de recordatorios
- Alta de nuevos pacientes
- Visualización limitada de historial
- Generación de códigos QR para familias

##### Área Familias

**Padre/Tutor**
- Visualización de carnets de sus hijos
- Acceso a informes de revisión
- Gestión de citas
- Recepción de notificaciones
- Acceso a recursos educativos
- Gestión de pagos
- Comunicación con la clínica

**Niño (Vista Simplificada)**
- Visualización de su carnet digital
- Visualización de medallas y logros
- Acceso a contenido educativo gamificado
- Sin acceso a información médica detallada

---

## 📋 RF-02: Gestión de Pacientes

### RF-02.1: Alta de Pacientes
**Prioridad**: Alta | **Fase**: MVP

#### Datos Obligatorios
- Nombre completo del niño
- Fecha de nacimiento
- DNI/NIE (del niño o tutor)
- Datos del tutor legal:
  - Nombre completo
  - Email
  - Teléfono móvil
  - Relación con el niño
- Tipo de plan contratado
- Fecha de inicio del plan
- Consentimiento RGPD firmado

#### Datos Opcionales
- Foto del niño
- Segundo tutor legal
- Teléfono adicional
- Dirección postal
- Alergias conocidas
- Medicación habitual
- Observaciones médicas relevantes

### RF-02.2: Tipos de Planes
**Prioridad**: Alta | **Fase**: MVP

#### Plan Preventivo
- 2 revisiones anuales
- Fluoración (según protocolo)
- Selladores de fosas y fisuras
- Radiografías preventivas
- Educación en higiene oral

#### Plan HIM (Higiene Interproximal Motivada)
- Todo lo incluido en Plan Preventivo
- Sesiones de higiene profesional (según riesgo)
- Seguimiento personalizado de higiene
- Tinción de placa bacteriana
- Motivación y técnicas de cepillado

#### Plan Crecimiento
- Todo lo incluido en Plan HIM
- Seguimiento de desarrollo oclusal
- Detección precoz de maloclusiones
- Derivación a ortodoncia si necesario
- Estudio cefalométrico básico

### RF-02.3: Historial de Paciente
**Prioridad**: Alta | **Fase**: MVP

#### Información del Historial
- Línea temporal de todas las visitas
- Tratamientos preventivos aplicados:
  - Fluoración (fecha, tipo, diente/zona)
  - Selladores (fecha, diente, estado)
  - Limpiezas profesionales
- Hallazgos clínicos por visita
- Fotos clínicas organizadas por fecha
- Evolución del nivel de riesgo
- Índices de higiene (O'Leary, IHOS)
- Observaciones del profesional
- Tratamientos derivados (ortodoncia, etc.)

### RF-02.4: Búsqueda y Filtrado
**Prioridad**: Media | **Fase**: MVP

#### Criterios de Búsqueda
- Nombre del paciente
- Nombre del tutor
- Número de historia clínica
- Teléfono
- Email
- Tipo de plan
- Nivel de riesgo
- Próxima revisión pendiente
- Estado del plan (activo, vencido, cancelado)

---

## 📋 RF-03: Carnet Digital

### RF-03.1: Estructura del Carnet
**Prioridad**: Alta | **Fase**: MVP

#### Información Visible
- Foto del niño
- Nombre completo
- Edad actual
- Tipo de plan
- Fecha de inicio del plan
- Fecha de próxima revisión
- Nivel de riesgo actual (semáforo)
- Número de revisiones completadas
- Sellos/checks de revisiones
- Medallas y logros obtenidos

### RF-03.2: Sistema de Sellos
**Prioridad**: Alta | **Fase**: MVP

#### Funcionamiento
- Cada revisión completada genera un sello
- Sellos diferenciados por tipo:
  - 🦷 Revisión preventiva
  - ✨ Sesión de higiene
  - 🛡️ Aplicación de flúor
  - 🔒 Selladores aplicados
- Fecha visible en cada sello
- Comentario breve del profesional (opcional)

### RF-03.3: Sistema de Gamificación
**Prioridad**: Media | **Fase**: 3

#### Medallas y Logros

**Medallas de Asistencia**
- 🥉 Bronce: 3 revisiones completadas
- 🥈 Plata: 6 revisiones completadas
- 🥇 Oro: 12 revisiones completadas
- 💎 Diamante: 24 revisiones completadas

**Medallas de Higiene**
- ⭐ Estrella de Higiene: Índice O'Leary < 20%
- 🌟 Súper Estrella: 3 visitas consecutivas con buena higiene
- ✨ Campeón de Higiene: 6 meses de higiene excelente

**Medallas Especiales**
- 🦸 Sin Caries: 1 año sin caries nuevas
- 🎯 Objetivo Cumplido: Mejora significativa en higiene
- 🏆 Paciente Ejemplar: Asistencia perfecta anual

### RF-03.4: Indicador de Riesgo
**Prioridad**: Alta | **Fase**: MVP

#### Niveles de Riesgo

**🟢 Riesgo Bajo (Verde)**
- Sin caries activas
- Higiene oral buena (O'Leary < 20%)
- Asistencia regular a revisiones
- Dieta adecuada
- Fluoración correcta

**🟡 Riesgo Moderado (Amarillo)**
- 1-2 caries en último año
- Higiene oral regular (O'Leary 20-40%)
- Alguna falta a revisiones
- Dieta con riesgo moderado
- Necesita refuerzo preventivo

**🔴 Riesgo Alto (Rojo)**
- 3+ caries en último año
- Higiene oral deficiente (O'Leary > 40%)
- Faltas frecuentes a revisiones
- Dieta cariogénica
- Requiere intervención intensiva

#### Actualización del Riesgo
- Se actualiza en cada revisión
- Basado en criterios clínicos objetivos
- Visible para familia y clínica
- Genera alertas automáticas si cambia a rojo

---

## 📋 RF-04: Informes de Revisión

### RF-04.1: Registro de Revisión
**Prioridad**: Alta | **Fase**: MVP

#### Formulario de Revisión Digital

**Datos Generales**
- Fecha de la revisión
- Profesional que realiza la revisión
- Tipo de revisión (preventiva, urgencia, seguimiento)
- Motivo de consulta (si aplica)

**Exploración Clínica**
- Odontograma interactivo
- Estado de cada diente:
  - Sano
  - Caries
  - Obturado
  - Sellador
  - Ausente
  - En erupción
- Hallazgos en tejidos blandos
- Estado de encías
- Oclusión

**Higiene Oral**
- Índice de placa (O'Leary)
- Zonas con mayor acumulación
- Técnica de cepillado observada
- Uso de hilo dental
- Observaciones

**Tratamientos Aplicados**
- Fluoración (tipo, concentración)
- Selladores aplicados (dientes)
- Limpieza profesional
- Otros tratamientos preventivos

**Plan de Tratamiento**
- Tratamientos necesarios
- Prioridad (urgente, programado, opcional)
- Presupuesto estimado
- Derivaciones (ortodoncia, cirugía, etc.)

**Recomendaciones**
- Consejos de higiene personalizados
- Cambios en dieta
- Productos recomendados
- Próxima revisión (fecha sugerida)

### RF-04.2: Fotografía Clínica
**Prioridad**: Alta | **Fase**: MVP

#### Tipos de Fotografías
- Extraorales (frontal, perfil, sonrisa)
- Intraorales (frontal, laterales, oclusal)
- Fotografías HIM (tinción de placa)
- Fotografías de hallazgos específicos

#### Gestión de Imágenes
- Captura desde la app (cámara o importación)
- Organización por fecha y tipo
- Comparación lado a lado (evolución)
- Anotaciones sobre las imágenes
- Privacidad: solo visible para clínica y familia del paciente
- Almacenamiento seguro y encriptado

### RF-04.3: Generación de Informe PDF
**Prioridad**: Alta | **Fase**: MVP

#### Contenido del PDF
- Logo y datos de la clínica
- Datos del paciente
- Fecha de la revisión
- Resumen de hallazgos
- Odontograma visual
- Fotografías seleccionadas
- Tratamientos realizados
- Plan de tratamiento propuesto
- Recomendaciones
- Fecha de próxima revisión
- Firma digital del profesional

#### Envío Automático
- Email automático a los padres tras completar revisión
- Opción de envío por WhatsApp
- Descarga desde la app
- Historial de informes enviados

---

## 📋 RF-05: Agenda y Recordatorios

### RF-05.1: Gestión de Citas
**Prioridad**: Alta | **Fase**: 2

#### Funcionalidades Clínica
- Calendario visual (día, semana, mes)
- Asignación de citas por profesional
- Duración configurable por tipo de cita
- Bloqueo de horarios (vacaciones, formación)
- Lista de espera
- Reprogramación de citas
- Cancelación con motivo
- Historial de citas del paciente

#### Funcionalidades Familias
- Solicitud de cita online
- Visualización de citas programadas
- Recordatorio en calendario personal
- Opción de cancelar/reprogramar (con límite de tiempo)
- Confirmación de asistencia

### RF-05.2: Integración con Calendarios
**Prioridad**: Media | **Fase**: 2

#### Integraciones
- Google Calendar (bidireccional)
- Nemo (si API disponible)
- Exportación iCal
- Sincronización automática

### RF-05.3: Sistema de Recordatorios
**Prioridad**: Alta | **Fase**: 2

#### Tipos de Recordatorios

**Recordatorio de Cita**
- 7 días antes: Notificación push + email
- 1 día antes: Notificación push + SMS (opcional)
- 2 horas antes: Notificación push

**Recordatorio de Revisión Periódica**
- Cuando se acerca la fecha de revisión semestral
- Si han pasado más de 6 meses sin revisión
- Recordatorio personalizado según tipo de plan

**Recordatorios de Tratamiento**
- Fluoración pendiente
- Selladores recomendados
- Seguimiento de ortodoncia
- Tratamiento prescrito no completado

**Recordatorios Educativos**
- Consejos de higiene semanales
- Cambio de cepillo (cada 3 meses)
- Revisión de técnica de cepillado

#### Canales de Notificación
- Push notification (app)
- Email
- SMS (opcional, con coste)
- WhatsApp Business API (fase posterior)

---

## 📋 RF-06: Comunicación con Familias

### RF-06.1: Sistema de Mensajería
**Prioridad**: Media | **Fase**: 3

#### Funcionalidades
- Chat bidireccional clínica-familia
- Mensajes de texto e imágenes
- Estado de lectura
- Respuestas rápidas predefinidas
- Archivo de conversaciones
- Búsqueda en historial de mensajes

### RF-06.2: Notificaciones Push
**Prioridad**: Alta | **Fase**: 2

#### Tipos de Notificaciones
- Citas y recordatorios
- Informes disponibles
- Mensajes de la clínica
- Cambios en el nivel de riesgo
- Logros y medallas obtenidas
- Avisos importantes

#### Configuración
- Activar/desactivar por tipo
- Horario de no molestar
- Frecuencia de notificaciones educativas

### RF-06.3: Recursos Educativos
**Prioridad**: Media | **Fase**: 3

#### Contenidos
- Vídeos cortos (1-3 min):
  - Técnica de cepillado por edades
  - Uso del hilo dental
  - Importancia de la prevención
  - Alimentación saludable
- Infografías descargables
- Artículos breves
- Juegos educativos para niños
- Preguntas frecuentes

#### Organización
- Por edad del niño
- Por tema (higiene, dieta, ortodoncia)
- Recomendados por el profesional
- Favoritos guardados

---

## 📋 RF-07: Ventajas Económicas y Pagos

### RF-07.1: Información del Plan
**Prioridad**: Media | **Fase**: 2

#### Contenido
- Descripción detallada del plan contratado
- Servicios incluidos vs. no incluidos
- Precio anual del plan
- Descuentos aplicables
- Comparativa de planes
- Ventajas económicas (ahorro estimado)

### RF-07.2: Módulo de Pagos
**Prioridad**: Media | **Fase**: 2

#### Gestión de Cuotas del Plan
- Pago anual completo
- Pago fraccionado (mensual, trimestral)
- Recordatorio de renovación
- Historial de pagos
- Recibos descargables
- Estado del plan (activo, pendiente de pago, vencido)

#### Financiación de Ortodoncia
- Calculadora de cuotas
- Plan de 36 meses sin intereses
- Resumen de pagos pendientes
- Calendario de pagos
- Domiciliación bancaria
- Notificaciones de cargo

### RF-07.3: Pasarela de Pago
**Prioridad**: Media | **Fase**: 2

#### Métodos de Pago
- Tarjeta de crédito/débito
- Transferencia bancaria
- Domiciliación SEPA
- Bizum (opcional)

#### Seguridad
- Cumplimiento PCI DSS
- Tokenización de tarjetas
- 3D Secure
- Certificado SSL

---

## 📋 RF-08: Panel de Control Clínica

### RF-08.1: Dashboard Principal
**Prioridad**: Alta | **Fase**: MVP

#### Widgets del Dashboard

**Resumen de Pacientes**
- Total de pacientes activos
- Desglose por tipo de plan
- Nuevos pacientes este mes
- Pacientes de riesgo alto

**Agenda del Día**
- Citas de hoy
- Próximas citas
- Citas pendientes de confirmar
- Cancelaciones recientes

**Revisiones Pendientes**
- Pacientes con revisión vencida
- Próximas revisiones (próximos 30 días)
- Tratamientos pendientes

**Alertas y Notificaciones**
- Pacientes que cambiaron a riesgo alto
- Pagos pendientes
- Mensajes sin responder
- Tareas pendientes

### RF-08.2: Estadísticas y Reportes
**Prioridad**: Media | **Fase**: 2

#### Estadísticas Clínicas
- Distribución de niveles de riesgo
- % de niños con HIM activo
- Índice de caries (CAOD/ceod medio)
- Efectividad de selladores
- Evolución de índices de higiene
- Adherencia a tratamientos preventivos

#### Estadísticas Operativas
- Tasa de asistencia a citas
- Tasa de cancelación
- Tiempo medio por tipo de cita
- Productividad por profesional
- Ocupación de agenda

#### Estadísticas Económicas
- Ingresos por planes
- Tasa de renovación
- Conversión a ortodoncia
- Valor medio por paciente
- Previsión de ingresos

### RF-08.3: Exportación de Datos
**Prioridad**: Media | **Fase**: 2

#### Formatos de Exportación
- Excel (.xlsx)
- PDF
- CSV
- JSON (para integraciones)

#### Datos Exportables
- Listado de pacientes (con filtros)
- Historial de citas
- Estadísticas personalizadas
- Informes financieros
- Datos para auditorías

---

## 📋 RF-09: Personalización

### RF-09.1: Branding de la Clínica
**Prioridad**: Alta | **Fase**: MVP

#### Elementos Personalizables
- Logo de la clínica
- Colores corporativos (primario, secundario)
- Nombre de la clínica
- Datos de contacto
- Redes sociales
- Eslogan/tagline

#### Aplicación del Branding
- App desktop
- Portal web familias
- Informes PDF
- Emails automáticos
- Carnets digitales

### RF-09.2: Configuración de la Clínica
**Prioridad**: Media | **Fase**: MVP

#### Parámetros Configurables
- Horarios de atención
- Duración de citas por tipo
- Protocolos de fluoración
- Criterios de riesgo (ponderación)
- Frecuencia de revisiones por plan
- Precios de planes
- Textos de consentimientos
- Plantillas de mensajes

### RF-09.3: Escalabilidad
**Prioridad**: Baja | **Fase**: 4

#### Funcionalidades Futuras
- Módulo de ortodoncia avanzado
- Integración con escáneres 3D
- Simulación de tratamientos
- Telemedicina
- IA para detección de caries
- Integración con otros software dentales

---

## 📋 RF-10: Seguridad y Legalidad

### RF-10.1: Cumplimiento RGPD
**Prioridad**: Alta | **Fase**: MVP

#### Gestión de Consentimientos
- Consentimiento informado para tratamiento de datos
- Consentimiento para uso de imágenes
- Consentimiento para comunicaciones comerciales
- Registro de consentimientos con fecha y hora
- Posibilidad de revocar consentimientos

#### Derechos de los Usuarios
- Derecho de acceso a datos personales
- Derecho de rectificación
- Derecho de supresión ("derecho al olvido")
- Derecho de portabilidad
- Derecho de oposición
- Proceso automatizado para ejercer derechos

### RF-10.2: Seguridad de Acceso
**Prioridad**: Alta | **Fase**: MVP

#### Medidas de Seguridad
- Contraseñas robustas (mínimo 8 caracteres, mayúsculas, números, símbolos)
- Encriptación de contraseñas (bcrypt)
- Autenticación de dos factores (2FA)
- Tokens JWT con expiración
- Refresh tokens
- Bloqueo de cuenta tras intentos fallidos
- Registro de accesos (audit log)
- Cierre de sesión automático por inactividad

### RF-10.3: Seguridad de Datos
**Prioridad**: Alta | **Fase**: MVP

#### Protección de Datos
- Encriptación de datos en tránsito (TLS 1.3)
- Encriptación de datos en reposo (AES-256)
- Encriptación de imágenes clínicas
- Backup automático diario
- Backup en ubicación geográfica diferente
- Plan de recuperación ante desastres
- Anonimización de datos para estadísticas

### RF-10.4: Infraestructura Segura
**Prioridad**: Alta | **Fase**: MVP

#### Requisitos de Infraestructura
- Servidores en la Unión Europea
- Certificación ISO 27001 (objetivo)
- Firewall y protección DDoS
- Monitorización 24/7
- Actualizaciones de seguridad automáticas
- Escaneo de vulnerabilidades regular
- Plan de respuesta a incidentes

### RF-10.5: Auditoría y Trazabilidad
**Prioridad**: Media | **Fase**: MVP

#### Registro de Actividad
- Log de accesos al sistema
- Log de modificaciones de datos sensibles
- Log de exportaciones de datos
- Log de envío de informes
- Retención de logs (mínimo 2 años)
- Acceso a logs solo para administradores

---

## 📊 Resumen de Prioridades

### Fase MVP (Mínimo Producto Viable)
- ✅ Autenticación y perfiles
- ✅ Gestión básica de pacientes
- ✅ Carnet digital con sellos
- ✅ Registro de revisiones
- ✅ Generación de informes PDF
- ✅ Indicador de riesgo
- ✅ Seguridad y RGPD básico
- ✅ Dashboard clínica básico

### Fase 2 (Funcionalidades Avanzadas)
- 📅 Sistema de citas completo
- 📅 Recordatorios automáticos
- 📅 Módulo de pagos
- 📅 Estadísticas avanzadas
- 📅 Integración con calendarios

### Fase 3 (Gamificación y Comunicación)
- 🎮 Sistema completo de medallas
- 🎮 Recursos educativos
- 🎮 Mensajería bidireccional
- 🎮 Notificaciones push avanzadas

### Fase 4 (Integraciones)
- 🔌 Integración con Nemo
- 🔌 WhatsApp Business API
- 🔌 Pasarela de pagos avanzada
- 🔌 Funcionalidades de ortodoncia
- 🔌 Escáneres 3D

---

## 📝 Notas Adicionales

### Consideraciones Técnicas
- Todos los formularios deben tener validación en cliente y servidor
- Todas las acciones críticas deben tener confirmación
- El sistema debe ser responsive (desktop, tablet, móvil)
- Tiempo de carga máximo: 3 segundos
- Disponibilidad objetivo: 99.9%
- Soporte para navegadores modernos (últimas 2 versiones)

### Consideraciones UX
- Interfaz intuitiva y fácil de usar
- Mínimo número de clics para tareas frecuentes
- Feedback visual inmediato en todas las acciones
- Mensajes de error claros y orientados a la solución
- Ayuda contextual disponible
- Modo oscuro (opcional)

### Accesibilidad
- Cumplimiento WCAG 2.1 nivel AA
- Navegación por teclado
- Soporte para lectores de pantalla
- Contraste adecuado de colores
- Tamaños de fuente ajustables
