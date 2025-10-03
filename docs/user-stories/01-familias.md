# Historias de Usuario - Área Familias

## 🎯 Épica 1: Acceso y Autenticación

### US-F-001: Login con Email
**Como** padre/tutor  
**Quiero** iniciar sesión con mi email y contraseña  
**Para** acceder a la información de salud bucodental de mis hijos

**Criterios de Aceptación:**
- [ ] Puedo introducir mi email y contraseña
- [ ] El sistema valida las credenciales
- [ ] Si son correctas, accedo al dashboard con los carnets de mis hijos
- [ ] Si son incorrectas, veo un mensaje de error claro
- [ ] Puedo marcar "Recordar en este dispositivo" para no tener que iniciar sesión cada vez
- [ ] Después de 5 intentos fallidos, mi cuenta se bloquea temporalmente

**Prioridad:** Alta  
**Estimación:** 3 puntos  
**Sprint:** 1

---

### US-F-002: Login con Teléfono y OTP
**Como** padre/tutor  
**Quiero** iniciar sesión con mi número de teléfono y un código OTP  
**Para** acceder de forma rápida sin recordar contraseñas

**Criterios de Aceptación:**
- [ ] Puedo introducir mi número de teléfono
- [ ] Recibo un código de 6 dígitos por SMS
- [ ] El código es válido durante 5 minutos
- [ ] Puedo solicitar reenvío del código después de 1 minuto
- [ ] Al introducir el código correcto, accedo al sistema
- [ ] Si el código es incorrecto, veo un mensaje de error

**Prioridad:** Media  
**Estimación:** 5 puntos  
**Sprint:** 2

---

### US-F-003: Login con Código QR
**Como** padre/tutor nuevo  
**Quiero** escanear el código QR que me dio la clínica  
**Para** acceder por primera vez sin necesidad de registro manual

**Criterios de Aceptación:**
- [ ] Puedo activar la cámara desde la app
- [ ] Puedo escanear el código QR proporcionado por la clínica
- [ ] Si es mi primer acceso, se me solicita crear una contraseña
- [ ] Después de crear la contraseña, accedo al sistema
- [ ] El código QR solo puede usarse una vez
- [ ] Si el código QR es inválido o expiró, veo un mensaje de error

**Prioridad:** Alta  
**Estimación:** 5 puntos  
**Sprint:** 1

---

### US-F-004: Recuperar Contraseña
**Como** padre/tutor  
**Quiero** recuperar mi contraseña si la he olvidado  
**Para** poder volver a acceder a mi cuenta

**Criterios de Aceptación:**
- [ ] Puedo hacer clic en "¿Olvidaste tu contraseña?"
- [ ] Introduzco mi email
- [ ] Recibo un email con un enlace de recuperación
- [ ] El enlace es válido durante 1 hora
- [ ] Puedo establecer una nueva contraseña
- [ ] La nueva contraseña debe cumplir los requisitos de seguridad
- [ ] Recibo confirmación de que la contraseña se cambió exitosamente

**Prioridad:** Alta  
**Estimación:** 3 puntos  
**Sprint:** 1

---

## 🎯 Épica 2: Visualización del Carnet Digital

### US-F-005: Ver Carnets de Mis Hijos
**Como** padre/tutor  
**Quiero** ver los carnets digitales de todos mis hijos en la pantalla principal  
**Para** tener una visión rápida del estado de salud de cada uno

**Criterios de Aceptación:**
- [ ] Al iniciar sesión, veo una lista/carrusel con los carnets de todos mis hijos
- [ ] Cada carnet muestra: foto, nombre, edad, tipo de plan, nivel de riesgo
- [ ] Veo la fecha de la próxima revisión
- [ ] Veo el número de logros obtenidos
- [ ] Puedo hacer clic en un carnet para ver los detalles completos
- [ ] Si tengo un solo hijo, veo directamente su carnet completo

**Prioridad:** Alta  
**Estimación:** 5 puntos  
**Sprint:** 1

---

### US-F-006: Ver Carnet Digital Completo
**Como** padre/tutor  
**Quiero** ver el carnet digital completo de mi hijo  
**Para** conocer en detalle su estado de salud bucodental

**Criterios de Aceptación:**
- [ ] Veo la foto y datos básicos de mi hijo
- [ ] Veo el tipo de plan contratado y fecha de inicio
- [ ] Veo el nivel de riesgo actual con código de color (verde/amarillo/rojo)
- [ ] Veo una explicación de qué significa el nivel de riesgo
- [ ] Veo la fecha de la próxima revisión
- [ ] Veo todos los sellos de revisiones completadas con fechas
- [ ] Veo todos los logros obtenidos con iconos y descripciones
- [ ] Puedo hacer scroll para ver el historial completo

