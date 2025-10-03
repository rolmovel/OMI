# Casos de Uso - OMI

## 📑 Índice de Casos de Uso

### Área Clínica
1. [CU-01: Login Profesional](#cu-01-login-profesional)
2. [CU-02: Dar de Alta un Paciente](#cu-02-dar-de-alta-un-paciente)
3. [CU-03: Realizar una Revisión](#cu-03-realizar-una-revisión)
4. [CU-04: Generar y Enviar Informe](#cu-04-generar-y-enviar-informe)
5. [CU-05: Gestionar Citas](#cu-05-gestionar-citas)
6. [CU-06: Actualizar Nivel de Riesgo](#cu-06-actualizar-nivel-de-riesgo)
7. [CU-07: Ver Dashboard y Estadísticas](#cu-07-ver-dashboard-y-estadísticas)

### Área Familias
8. [CU-08: Login Familia](#cu-08-login-familia)
9. [CU-09: Ver Carnet Digital](#cu-09-ver-carnet-digital)
10. [CU-10: Solicitar Cita](#cu-10-solicitar-cita)
11. [CU-11: Ver Informes de Revisión](#cu-11-ver-informes-de-revisión)
12. [CU-12: Gestionar Pagos](#cu-12-gestionar-pagos)
13. [CU-13: Acceder a Recursos Educativos](#cu-13-acceder-a-recursos-educativos)

---

## CU-01: Login Profesional

### Descripción
Un profesional de la clínica accede al sistema para comenzar su jornada laboral.

### Actores
- Profesional (Administrador, Odontólogo, Higienista, Recepción)

### Precondiciones
- El profesional tiene una cuenta activa en el sistema
- El profesional tiene credenciales válidas

### Flujo Principal

1. El profesional abre la aplicación desktop OMI
2. El sistema muestra la pantalla de login
3. El profesional introduce su email y contraseña
4. El profesional hace clic en "Iniciar Sesión"
5. El sistema valida las credenciales
6. Si tiene 2FA activado, el sistema solicita el código
7. El profesional introduce el código 2FA
8. El sistema valida el código
9. El sistema registra el acceso en el log de auditoría
10. El sistema muestra el dashboard principal según el rol del profesional

### Flujos Alternativos

**FA-01: Credenciales Incorrectas**
- 5a. Las credenciales son incorrectas
  - El sistema muestra mensaje de error
  - El sistema incrementa el contador de intentos fallidos
  - Si es el 5º intento fallido, el sistema bloquea la cuenta
  - El sistema vuelve al paso 2

**FA-02: Recuperar Contraseña**
- 3a. El profesional hace clic en "¿Olvidaste tu contraseña?"
  - El sistema muestra formulario de recuperación
  - El profesional introduce su email
  - El sistema envía email con enlace de recuperación
  - El profesional accede al enlace y establece nueva contraseña
  - El sistema confirma el cambio
  - El sistema vuelve al paso 2

**FA-03: Cuenta Bloqueada**
- 5a. La cuenta está bloqueada
  - El sistema muestra mensaje informando del bloqueo
  - El sistema sugiere contactar con el administrador
  - Fin del caso de uso

### Postcondiciones
- El profesional está autenticado en el sistema
- Se ha registrado el acceso en el log de auditoría
- El profesional puede acceder a las funcionalidades según su rol

---

## CU-02: Dar de Alta un Paciente

### Descripción
Un profesional de recepción o administrador registra un nuevo paciente en el sistema.

### Actores
- Recepción / Administrador

### Precondiciones
- El profesional está autenticado en el sistema
- El profesional tiene permisos para dar de alta pacientes
- Los padres han firmado el consentimiento RGPD

### Flujo Principal

1. El profesional accede a la sección "Pacientes"
2. El profesional hace clic en "Nuevo Paciente"
3. El sistema muestra el formulario de alta
4. El profesional introduce los datos obligatorios:
   - Nombre completo del niño
   - Fecha de nacimiento
   - DNI/NIE
   - Datos del tutor (nombre, email, teléfono)
   - Tipo de plan
   - Fecha de inicio del plan
5. El profesional opcionalmente añade:
   - Foto del niño
   - Segundo tutor
   - Alergias
   - Observaciones médicas
6. El profesional marca el checkbox de consentimiento RGPD
7. El profesional hace clic en "Guardar"
8. El sistema valida todos los campos
9. El sistema crea el registro del paciente
10. El sistema genera un código QR único para la familia
11. El sistema envía email de bienvenida con credenciales de acceso
12. El sistema muestra confirmación con el código QR
13. El profesional imprime o envía el código QR a la familia

### Flujos Alternativos

**FA-01: Datos Incompletos**
- 8a. Faltan datos obligatorios
  - El sistema marca los campos faltantes en rojo
  - El sistema muestra mensaje indicando los campos requeridos
  - El sistema vuelve al paso 4

**FA-02: Email Duplicado**
- 8a. El email del tutor ya existe en el sistema
  - El sistema muestra mensaje preguntando si es el mismo tutor
  - Si es el mismo tutor, el sistema asocia el nuevo niño a la familia existente
  - Si no es el mismo tutor, el sistema solicita usar otro email
  - El sistema vuelve al paso 4

**FA-03: Cancelar Alta**
- En cualquier momento antes del paso 7
  - El profesional hace clic en "Cancelar"
  - El sistema muestra confirmación "¿Descartar cambios?"
  - Si confirma, el sistema descarta los datos y vuelve a la lista de pacientes
  - Si no confirma, el sistema vuelve al formulario

### Postcondiciones
- El paciente está registrado en el sistema
- La familia tiene acceso a la app
- Se ha generado el carnet digital del niño
- Se ha enviado email de bienvenida
- Se ha registrado el consentimiento RGPD

---

## CU-03: Realizar una Revisión

### Descripción
Un odontólogo o higienista realiza una revisión a un paciente y registra los hallazgos en el sistema.

### Actores
- Odontólogo / Higienista

### Precondiciones
- El profesional está autenticado
- El paciente existe en el sistema
- El paciente tiene una cita programada o es una revisión sin cita previa

### Flujo Principal

1. El profesional busca al paciente por nombre o historia clínica
2. El sistema muestra la ficha del paciente
3. El profesional hace clic en "Nueva Revisión"
4. El sistema muestra el formulario de revisión con:
   - Fecha y hora (prellenada)
   - Tipo de revisión
   - Motivo de consulta
5. El profesional completa la exploración clínica:
   - Actualiza el odontograma interactivo
   - Registra hallazgos en tejidos blandos
   - Evalúa el estado de encías
   - Anota la oclusión
6. El profesional registra la higiene oral:
   - Calcula el índice de placa (O'Leary)
   - Marca zonas con mayor acumulación
   - Observa técnica de cepillado
   - Registra uso de hilo dental
7. El profesional registra tratamientos aplicados:
   - Fluoración (tipo, concentración, zonas)
   - Selladores aplicados (dientes específicos)
   - Limpieza profesional
8. El profesional toma fotografías clínicas:
   - Captura fotos extraorales
   - Captura fotos intraorales
   - Fotos de hallazgos específicos
9. El profesional añade el plan de tratamiento:
   - Tratamientos necesarios
   - Prioridad
   - Presupuesto estimado
10. El profesional añade recomendaciones personalizadas
11. El profesional actualiza el nivel de riesgo basándose en los hallazgos
12. El profesional hace clic en "Guardar Revisión"
13. El sistema valida todos los datos
14. El sistema guarda la revisión en el historial
15. El sistema actualiza el carnet digital con un nuevo sello
16. El sistema actualiza el nivel de riesgo del paciente
17. El sistema muestra confirmación y opción de generar informe

### Flujos Alternativos

**FA-01: Guardar Borrador**
- En cualquier momento antes del paso 12
  - El profesional hace clic en "Guardar Borrador"
  - El sistema guarda el estado actual sin validar
  - El profesional puede continuar la revisión más tarde

**FA-02: Paciente No Colabora**
- 5a. No es posible completar la exploración
  - El profesional marca "Exploración incompleta"
  - El profesional añade observaciones sobre el motivo
  - El sistema permite guardar la revisión parcial
  - El sistema no genera sello en el carnet

**FA-03: Hallazgo Urgente**
- 5a. Se detecta un problema urgente
  - El profesional marca "Requiere atención urgente"
  - El sistema genera alerta automática
  - El sistema sugiere programar cita urgente
  - El profesional continúa con el registro normal

### Postcondiciones
- La revisión está registrada en el historial del paciente
- El carnet digital se ha actualizado con un nuevo sello
- El nivel de riesgo se ha actualizado si corresponde
- Las fotografías están almacenadas de forma segura
- El sistema está listo para generar el informe

---

## CU-04: Generar y Enviar Informe

### Descripción
Tras completar una revisión, el profesional genera un informe en PDF y lo envía a la familia.

### Actores
- Odontólogo / Higienista

### Precondiciones
- Se ha completado una revisión (CU-03)
- El paciente tiene email registrado

### Flujo Principal

1. Tras guardar la revisión, el sistema muestra opción "Generar Informe"
2. El profesional hace clic en "Generar Informe"
3. El sistema muestra vista previa del informe con:
   - Logo y datos de la clínica
   - Datos del paciente
   - Resumen de hallazgos
   - Odontograma visual
   - Fotografías seleccionadas
   - Tratamientos realizados
   - Plan de tratamiento
   - Recomendaciones
   - Firma digital del profesional
4. El profesional revisa el informe
5. El profesional opcionalmente edita secciones:
   - Selecciona/deselecciona fotografías
   - Ajusta recomendaciones
   - Añade notas adicionales
6. El profesional hace clic en "Enviar Informe"
7. El sistema muestra opciones de envío:
   - Email (marcado por defecto)
   - WhatsApp (si disponible)
   - Solo descargar
8. El profesional selecciona "Email"
9. El sistema genera el PDF final
10. El sistema envía email a los padres con:
    - Asunto personalizado
    - Mensaje de la clínica
    - PDF adjunto
    - Enlace para ver en la app
11. El sistema registra el envío en el historial
12. El sistema muestra confirmación "Informe enviado correctamente"
13. El informe queda disponible en la app de la familia

### Flujos Alternativos

**FA-01: Editar Informe**
- 4a. El profesional quiere modificar algo
  - El profesional hace clic en "Editar Revisión"
  - El sistema vuelve al formulario de revisión
  - El profesional realiza cambios
  - El sistema vuelve al paso 3

**FA-02: Solo Descargar**
- 8a. El profesional selecciona "Solo descargar"
  - El sistema genera el PDF
  - El sistema descarga el archivo
  - El profesional puede enviarlo manualmente
  - Fin del caso de uso

**FA-03: Error en Envío de Email**
- 10a. El envío de email falla
  - El sistema muestra mensaje de error
  - El sistema guarda el PDF en el sistema
  - El sistema ofrece reintentar o descargar
  - Si reintenta, vuelve al paso 10
  - Si descarga, va a FA-02

**FA-04: Múltiples Destinatarios**
- 8a. El paciente tiene dos tutores con emails diferentes
  - El sistema muestra ambos emails
  - El profesional puede seleccionar uno o ambos
  - El sistema envía a los seleccionados
  - Continúa en paso 11

### Postcondiciones
- El informe PDF está generado y almacenado
- La familia ha recibido el informe por email
- El envío está registrado en el historial
- El informe está disponible en la app de la familia

---

## CU-05: Gestionar Citas

### Descripción
Un profesional de recepción gestiona las citas de los pacientes en la agenda de la clínica.

### Actores
- Recepción / Administrador

### Precondiciones
- El profesional está autenticado
- Existe al menos un profesional con agenda configurada

### Flujo Principal

**Crear Nueva Cita**

1. El profesional accede a la sección "Agenda"
2. El sistema muestra el calendario con las citas existentes
3. El profesional selecciona un día y hora disponible
4. El sistema muestra formulario de nueva cita
5. El profesional busca y selecciona el paciente
6. El profesional selecciona:
   - Tipo de cita (revisión, urgencia, seguimiento)
   - Profesional asignado
   - Duración (prellenada según tipo)
7. El profesional opcionalmente añade observaciones
8. El profesional hace clic en "Guardar Cita"
9. El sistema valida disponibilidad
10. El sistema crea la cita
11. El sistema envía confirmación por email a la familia
12. El sistema programa recordatorios automáticos
13. El sistema muestra la cita en el calendario

### Flujos Alternativos

**FA-01: Horario No Disponible**
- 9a. El horario ya está ocupado
  - El sistema muestra mensaje de conflicto
  - El sistema sugiere horarios alternativos cercanos
  - El profesional selecciona un horario alternativo
  - El sistema vuelve al paso 9

**FA-02: Reprogramar Cita**
- 2a. El profesional selecciona una cita existente
  - El sistema muestra detalles de la cita
  - El profesional hace clic en "Reprogramar"
  - El sistema muestra calendario con disponibilidad
  - El profesional selecciona nueva fecha/hora
  - El sistema actualiza la cita
  - El sistema notifica a la familia del cambio

**FA-03: Cancelar Cita**
- 2a. El profesional selecciona una cita existente
  - El profesional hace clic en "Cancelar Cita"
  - El sistema solicita motivo de cancelación
  - El profesional introduce el motivo
  - El sistema confirma la cancelación
  - El sistema notifica a la familia
  - El sistema libera el hueco en la agenda

**FA-04: Paciente en Lista de Espera**
- 9a. No hay disponibilidad en las fechas deseadas
  - El profesional hace clic en "Añadir a Lista de Espera"
  - El sistema registra al paciente en lista de espera
  - El sistema notifica cuando haya disponibilidad
  - Fin del caso de uso

### Postcondiciones
- La cita está registrada en el sistema
- La familia ha sido notificada
- Los recordatorios están programados
- La agenda está actualizada

---

## CU-06: Actualizar Nivel de Riesgo

### Descripción
El sistema actualiza automáticamente el nivel de riesgo de un paciente basándose en criterios clínicos, o el profesional lo ajusta manualmente.

### Actores
- Sistema (automático)
- Odontólogo (manual)

### Precondiciones
- El paciente existe en el sistema
- Se ha completado una revisión reciente

### Flujo Principal (Automático)

1. El profesional guarda una revisión completa
2. El sistema evalúa los criterios de riesgo:
   - Número de caries en último año
   - Índice de higiene (O'Leary)
   - Asistencia a revisiones
   - Dieta (si está registrada)
   - Aplicación de fluoración
3. El sistema calcula la puntuación de riesgo
4. El sistema determina el nivel:
   - Verde: Puntuación 0-3
   - Amarillo: Puntuación 4-7
   - Rojo: Puntuación 8+
5. Si el nivel ha cambiado:
   - El sistema actualiza el carnet digital
   - El sistema registra el cambio en el historial
   - Si cambió a rojo, el sistema genera alerta
   - El sistema notifica a la familia
6. El sistema muestra el nuevo nivel en la ficha del paciente

### Flujos Alternativos

**FA-01: Ajuste Manual**
- 3a. El profesional considera que el cálculo automático no es correcto
  - El profesional hace clic en el indicador de riesgo
  - El sistema muestra los criterios evaluados
  - El profesional hace clic en "Ajustar Manualmente"
  - El profesional selecciona el nivel correcto
  - El profesional añade justificación del cambio
  - El sistema guarda el ajuste manual
  - El sistema registra quién y por qué se ajustó
  - Continúa en paso 5

**FA-02: Cambio a Riesgo Alto**
- 4a. El nivel cambia a rojo
  - El sistema genera alerta prioritaria
  - El sistema notifica al odontólogo responsable
  - El sistema sugiere programar revisión de seguimiento
  - El sistema envía notificación a la familia explicando el cambio
  - Continúa en paso 6

**FA-03: Mejora de Riesgo**
- 4a. El nivel mejora (rojo→amarillo o amarillo→verde)
  - El sistema registra la mejora
  - El sistema genera logro en el carnet (si aplica)
  - El sistema envía felicitación a la familia
  - Continúa en paso 6

### Postcondiciones
- El nivel de riesgo está actualizado
- El cambio está registrado en el historial
- Si corresponde, se han enviado notificaciones
- El carnet digital refleja el nivel actual

---

## CU-07: Ver Dashboard y Estadísticas

### Descripción
Un administrador u odontólogo accede al panel de control para ver estadísticas y métricas de la clínica.

### Actores
- Administrador / Odontólogo

### Precondiciones
- El profesional está autenticado
- El profesional tiene permisos para ver estadísticas

### Flujo Principal

1. El profesional accede al Dashboard
2. El sistema muestra los widgets principales:
   - Resumen de pacientes activos
   - Agenda del día
   - Revisiones pendientes
   - Alertas y notificaciones
3. El profesional hace clic en "Ver Estadísticas Detalladas"
4. El sistema muestra opciones de reportes:
   - Estadísticas clínicas
   - Estadísticas operativas
   - Estadísticas económicas
5. El profesional selecciona "Estadísticas Clínicas"
6. El sistema muestra:
   - Gráfico de distribución de niveles de riesgo
   - % de niños con HIM activo
   - Índice de caries medio
   - Efectividad de selladores
   - Evolución de índices de higiene
7. El profesional puede filtrar por:
   - Rango de fechas
   - Tipo de plan
   - Profesional
   - Edad del paciente
8. El profesional aplica filtros
9. El sistema actualiza las estadísticas según filtros
10. El profesional hace clic en "Exportar"
11. El sistema muestra opciones de exportación
12. El profesional selecciona formato (Excel/PDF)
13. El sistema genera el archivo
14. El sistema descarga el archivo

### Flujos Alternativos

**FA-01: Ver Estadísticas Operativas**
- 5a. El profesional selecciona "Estadísticas Operativas"
  - El sistema muestra métricas operativas
  - Tasa de asistencia a citas
  - Tasa de cancelación
  - Tiempo medio por tipo de cita
  - Productividad por profesional
  - Continúa en paso 7

**FA-02: Ver Estadísticas Económicas**
- 5a. El profesional selecciona "Estadísticas Económicas"
  - El sistema muestra métricas económicas
  - Ingresos por planes
  - Tasa de renovación
  - Conversión a ortodoncia
  - Previsión de ingresos
  - Continúa en paso 7

**FA-03: Programar Reporte Automático**
- 10a. El profesional hace clic en "Programar Envío"
  - El sistema muestra opciones de programación
  - El profesional configura frecuencia (semanal/mensual)
  - El profesional añade destinatarios
  - El sistema guarda la programación
  - El sistema enviará reportes automáticamente

### Postcondiciones
- El profesional ha visualizado las estadísticas
- Si se exportó, el archivo está descargado
- Si se programó, el envío automático está configurado

---

## CU-08: Login Familia

### Descripción
Un padre o tutor accede a la aplicación para ver la información de sus hijos.

### Actores
- Padre/Tutor

### Precondiciones
- La familia está registrada en el sistema
- La familia tiene credenciales de acceso

### Flujo Principal

1. El padre accede a la web/app OMI
2. El sistema muestra opciones de login:
   - Email y contraseña
   - Teléfono y código OTP
   - Escanear código QR
3. El padre selecciona "Email y contraseña"
4. El padre introduce sus credenciales
5. El padre opcionalmente marca "Recordar en este dispositivo"
6. El padre hace clic en "Iniciar Sesión"
7. El sistema valida las credenciales
8. El sistema crea la sesión
9. El sistema muestra la pantalla principal con los carnets de sus hijos

### Flujos Alternativos

**FA-01: Login con Teléfono**
- 3a. El padre selecciona "Teléfono"
  - El padre introduce su número de teléfono
  - El sistema envía código OTP por SMS
  - El padre introduce el código recibido
  - El sistema valida el código
  - Continúa en paso 8

**FA-02: Login con Código QR**
- 3a. El padre selecciona "Escanear QR"
  - El sistema activa la cámara
  - El padre escanea el código QR (recibido de la clínica)
  - El sistema valida el código QR
  - Si es la primera vez, el sistema solicita crear contraseña
  - Continúa en paso 8

**FA-03: Credenciales Incorrectas**
- 7a. Las credenciales son incorrectas
  - El sistema muestra mensaje de error
  - El sistema vuelve al paso 2

**FA-04: Primera Vez - Activar Cuenta**
- 7a. Es el primer acceso de la familia
  - El sistema muestra pantalla de bienvenida
  - El sistema solicita crear contraseña
  - El padre crea contraseña
  - El sistema solicita aceptar términos y condiciones
  - El padre acepta
  - Continúa en paso 8

**FA-05: Autenticación Biométrica**
- 2a. El dispositivo tiene biometría configurada
  - El sistema ofrece "Usar Face ID / Touch ID"
  - El padre acepta
  - El sistema solicita autenticación biométrica
  - El padre se autentica
  - Continúa en paso 8

### Postcondiciones
- El padre está autenticado en el sistema
- El padre puede ver la información de sus hijos
- La sesión está activa

---

## CU-09: Ver Carnet Digital

### Descripción
Un padre visualiza el carnet digital de su hijo con toda la información del plan de salud.

### Actores
- Padre/Tutor

### Precondiciones
- El padre está autenticado
- El niño tiene un carnet digital creado

### Flujo Principal

1. El padre ve la pantalla principal con los carnets de sus hijos
2. El padre selecciona el carnet de uno de sus hijos
3. El sistema muestra el carnet digital con:
   - Foto del niño
   - Nombre y edad
   - Tipo de plan
   - Fecha de próxima revisión
   - Nivel de riesgo (semáforo)
   - Sellos de revisiones completadas
   - Medallas y logros obtenidos
4. El padre puede hacer scroll para ver:
   - Historial de sellos (todas las revisiones)
   - Detalle de cada revisión (fecha, tipo, profesional)
   - Galería de medallas con descripción
5. El padre hace clic en un sello específico
6. El sistema muestra detalles de esa revisión:
   - Fecha y profesional
   - Tratamientos aplicados
   - Comentarios del profesional
   - Enlace al informe completo
7. El padre puede descargar o compartir el carnet
8. El padre hace clic en "Compartir Carnet"
9. El sistema genera una imagen del carnet
10. El sistema muestra opciones para compartir (WhatsApp, Email, etc.)

### Flujos Alternativos

**FA-01: Ver Medalla Obtenida**
- 4a. El padre hace clic en una medalla
  - El sistema muestra detalle de la medalla
  - Nombre y descripción
  - Fecha en que se obtuvo
  - Criterios para obtenerla
  - Mensaje de felicitación
  - Opción de compartir el logro

**FA-02: Próxima Revisión Vencida**
- 3a. La fecha de próxima revisión ya pasó
  - El sistema muestra alerta "Revisión pendiente"
  - El sistema ofrece botón "Solicitar Cita"
  - Si el padre hace clic, va a CU-10

**FA-03: Cambio de Nivel de Riesgo**
- 3a. El nivel de riesgo cambió recientemente
  - El sistema muestra badge "Nuevo" en el indicador
  - El padre hace clic en el indicador
  - El sistema explica qué significa el nivel actual
  - El sistema muestra recomendaciones específicas

**FA-04: Múltiples Hijos**
- 1a. La familia tiene varios hijos
  - El sistema muestra todos los carnets en formato carrusel
  - El padre puede deslizar entre carnets
  - El padre puede ver todos en vista lista
  - El padre selecciona el que quiere ver en detalle

### Postcondiciones
- El padre ha visualizado el carnet digital
- El padre está informado del estado de salud bucodental de su hijo

---

## CU-10: Solicitar Cita

### Descripción
Un padre solicita una cita para su hijo desde la aplicación.

### Actores
- Padre/Tutor

### Precondiciones
- El padre está autenticado
- El niño está registrado en el sistema
- La clínica tiene agenda disponible

### Flujo Principal

1. El padre accede al carnet de su hijo
2. El padre hace clic en "Solicitar Cita"
3. El sistema muestra opciones:
   - Revisión programada
   - Consulta urgente
   - Seguimiento
4. El padre selecciona "Revisión programada"
5. El sistema muestra calendario con disponibilidad
6. El padre selecciona una fecha
7. El sistema muestra horarios disponibles ese día
8. El padre selecciona un horario
9. El sistema muestra resumen de la cita:
   - Paciente
   - Tipo de cita
   - Fecha y hora
   - Profesional asignado
   - Ubicación de la clínica
10. El padre opcionalmente añade observaciones
11. El padre hace clic en "Confirmar Cita"
12. El sistema valida disponibilidad
13. El sistema crea la solicitud de cita
14. El sistema envía notificación a la clínica
15. El sistema muestra confirmación al padre
16. El sistema añade la cita al calendario del padre
17. El sistema programa recordatorios

### Flujos Alternativos

**FA-01: Consulta Urgente**
- 4a. El padre selecciona "Consulta urgente"
  - El sistema muestra mensaje explicativo
  - El sistema solicita descripción del problema
  - El padre describe el problema
  - El sistema envía solicitud prioritaria a la clínica
  - El sistema indica que la clínica contactará pronto
  - Fin del caso de uso

**FA-02: No Hay Disponibilidad**
- 5a. No hay fechas disponibles en el rango deseado
  - El sistema muestra mensaje "Sin disponibilidad"
  - El sistema ofrece "Unirse a lista de espera"
  - El padre acepta unirse a lista de espera
  - El sistema registra en lista de espera
  - El sistema notificará cuando haya disponibilidad
  - Fin del caso de uso

**FA-03: Horario Ocupado**
- 12a. El horario se ocupó mientras el padre completaba el formulario
  - El sistema muestra mensaje "Horario ya ocupado"
  - El sistema vuelve al paso 7 con horarios actualizados
  - El padre selecciona otro horario

**FA-04: Reprogramar Cita Existente**
- 2a. El niño ya tiene una cita programada
  - El sistema muestra la cita actual
  - El sistema ofrece "Reprogramar" o "Cancelar"
  - Si el padre elige "Reprogramar", continúa en paso 5
  - Si el padre elige "Cancelar", el sistema solicita confirmación y motivo

### Postcondiciones
- La solicitud de cita está registrada
- La clínica ha sido notificada
- El padre ha recibido confirmación
- Los recordatorios están programados

---

## CU-11: Ver Informes de Revisión

### Descripción
Un padre accede a los informes de las revisiones de su hijo.

### Actores
- Padre/Tutor

### Precondiciones
- El padre está autenticado
- Existen informes de revisión para el niño

### Flujo Principal

1. El padre accede al carnet de su hijo
2. El padre hace clic en "Informes"
3. El sistema muestra lista de informes ordenados por fecha (más reciente primero)
4. Cada informe muestra:
   - Fecha de la revisión
   - Tipo de revisión
   - Profesional
   - Miniatura de la primera página
   - Estado (nuevo/leído)
5. El padre selecciona un informe
6. El sistema muestra el informe completo en pantalla:
   - Datos del paciente
   - Hallazgos clínicos
   - Odontograma
   - Fotografías
   - Tratamientos realizados
   - Plan de tratamiento
   - Recomendaciones
7. El padre puede hacer scroll para ver todo el contenido
8. El padre puede hacer zoom en fotografías
9. El padre hace clic en "Descargar PDF"
10. El sistema descarga el informe en PDF
11. El sistema marca el informe como "leído"

### Flujos Alternativos

**FA-01: Compartir Informe**
- 9a. El padre hace clic en "Compartir"
  - El sistema muestra opciones de compartir
  - El padre selecciona método (Email, WhatsApp, etc.)
  - El sistema comparte el PDF

**FA-02: Ver Fotografías en Detalle**
- 8a. El padre hace clic en una fotografía
  - El sistema muestra la foto en pantalla completa
  - El padre puede hacer zoom y pan
  - El padre puede deslizar para ver otras fotos
  - El padre cierra la vista y vuelve al informe

**FA-03: Informe Nuevo**
- 3a. Hay un informe nuevo sin leer
  - El sistema muestra badge "Nuevo" en el informe
  - El sistema muestra notificación en el carnet
  - Al abrirlo, continúa en paso 6

**FA-04: Comparar Informes**
- 5a. El padre selecciona "Comparar"
  - El padre selecciona dos informes
  - El sistema muestra ambos informes lado a lado
  - El padre puede ver la evolución entre revisiones
  - Especialmente útil para fotografías

### Postcondiciones
- El padre ha visualizado el informe
- El informe está marcado como leído
- Si se descargó, el PDF está en el dispositivo

---

## CU-12: Gestionar Pagos

### Descripción
Un padre gestiona los pagos del plan de salud de su hijo.

### Actores
- Padre/Tutor

### Precondiciones
- El padre está autenticado
- El niño tiene un plan activo
- El módulo de pagos está habilitado

### Flujo Principal

1. El padre accede al menú principal
2. El padre hace clic en "Pagos"
3. El sistema muestra resumen de pagos:
   - Plan actual y precio
   - Estado del pago (al día, pendiente, vencido)
   - Próximo pago (fecha y monto)
   - Método de pago configurado
   - Historial de pagos
4. El padre hace clic en "Ver Detalle del Plan"
5. El sistema muestra:
   - Servicios incluidos
   - Precio anual
   - Forma de pago actual (anual, mensual, trimestral)
   - Fecha de renovación
6. El padre hace clic en "Realizar Pago"
7. El sistema muestra opciones de pago:
   - Tarjeta de crédito/débito
   - Transferencia bancaria
   - Domiciliación
8. El padre selecciona "Tarjeta de crédito"
9. El sistema muestra formulario seguro de pago
10. El padre introduce datos de la tarjeta
11. El padre hace clic en "Pagar"
12. El sistema procesa el pago a través de la pasarela
13. El sistema muestra confirmación de pago exitoso
14. El sistema envía recibo por email
15. El sistema actualiza el estado del plan a "Al día"
16. El sistema actualiza la fecha del próximo pago

### Flujos Alternativos

**FA-01: Configurar Domiciliación**
- 8a. El padre selecciona "Domiciliación"
  - El sistema muestra formulario de domiciliación
  - El padre introduce datos bancarios (IBAN)
  - El padre firma autorización SEPA
  - El sistema guarda la domiciliación
  - El sistema confirma que los próximos pagos serán automáticos
  - Fin del caso de uso

**FA-02: Cambiar Forma de Pago**
- 6a. El padre hace clic en "Cambiar Forma de Pago"
  - El sistema muestra opciones (anual, trimestral, mensual)
  - El padre selecciona nueva forma de pago
  - El sistema recalcula las cuotas
  - El sistema muestra nuevo calendario de pagos
  - El padre confirma el cambio
  - El sistema actualiza la configuración

**FA-03: Pago Rechazado**
- 12a. El pago es rechazado
  - El sistema muestra mensaje de error
  - El sistema indica el motivo (fondos insuficientes, tarjeta vencida, etc.)
  - El sistema ofrece reintentar
  - El padre puede cambiar método de pago
  - El sistema vuelve al paso 7

**FA-04: Ver Historial de Pagos**
- 3a. El padre hace clic en "Historial"
  - El sistema muestra lista de todos los pagos
  - Cada pago muestra: fecha, monto, método, estado
  - El padre puede descargar recibos individuales
  - El padre puede solicitar factura

**FA-05: Financiación de Ortodoncia**
- 3a. El niño tiene tratamiento de ortodoncia
  - El sistema muestra sección adicional "Ortodoncia"
  - Muestra plan de financiación (36 meses)
  - Muestra cuotas pagadas y pendientes
  - Calendario de próximos pagos
  - El padre puede ver detalle del tratamiento

### Postcondiciones
- El pago ha sido procesado (si aplica)
- El estado del plan está actualizado
- El padre ha recibido confirmación y recibo
- El próximo pago está programado

---

## CU-13: Acceder a Recursos Educativos

### Descripción
Un padre accede a contenido educativo sobre salud bucodental infantil.

### Actores
- Padre/Tutor

### Precondiciones
- El padre está autenticado
- Existen recursos educativos en el sistema

### Flujo Principal

1. El padre accede al menú principal
2. El padre hace clic en "Recursos Educativos"
3. El sistema muestra categorías de contenido:
   - Higiene oral
   - Alimentación saludable
   - Prevención de caries
   - Ortodoncia
   - Preguntas frecuentes
4. El padre selecciona "Higiene oral"
5. El sistema muestra recursos de esa categoría:
   - Vídeos
   - Infografías
   - Artículos
   - Juegos educativos
6. El padre selecciona un vídeo "Técnica de cepillado 3-6 años"
7. El sistema reproduce el vídeo
8. El padre puede:
   - Pausar/reproducir
   - Ajustar volumen
   - Ver en pantalla completa
   - Activar subtítulos
9. Al finalizar, el sistema sugiere contenido relacionado
10. El padre hace clic en "Guardar en Favoritos"
11. El sistema guarda el recurso en favoritos del padre
12. El padre puede compartir el recurso

### Flujos Alternativos

**FA-01: Ver Infografía**
- 6a. El padre selecciona una infografía
  - El sistema muestra la infografía en pantalla
  - El padre puede hacer zoom
  - El padre puede descargar la imagen
  - El padre puede compartirla

**FA-02: Leer Artículo**
- 6a. El padre selecciona un artículo
  - El sistema muestra el artículo formateado
  - El padre puede ajustar tamaño de fuente
  - El padre puede guardar para leer después
  - El padre puede compartir

**FA-03: Juego Educativo para Niños**
- 6a. El padre selecciona un juego educativo
  - El sistema muestra el juego interactivo
  - El niño puede jugar mientras aprende
  - El juego enseña conceptos de higiene
  - Al completar, muestra mensaje de felicitación

**FA-04: Buscar Contenido**
- 3a. El padre usa el buscador
  - El padre introduce términos de búsqueda
  - El sistema muestra resultados relevantes
  - El padre selecciona un resultado
  - Continúa según el tipo de contenido

**FA-05: Recomendaciones Personalizadas**
- 3a. El sistema muestra sección "Recomendado para ti"
  - Basado en la edad del niño
  - Basado en el nivel de riesgo
  - Basado en recomendaciones del profesional
  - El padre selecciona un recurso recomendado

### Postcondiciones
- El padre ha accedido al contenido educativo
- Si guardó favoritos, están disponibles para acceso rápido
- El sistema registra el contenido visto para mejorar recomendaciones

---

## 📊 Matriz de Casos de Uso por Actor

| Caso de Uso | Admin | Odont | Hig | Recep | Padre | Niño |
|-------------|-------|-------|-----|-------|-------|------|
| CU-01: Login Profesional | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| CU-02: Alta Paciente | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| CU-03: Realizar Revisión | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| CU-04: Generar Informe | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| CU-05: Gestionar Citas | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| CU-06: Actualizar Riesgo | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| CU-07: Ver Dashboard | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| CU-08: Login Familia | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| CU-09: Ver Carnet | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| CU-10: Solicitar Cita | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| CU-11: Ver Informes | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| CU-12: Gestionar Pagos | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| CU-13: Recursos Educativos | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |

---

## 📝 Notas de Implementación

### Priorización por Fases

**Fase MVP**
- CU-01: Login Profesional
- CU-02: Alta Paciente
- CU-03: Realizar Revisión
- CU-04: Generar Informe
- CU-06: Actualizar Riesgo (automático)
- CU-07: Ver Dashboard (básico)
- CU-08: Login Familia
- CU-09: Ver Carnet

**Fase 2**
- CU-05: Gestionar Citas (completo)
- CU-10: Solicitar Cita
- CU-11: Ver Informes
- CU-12: Gestionar Pagos

**Fase 3**
- CU-13: Recursos Educativos
- Mejoras en gamificación
- Comunicación bidireccional

### Consideraciones Técnicas

- Todos los casos de uso deben tener manejo de errores robusto
- Implementar validaciones en cliente y servidor
- Registrar todas las acciones críticas en logs de auditoría
- Optimizar para rendimiento (carga rápida, respuesta inmediata)
- Diseñar para offline-first cuando sea posible (especialmente en móvil)
- Implementar tests automatizados para cada caso de uso