**Prioridad:** Alta  
**Estimación:** 8 puntos  
**Sprint:** 1

---

### US-F-007: Ver Detalle de Sello de Revisión
**Como** padre/tutor  
**Quiero** hacer clic en un sello de revisión  
**Para** ver qué se hizo en esa visita

**Criterios de Aceptación:**
- [ ] Puedo hacer clic en cualquier sello del carnet
- [ ] Veo la fecha y tipo de revisión
- [ ] Veo el nombre del profesional que atendió
- [ ] Veo los tratamientos aplicados (fluoración, selladores, etc.)
- [ ] Veo un comentario breve del profesional
- [ ] Puedo acceder al informe completo desde ahí
- [ ] Puedo cerrar el detalle y volver al carnet

**Prioridad:** Media  
**Estimación:** 3 puntos  
**Sprint:** 2

---

### US-F-008: Ver Logros Obtenidos
**Como** padre/tutor  
**Quiero** ver los logros que ha obtenido mi hijo  
**Para** motivarlo y celebrar sus avances

**Criterios de Aceptación:**
- [ ] Veo todos los logros obtenidos con iconos atractivos
- [ ] Cada logro muestra: nombre, descripción, fecha de obtención
- [ ] Veo los criterios que se cumplieron para obtener el logro
- [ ] Puedo compartir un logro en redes sociales o WhatsApp
- [ ] Veo un mensaje de felicitación cuando se obtiene un nuevo logro
- [ ] Los logros están organizados por categorías (asistencia, higiene, especiales)

**Prioridad:** Media  
**Estimación:** 5 puntos  
**Sprint:** 3

---

### US-F-009: Compartir Carnet Digital
**Como** padre/tutor  
**Quiero** compartir el carnet digital de mi hijo  
**Para** mostrárselo a familiares o guardarlo como recuerdo

**Criterios de Aceptación:**
- [ ] Puedo hacer clic en "Compartir Carnet"
- [ ] El sistema genera una imagen del carnet
- [ ] Puedo compartir por WhatsApp, email, redes sociales
- [ ] Puedo descargar la imagen del carnet
- [ ] La imagen compartida no contiene información médica sensible
- [ ] La imagen tiene buena calidad y es atractiva visualmente

**Prioridad:** Baja  
**Estimación:** 3 puntos  
**Sprint:** 3

---

## 🎯 Épica 3: Informes de Revisión

### US-F-010: Ver Lista de Informes
**Como** padre/tutor  
**Quiero** ver todos los informes de revisión de mi hijo  
**Para** tener acceso a su historial médico

**Criterios de Aceptación:**
- [ ] Veo una lista de todos los informes ordenados por fecha (más reciente primero)
- [ ] Cada informe muestra: fecha, tipo de revisión, profesional
- [ ] Los informes nuevos tienen un badge "Nuevo"
- [ ] Puedo filtrar por fecha o tipo de revisión
- [ ] Puedo buscar informes por palabra clave
- [ ] Puedo hacer clic en un informe para verlo completo

**Prioridad:** Alta  
**Estimación:** 5 puntos  
**Sprint:** 2

---

### US-F-011: Ver Informe Completo
**Como** padre/tutor  
**Quiero** ver el informe completo de una revisión  
**Para** conocer en detalle qué encontró el dentista

**Criterios de Aceptación:**
- [ ] Veo el informe formateado de forma clara y legible
- [ ] Veo los datos del paciente y del profesional
- [ ] Veo los hallazgos clínicos
- [ ] Veo el odontograma visual
- [ ] Veo las fotografías clínicas (si las hay)
- [ ] Veo los tratamientos realizados
- [ ] Veo el plan de tratamiento propuesto
- [ ] Veo las recomendaciones personalizadas
- [ ] Veo la fecha de la próxima revisión
- [ ] Puedo hacer zoom en las fotografías

**Prioridad:** Alta  
**Estimación:** 8 puntos  
**Sprint:** 2

---

### US-F-012: Descargar Informe en PDF
**Como** padre/tutor  
**Quiero** descargar el informe en formato PDF  
**Para** guardarlo, imprimirlo o enviarlo a otro profesional

**Criterios de Aceptación:**
- [ ] Puedo hacer clic en "Descargar PDF"
- [ ] El PDF se descarga automáticamente
- [ ] El PDF contiene toda la información del informe
- [ ] El PDF tiene el logo y datos de la clínica
- [ ] El PDF está bien formateado y es profesional
- [ ] El PDF incluye las fotografías clínicas
- [ ] El nombre del archivo es descriptivo (ej: "Informe_Carlos_Rodriguez_2024-01-15.pdf")

**Prioridad:** Alta  
**Estimación:** 3 puntos  
**Sprint:** 2

---

### US-F-013: Compartir Informe
**Como** padre/tutor  
**Quiero** compartir el informe con otra persona  
**Para** enviárselo a mi pareja, otro familiar o profesional

**Criterios de Aceptación:**
- [ ] Puedo hacer clic en "Compartir"
- [ ] Puedo elegir el método: email, WhatsApp, etc.
- [ ] Se comparte el PDF del informe
- [ ] Puedo añadir un mensaje personalizado
- [ ] Recibo confirmación de que se compartió correctamente

**Prioridad:** Media  
**Estimación:** 3 puntos  
**Sprint:** 2

---

### US-F-014: Recibir Notificación de Nuevo Informe
**Como** padre/tutor  
**Quiero** recibir una notificación cuando haya un nuevo informe disponible  
**Para** estar al tanto inmediatamente después de la revisión

**Criterios de Aceptación:**
- [ ] Recibo notificación push cuando hay un nuevo informe
- [ ] Recibo email con el informe adjunto
- [ ] La notificación me lleva directamente al informe
- [ ] El informe aparece marcado como "Nuevo" en la lista
- [ ] Puedo configurar si quiero recibir estas notificaciones

**Prioridad:** Alta  
**Estimación:** 5 puntos  
**Sprint:** 2

---

## 🎯 Épica 4: Gestión de Citas

### US-F-015: Solicitar Cita
**Como** padre/tutor  
**Quiero** solicitar una cita para mi hijo desde la app  
**Para** no tener que llamar por teléfono

**Criterios de Aceptación:**
- [ ] Puedo acceder a "Solicitar Cita" desde el carnet o menú
- [ ] Selecciono para qué hijo es la cita (si tengo varios)
- [ ] Selecciono el tipo de cita (revisión, urgencia, seguimiento)
- [ ] Veo un calendario con fechas disponibles
- [ ] Veo horarios disponibles para la fecha seleccionada
- [ ] Puedo añadir observaciones opcionales
- [ ] Recibo confirmación de la solicitud
- [ ] Recibo notificación cuando la clínica confirme la cita

**Prioridad:** Alta  
**Estimación:** 8 puntos  
**Sprint:** 2

---

### US-F-016: Ver Mis Citas Programadas
**Como** padre/tutor  
**Quiero** ver todas las citas programadas de mis hijos  
**Para** tener control de las próximas visitas

**Criterios de Aceptación:**
- [ ] Veo una lista de todas las citas futuras
- [ ] Cada cita muestra: hijo, fecha, hora, tipo, profesional
- [ ] Las citas están ordenadas por fecha (próxima primero)
- [ ] Puedo ver citas en vista lista o calendario
- [ ] Puedo añadir la cita a mi calendario personal
- [ ] Veo el estado de la cita (pendiente confirmación, confirmada)

**Prioridad:** Alta  
**Estimación:** 5 puntos  
**Sprint:** 2

---

### US-F-017: Cancelar o Reprogramar Cita
**Como** padre/tutor  
**Quiero** cancelar o reprogramar una cita  
**Para** gestionar cambios en mi agenda sin llamar a la clínica

**Criterios de Aceptación:**
- [ ] Puedo hacer clic en una cita programada
- [ ] Veo opciones "Cancelar" y "Reprogramar"
- [ ] Si cancelo, debo indicar el motivo
- [ ] Si reprogramo, veo nuevas fechas disponibles
- [ ] Solo puedo cancelar/reprogramar con al menos 24h de antelación
- [ ] Recibo confirmación del cambio
- [ ] La clínica recibe notificación del cambio

**Prioridad:** Media  
**Estimación:** 5 puntos  
**Sprint:** 2

---

### US-F-018: Recibir Recordatorios de Cita
**Como** padre/tutor  
**Quiero** recibir recordatorios de las citas programadas  
**Para** no olvidarme de llevar a mi hijo

**Criterios de Aceptación:**
- [ ] Recibo notificación 7 días antes de la cita
- [ ] Recibo notificación 1 día antes de la cita
- [ ] Recibo notificación 2 horas antes de la cita
- [ ] Puedo confirmar asistencia desde la notificación
- [ ] Puedo configurar qué recordatorios quiero recibir
- [ ] Puedo elegir el canal (push, email, SMS)

**Prioridad:** Alta  
**Estimación:** 5 puntos  
**Sprint:** 2

---

### US-F-019: Solicitar Cita Urgente
**Como** padre/tutor  
**Quiero** solicitar una cita urgente  
**Para** que atiendan a mi hijo lo antes posible en caso de emergencia

**Criterios de Aceptación:**
- [ ] Puedo seleccionar "Consulta Urgente" al solicitar cita
- [ ] Debo describir el motivo de urgencia
- [ ] La solicitud se marca como prioritaria
- [ ] La clínica recibe notificación inmediata
- [ ] Recibo respuesta de la clínica en menos de 2 horas
- [ ] Veo un mensaje indicando que la clínica me contactará pronto

**Prioridad:** Alta  
**Estimación:** 5 puntos  
**Sprint:** 2

---

## 🎯 Épica 5: Recursos Educativos

### US-F-020: Explorar Recursos Educativos
**Como** padre/tutor  
**Quiero** acceder a contenido educativo sobre salud bucodental  
**Para** aprender a cuidar mejor los dientes de mi hijo

**Criterios de Aceptación:**
- [ ] Puedo acceder a la sección de recursos educativos
- [ ] Veo recursos organizados por categorías (higiene, dieta, prevención, ortodoncia)
- [ ] Veo recursos recomendados según la edad de mi hijo
- [ ] Puedo buscar recursos por palabra clave
- [ ] Cada recurso muestra: título, descripción, tipo (vídeo/artículo/infografía)
- [ ] Puedo filtrar por tipo de recurso

**Prioridad:** Media  
**Estimación:** 5 puntos  
**Sprint:** 3

---

### US-F-021: Ver Vídeos Educativos
**Como** padre/tutor  
**Quiero** ver vídeos educativos  
**Para** aprender técnicas de cepillado y cuidado dental

**Criterios de Aceptación:**
- [ ] Puedo hacer clic en un vídeo para reproducirlo
- [ ] El vídeo se reproduce en la app
- [ ] Puedo pausar, adelantar, retroceder
- [ ] Puedo ajustar el volumen
- [ ] Puedo ver en pantalla completa
- [ ] Puedo activar subtítulos si están disponibles
- [ ] Al finalizar, veo vídeos relacionados

**Prioridad:** Media  
**Estimación:** 5 puntos  
**Sprint:** 3

---

### US-F-022: Guardar Recursos Favoritos
**Como** padre/tutor  
**Quiero** guardar recursos como favoritos  
**Para** acceder rápidamente a los que más me interesan

**Criterios de Aceptación:**
- [ ] Puedo marcar un recurso como favorito
- [ ] Puedo ver todos mis favoritos en una sección dedicada
- [ ] Puedo quitar recursos de favoritos
- [ ] Los favoritos se sincronizan entre dispositivos
- [ ] Recibo sugerencias basadas en mis favoritos

**Prioridad:** Baja  
**Estimación:** 3 puntos  
**Sprint:** 3

---

### US-F-023: Compartir Recursos
**Como** padre/tutor  
**Quiero** compartir recursos educativos  
**Para** ayudar a otros padres o familiares

**Criterios de Aceptación:**
- [ ] Puedo hacer clic en "Compartir" en cualquier recurso
- [ ] Puedo compartir por WhatsApp, email, redes sociales
- [ ] Se comparte el enlace al recurso
- [ ] Puedo añadir un mensaje personalizado
- [ ] El recurso compartido se puede ver sin necesidad de login

**Prioridad:** Baja  
**Estimación:** 3 puntos  
**Sprint:** 3

---

## 🎯 Épica 6: Pagos y Facturación

### US-F-024: Ver Estado del Plan
**Como** padre/tutor  
**Quiero** ver el estado de pago del plan de mi hijo  
**Para** saber si estoy al día con los pagos

**Criterios de Aceptación:**
- [ ] Puedo acceder a la sección de pagos
- [ ] Veo el tipo de plan contratado y precio
- [ ] Veo el estado: al día, pendiente, vencido
- [ ] Veo la fecha del próximo pago
- [ ] Veo el método de pago configurado
- [ ] Veo el historial de pagos realizados

**Prioridad:** Media  
**Estimación:** 5 puntos  
**Sprint:** 2

---

### US-F-025: Realizar Pago
**Como** padre/tutor  
**Quiero** realizar el pago del plan desde la app  
**Para** mantener activo el plan de mi hijo

**Criterios de Aceptación:**
- [ ] Puedo hacer clic en "Realizar Pago"
- [ ] Veo el monto a pagar
- [ ] Puedo elegir método de pago (tarjeta, transferencia)
- [ ] Puedo introducir datos de tarjeta de forma segura
- [ ] Recibo confirmación del pago exitoso
- [ ] Recibo recibo por email
- [ ] El estado del plan se actualiza a "Al día"

**Prioridad:** Media  
**Estimación:** 8 puntos  
**Sprint:** 2

---

### US-F-026: Configurar Domiciliación Bancaria
**Como** padre/tutor  
**Quiero** configurar domiciliación bancaria  
**Para** que los pagos se realicen automáticamente

**Criterios de Aceptación:**
- [ ] Puedo acceder a "Configurar Domiciliación"
- [ ] Introduzco mi IBAN
- [ ] Firmo la autorización SEPA digitalmente
- [ ] Recibo confirmación de que la domiciliación está activa
- [ ] Los próximos pagos se cargarán automáticamente
- [ ] Recibo notificación antes de cada cargo
- [ ] Puedo cancelar la domiciliación en cualquier momento

**Prioridad:** Media  
**Estimación:** 8 puntos  
**Sprint:** 2

---

### US-F-027: Descargar Facturas
**Como** padre/tutor  
**Quiero** descargar las facturas de los pagos  
**Para** tener comprobantes para mi contabilidad

**Criterios de Aceptación:**
- [ ] Veo una lista de todas las facturas
- [ ] Cada factura muestra: número, fecha, monto, estado
- [ ] Puedo descargar cualquier factura en PDF
- [ ] El PDF contiene todos los datos fiscales
- [ ] Puedo solicitar factura rectificativa si hay error
- [ ] Recibo las facturas automáticamente por email

**Prioridad:** Media  
**Estimación:** 5 puntos  
**Sprint:** 2

---

## 🎯 Épica 7: Perfil y Configuración

### US-F-028: Ver y Editar Mi Perfil
**Como** padre/tutor  
**Quiero** ver y editar mi información personal  
**Para** mantener mis datos actualizados

**Criterios de Aceptación:**
- [ ] Puedo acceder a mi perfil
- [ ] Veo mis datos: nombre, email, teléfono
- [ ] Puedo editar mi nombre y teléfono
- [ ] Puedo cambiar mi contraseña
- [ ] Puedo cambiar mi foto de perfil
- [ ] Los cambios se guardan correctamente
- [ ] Recibo confirmación de los cambios

**Prioridad:** Media  
**Estimación:** 5 puntos  
**Sprint:** 1

---

### US-F-029: Configurar Notificaciones
**Como** padre/tutor  
**Quiero** configurar qué notificaciones recibo  
**Para** recibir solo la información que me interesa

**Criterios de Aceptación:**
- [ ] Puedo acceder a configuración de notificaciones
- [ ] Puedo activar/desactivar notificaciones por tipo
- [ ] Puedo elegir el canal (push, email, SMS)
- [ ] Puedo configurar horario de "No molestar"
- [ ] Puedo configurar frecuencia de notificaciones educativas
- [ ] Los cambios se aplican inmediatamente

**Prioridad:** Media  
**Estimación:** 5 puntos  
**Sprint:** 2

---

### US-F-030: Cerrar Sesión
**Como** padre/tutor  
**Quiero** cerrar sesión de forma segura  
**Para** proteger la información de mis hijos

**Criterios de Aceptación:**
- [ ] Puedo hacer clic en "Cerrar Sesión"
- [ ] Se me solicita confirmación
- [ ] La sesión se cierra correctamente
- [ ] Vuelvo a la pantalla de login
- [ ] No puedo acceder sin volver a autenticarme
- [ ] Si tenía "Recordar dispositivo", se mantiene para próximo login

**Prioridad:** Alta  
**Estimación:** 2 puntos  
**Sprint:** 1

---

## 📊 Resumen de Prioridades

### Sprint 1 (MVP)
- US-F-001: Login con Email
- US-F-003: Login con Código QR
- US-F-004: Recuperar Contraseña
- US-F-005: Ver Carnets de Mis Hijos
- US-F-006: Ver Carnet Digital Completo
- US-F-028: Ver y Editar Mi Perfil
- US-F-030: Cerrar Sesión

### Sprint 2
- US-F-002: Login con Teléfono y OTP
- US-F-007: Ver Detalle de Sello
- US-F-010 a US-F-014: Informes
- US-F-015 a US-F-019: Citas
- US-F-024 a US-F-027: Pagos
- US-F-029: Configurar Notificaciones

### Sprint 3
- US-F-008: Ver Logros
- US-F-009: Compartir Carnet
- US-F-020 a US-F-023: Recursos Educativos
