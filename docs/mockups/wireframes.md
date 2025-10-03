# Wireframes - OMI

## 📱 Área Clínica (Desktop - Tauri)

### 1. Login

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    [LOGO CLÍNICA]                          │
│                                                             │
│                  Sistema OMI                               │
│              Plan de Salud Infantil                        │
│                                                             │
│         ┌─────────────────────────────────┐               │
│         │  Email                          │               │
│         │  ┌───────────────────────────┐  │               │
│         │  │                           │  │               │
│         │  └───────────────────────────┘  │               │
│         │                                  │               │
│         │  Contraseña                      │               │
│         │  ┌───────────────────────────┐  │               │
│         │  │ ••••••••••••              │  │               │
│         │  └───────────────────────────┘  │               │
│         │                                  │               │
│         │  ☐ Recordar en este equipo      │               │
│         │                                  │               │
│         │  ┌─────────────────────────────┐│               │
│         │  │    INICIAR SESIÓN          ││               │
│         │  └─────────────────────────────┘│               │
│         │                                  │               │
│         │  ¿Olvidaste tu contraseña?      │               │
│         └─────────────────────────────────┘               │
│                                                             │
│                    v1.0.0                                  │
└─────────────────────────────────────────────────────────────┘
```

---

### 2. Dashboard Principal

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [LOGO] OMI                                    Dr. Juan Pérez  [👤] [⚙️] [🔔] │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ [🏠 Dashboard] [👥 Pacientes] [📅 Agenda] [📊 Estadísticas] [⚙️ Config]   │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Dashboard                                                                  │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐        │
│  │ 📊 Pacientes     │  │ 📅 Citas Hoy     │  │ ⚠️  Alertas      │        │
│  │                  │  │                  │  │                  │        │
│  │      150         │  │       12         │  │        3         │        │
│  │   Activos        │  │   Programadas    │  │   Riesgo Alto    │        │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘        │
│                                                                             │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐        │
│  │ 🟢 Riesgo Bajo   │  │ 🟡 Riesgo Medio  │  │ 🔴 Riesgo Alto   │        │
│  │      90 (60%)    │  │      45 (30%)    │  │      15 (10%)    │        │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘        │
│                                                                             │
│  Agenda de Hoy                                    [Ver todas las citas]    │
│  ──────────────────────────────────────────────────────────────────────    │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │ 09:00  Carlos Rodríguez (5 años)    Revisión Preventiva    [Ver]   │  │
│  │ 09:30  María García (8 años)        Seguimiento HIM        [Ver]   │  │
│  │ 10:00  Luis Martínez (6 años)       Aplicación Selladores  [Ver]   │  │
│  │ 10:30  Ana López (4 años)           Revisión Preventiva    [Ver]   │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  Revisiones Pendientes                           [Ver todas]               │
│  ──────────────────────────────────────────────────────────────────────    │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │ ⚠️  Pedro Sánchez - Revisión vencida hace 15 días        [Contactar]│  │
│  │ ⚠️  Laura Torres - Revisión vencida hace 8 días          [Contactar]│  │
│  │ 📅  Juan Ruiz - Revisión próxima en 3 días               [Ver]     │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 3. Lista de Pacientes

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [LOGO] OMI                                    Dr. Juan Pérez  [👤] [⚙️] [🔔] │
├─────────────────────────────────────────────────────────────────────────────┤
│ [🏠] [👥 Pacientes] [📅] [📊] [⚙️]                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Pacientes                                          [+ Nuevo Paciente]      │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ 🔍 Buscar paciente...                                                │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  Filtros:  [Todos ▼] [Riesgo ▼] [Plan ▼] [Edad ▼]                         │
│                                                                             │
│  ┌────────────────────────────────────────────────────────────────────────┐│
│  │ Foto  Nombre              Edad  Plan        Riesgo  Última Rev  Acción││
│  ├────────────────────────────────────────────────────────────────────────┤│
│  │ [👤] Carlos Rodríguez     5    PREVENTIVO   🟢      15/01/24   [Ver] ││
│  │ [👤] María García         8    HIM          🟡      10/01/24   [Ver] ││
│  │ [👤] Luis Martínez        6    CRECIMIENTO  🟢      08/01/24   [Ver] ││
│  │ [👤] Ana López            4    PREVENTIVO   🟢      20/12/23   [Ver] ││
│  │ [👤] Pedro Sánchez        7    HIM          🔴      15/11/23   [Ver] ││
│  │ [👤] Laura Torres         5    PREVENTIVO   🟡      05/01/24   [Ver] ││
│  │ [👤] Juan Ruiz            9    CRECIMIENTO  🟢      12/01/24   [Ver] ││
│  │ [👤] Carmen Díaz          6    HIM          🟢      18/01/24   [Ver] ││
│  └────────────────────────────────────────────────────────────────────────┘│
│                                                                             │
│  Mostrando 1-8 de 150 pacientes        [◀] Página 1 de 19 [▶]            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 4. Ficha de Paciente

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [LOGO] OMI                                    Dr. Juan Pérez  [👤] [⚙️] [🔔] │
├─────────────────────────────────────────────────────────────────────────────┤
│ [🏠] [👥] [📅] [📊] [⚙️]     ← Volver a Pacientes                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ [👤]  Carlos Rodríguez                           MRN: MRN001         │  │
│  │       5 años (15/05/2018)                                            │  │
│  │                                                                       │  │
│  │  Plan: PREVENTIVO  |  Riesgo: 🟢 BAJO  |  Estado: ✅ ACTIVO         │  │
│  │                                                                       │  │
│  │  [Nueva Revisión] [Ver Carnet] [Generar Informe] [Editar] [...]    │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  [Datos Generales] [Historial] [Plan de Salud] [Fotos] [Documentos]       │
│  ═══════════════                                                            │
│                                                                             │
│  Información Personal                                                       │
│  ──────────────────────────────────────────────────────────────────────    │
│  Nombre completo:    Carlos Rodríguez García                               │
│  Fecha de nacimiento: 15/05/2018 (5 años)                                 │
│  DNI/NIE:            12345678A                                             │
│  Género:             Masculino                                             │
│                                                                             │
│  Tutores Legales                                                           │
│  ──────────────────────────────────────────────────────────────────────    │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │ 👤 Ana Rodríguez (Madre) - Principal                                │  │
│  │    📧 ana@email.com  |  📱 +34 612 345 678                          │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  Historia Médica                                                            │
│  ──────────────────────────────────────────────────────────────────────    │
│  Alergias:           Ninguna                                               │
│  Medicación actual:  Ninguna                                               │
│  Condiciones médicas: Ninguna                                              │
│                                                                             │
│  Estadísticas                                                               │
│  ──────────────────────────────────────────────────────────────────────    │
│  Total de revisiones:     3                                                │
│  Última revisión:         15/01/2024                                       │
│  Próxima revisión:        15/07/2024                                       │
│  Índice de placa medio:   15.5%                                            │
│  Caries totales:          0                                                │
│  Logros obtenidos:        2 🏆                                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 5. Formulario de Revisión

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [LOGO] OMI                                    Dr. Juan Pérez  [👤] [⚙️] [🔔] │
├─────────────────────────────────────────────────────────────────────────────┤
│ Nueva Revisión - Carlos Rodríguez (5 años)                 [Guardar Borrador]│
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  [Datos Generales] [Exploración] [Higiene] [Tratamientos] [Plan]          │
│  ═══════════════                                                            │
│                                                                             │
│  Fecha de revisión:  [15/01/2024] [10:00]                                 │
│  Tipo de revisión:   [Preventiva ▼]                                        │
│  Motivo de consulta: ┌──────────────────────────────────────────────────┐ │
│                      │ Revisión semestral programada                     │ │
│                      └──────────────────────────────────────────────────┘ │
│                                                                             │
│  Exploración Clínica                                                        │
│  ──────────────────────────────────────────────────────────────────────    │
│                                                                             │
│  Odontograma                                                                │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │        18  17  16  15  14  13  12  11  21  22  23  24  25  26  27  28│  │
│  │        ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐│  │
│  │        └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘│  │
│  │                                                                         │  │
│  │        55  54  53  52  51  61  62  63  64  65                         │  │
│  │        ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐                        │  │
│  │        │✓│ │✓│ │✓│ │✓│ │✓│ │✓│ │✓│ │✓│ │✓│ │✓│                        │  │
│  │        └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘                        │  │
│  │        85  84  83  82  81  71  72  73  74  75                         │  │
│  │        ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐                        │  │
│  │        │✓│ │✓│ │✓│ │✓│ │✓│ │✓│ │✓│ │✓│ │✓│ │✓│                        │  │
│  │        └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘                        │  │
│  │                                                                         │  │
│  │        48  47  46  45  44  43  42  41  31  32  33  34  35  36  37  38│  │
│  │        ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐│  │
│  │        └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘│  │
│  │                                                                         │  │
│  │  Leyenda: ✓ Sano  C Caries  O Obturado  S Sellador  X Ausente         │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  Hallazgos:          ┌──────────────────────────────────────────────────┐ │
│                      │ Dentición temporal completa. Sin caries.          │ │
│                      │ Todas las piezas en buen estado.                  │ │
│                      └──────────────────────────────────────────────────┘ │
│                                                                             │
│  Tejidos blandos:    [Normal ▼]                                            │
│  Estado de encías:   [Sanas ▼]                                             │
│  Oclusión:           [Clase I ▼]                                           │
│                                                                             │
│                                                                             │
│  [Cancelar]                                    [Guardar y Continuar ▶]     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📱 Área Familias (Web/Mobile)

### 6. Login Familias

```
┌───────────────────────────────┐
│                               │
│      [LOGO CLÍNICA]          │
│                               │
│    Bienvenido a OMI          │
│                               │
│  ┌─────────────────────────┐ │
│  │  Email o Teléfono       │ │
│  │  ┌───────────────────┐  │ │
│  │  │                   │  │ │
│  │  └───────────────────┘  │ │
│  │                          │ │
│  │  Contraseña             │ │
│  │  ┌───────────────────┐  │ │
│  │  │ ••••••••••        │  │ │
│  │  └───────────────────┘  │ │
│  │                          │ │
│  │  ┌───────────────────┐  │ │
│  │  │  INICIAR SESIÓN   │  │ │
│  │  └───────────────────┘  │ │
│  │                          │ │
│  │  ───────  O  ───────    │ │
│  │                          │ │
│  │  ┌───────────────────┐  │ │
│  │  │  📱 Con Teléfono  │  │ │
│  │  └───────────────────┘  │ │
│  │                          │ │
│  │  ┌───────────────────┐  │ │
│  │  │  📷 Escanear QR   │  │ │
│  │  └───────────────────┘  │ │
│  │                          │ │
│  │  ¿Olvidaste contraseña? │ │
│  └─────────────────────────┘ │
│                               │
└───────────────────────────────┘
```

---

### 7. Home - Carnets de Hijos

```
┌───────────────────────────────┐
│ OMI           [🔔] [⚙️] [👤]  │
├───────────────────────────────┤
│                               │
│  Hola, Ana 👋                │
│                               │
│  Mis Hijos                    │
│  ─────────────────────────    │
│                               │
│  ┌─────────────────────────┐ │
│  │  [👤 Foto]              │ │
│  │                          │ │
│  │  Carlos Rodríguez       │ │
│  │  5 años                  │ │
│  │                          │ │
│  │  Plan: PREVENTIVO       │ │
│  │  Riesgo: 🟢 Bajo        │ │
│  │                          │ │
│  │  Próxima revisión:      │ │
│  │  15 de Julio 2024       │ │
│  │                          │ │
│  │  ⭐⭐ 2 logros           │ │
│  │                          │ │
│  │  [Ver Carnet Completo]  │ │
│  └─────────────────────────┘ │
│                               │
│  ┌─────────────────────────┐ │
│  │  [👤 Foto]              │ │
│  │                          │ │
│  │  María Rodríguez        │ │
│  │  8 años                  │ │
│  │                          │ │
│  │  Plan: HIM              │ │
│  │  Riesgo: 🟡 Moderado    │ │
│  │                          │ │
│  │  Próxima revisión:      │ │
│  │  20 de Junio 2024       │ │
│  │                          │ │
│  │  ⭐⭐⭐ 3 logros         │ │
│  │                          │ │
│  │  [Ver Carnet Completo]  │ │
│  └─────────────────────────┘ │
│                               │
├───────────────────────────────┤
│ [🏠] [📅] [📄] [🎓] [👤]      │
└───────────────────────────────┘
```

---

### 8. Carnet Digital

```
┌───────────────────────────────┐
│ ← Carnet Digital              │
├───────────────────────────────┤
│                               │
│  ┌─────────────────────────┐ │
│  │     [👤 Foto Grande]    │ │
│  │                          │ │
│  │   Carlos Rodríguez      │ │
│  │      5 años              │ │
│  │                          │ │
│  │  Plan: PREVENTIVO       │ │
│  │  Desde: 01/01/2024      │ │
│  └─────────────────────────┘ │
│                               │
│  Estado de Salud              │
│  ─────────────────────────    │
│  ┌─────────────────────────┐ │
│  │  🟢 Riesgo Bajo         │ │
│  │                          │ │
│  │  Tu hijo tiene un       │ │
│  │  excelente estado de    │ │
│  │  salud bucodental       │ │
│  └─────────────────────────┘ │
│                               │
│  Próxima Revisión             │
│  ─────────────────────────    │
│  📅 15 de Julio 2024         │
│  [Solicitar Cita]            │
│                               │
│  Sellos de Revisiones         │
│  ─────────────────────────    │
│  ┌───┐ ┌───┐ ┌───┐          │
│  │ ✓ │ │ ✓ │ │ ✓ │          │
│  └───┘ └───┘ └───┘          │
│  15/01  10/07  15/01         │
│  2024   2023   2023          │
│                               │
│  Logros Obtenidos 🏆          │
│  ─────────────────────────    │
│  ┌───┐ ┌───┐                 │
│  │⭐ │ │🥉 │                 │
│  └───┘ └───┘                 │
│  Higiene Bronce              │
│  Estrella Asistencia         │
│                               │
│  [Ver Historial Completo]    │
│  [Compartir Carnet]          │
│                               │
├───────────────────────────────┤
│ [🏠] [📅] [📄] [🎓] [👤]      │
└───────────────────────────────┘
```

---

### 9. Informes

```
┌───────────────────────────────┐
│ ← Informes de Revisión        │
├───────────────────────────────┤
│                               │
│  Carlos Rodríguez             │
│                               │
│  ┌─────────────────────────┐ │
│  │ 🆕 Nuevo                 │ │
│  │                          │ │
│  │ 📄 Revisión Preventiva  │ │
│  │ 15 de Enero 2024        │ │
│  │                          │ │
│  │ Dr. Juan Pérez          │ │
│  │                          │ │
│  │ [Ver Informe]           │ │
│  └─────────────────────────┘ │
│                               │
│  ┌─────────────────────────┐ │
│  │ 📄 Revisión Preventiva  │ │
│  │ 10 de Julio 2023        │ │
│  │                          │ │
│  │ Dr. Juan Pérez          │ │
│  │                          │ │
│  │ [Ver Informe]           │ │
│  └─────────────────────────┘ │
│                               │
│  ┌─────────────────────────┐ │
│  │ 📄 Primera Revisión     │ │
│  │ 15 de Enero 2023        │ │
│  │                          │ │
│  │ Dr. Juan Pérez          │ │
│  │                          │ │
│  │ [Ver Informe]           │ │
│  └─────────────────────────┘ │
│                               │
├───────────────────────────────┤
│ [🏠] [📅] [📄] [🎓] [👤]      │
└───────────────────────────────┘
```

---

### 10. Detalle de Informe

```
┌───────────────────────────────┐
│ ← Informe de Revisión         │
├───────────────────────────────┤
│                               │
│  [LOGO CLÍNICA]              │
│                               │
│  Informe de Revisión          │
│  15 de Enero 2024             │
│                               │
│  Paciente                     │
│  ─────────────────────────    │
│  Carlos Rodríguez             │
│  5 años (15/05/2018)          │
│  MRN: MRN001                  │
│                               │
│  Profesional                  │
│  ─────────────────────────    │
│  Dr. Juan Pérez               │
│  Odontólogo                   │
│                               │
│  Hallazgos                    │
│  ─────────────────────────    │
│  Dentición temporal completa. │
│  Sin caries. Todas las piezas │
│  en buen estado.              │
│                               │
│  Higiene Oral                 │
│  ─────────────────────────    │
│  Índice de placa: 15.5%       │
│  Estado: ✅ Excelente         │
│                               │
│  Tratamientos Realizados      │
│  ─────────────────────────    │
│  • Fluoración con barniz 5%   │
│  • Limpieza profesional       │
│                               │
│  Fotografías                  │
│  ─────────────────────────    │
│  [📷] [📷] [📷]              │
│                               │
│  Recomendaciones              │
│  ─────────────────────────    │
│  • Continuar con cepillado    │
│    2 veces al día             │
│  • Iniciar uso de hilo dental │
│  • Reducir consumo de azúcar  │
│                               │
│  Próxima Revisión             │
│  ─────────────────────────    │
│  📅 15 de Julio 2024          │
│                               │
│  [Descargar PDF]              │
│  [Compartir]                  │
│                               │
├───────────────────────────────┤
│ [🏠] [📅] [📄] [🎓] [👤]      │
└───────────────────────────────┘
```

---

### 11. Solicitar Cita

```
┌───────────────────────────────┐
│ ← Solicitar Cita              │
├───────────────────────────────┤
│                               │
│  Para: Carlos Rodríguez       │
│                               │
│  Tipo de Cita                 │
│  ─────────────────────────    │
│  ○ Revisión Programada        │
│  ○ Consulta Urgente           │
│  ○ Seguimiento                │
│                               │
│  Selecciona Fecha             │
│  ─────────────────────────    │
│  ┌─────────────────────────┐ │
│  │   Enero 2024            │ │
│  │                          │ │
│  │  L  M  X  J  V  S  D    │ │
│  │  1  2  3  4  5  6  7    │ │
│  │  8  9 10 11 12 13 14    │ │
│  │ 15 16 17 18 19 20 21    │ │
│  │ 22 23 24 25 26 27 28    │ │
│  │ 29 30 31                 │ │
│  └─────────────────────────┘ │
│                               │
│  Horarios Disponibles         │
│  ─────────────────────────    │
│  ┌───────┐ ┌───────┐         │
│  │ 09:00 │ │ 09:30 │         │
│  └───────┘ └───────┘         │
│  ┌───────┐ ┌───────┐         │
│  │ 10:00 │ │ 10:30 │         │
│  └───────┘ └───────┘         │
│                               │
│  Observaciones (opcional)     │
│  ┌─────────────────────────┐ │
│  │                          │ │
│  └─────────────────────────┘ │
│                               │
│  [Confirmar Cita]            │
│                               │
├───────────────────────────────┤
│ [🏠] [📅] [📄] [🎓] [👤]      │
└───────────────────────────────┘
```

---

### 12. Recursos Educativos

```
┌───────────────────────────────┐
│ Recursos Educativos           │
├───────────────────────────────┤
│                               │
│  🔍 Buscar recursos...        │
│                               │
│  Categorías                   │
│  ─────────────────────────    │
│  [🦷 Higiene] [🍎 Dieta]     │
│  [🛡️ Prevención] [😁 Ortodoncia]│
│                               │
│  Recomendado para ti          │
│  ─────────────────────────    │
│  ┌─────────────────────────┐ │
│  │ [▶️ Video]              │ │
│  │                          │ │
│  │ Cómo cepillar los        │ │
│  │ dientes (3-6 años)       │ │
│  │                          │ │
│  │ ⏱️ 2:30 min             │ │
│  └─────────────────────────┘ │
│                               │
│  ┌─────────────────────────┐ │
│  │ [📊 Infografía]         │ │
│  │                          │ │
│  │ Alimentos buenos para    │ │
│  │ los dientes              │ │
│  │                          │ │
│  │ 👁️ 245 vistas           │ │
│  └─────────────────────────┘ │
│                               │
│  ┌─────────────────────────┐ │
│  │ [🎮 Juego]              │ │
│  │                          │ │
│  │ Aprende a cepillarte     │ │
│  │ jugando                  │ │
│  │                          │ │
│  │ ⭐⭐⭐⭐⭐              │ │
│  └─────────────────────────┘ │
│                               │
│  [Ver Todos los Recursos]    │
│                               │
├───────────────────────────────┤
│ [🏠] [📅] [📄] [🎓] [👤]      │
└───────────────────────────────┘
```

---

## 🎨 Guía de Estilo

### Colores Principales
- **Primario**: #4F46E5 (Índigo)
- **Secundario**: #06B6D4 (Cyan)
- **Éxito**: #10B981 (Verde)
- **Advertencia**: #F59E0B (Amarillo)
- **Error**: #EF4444 (Rojo)
- **Fondo**: #F9FAFB (Gris claro)
- **Texto**: #1F2937 (Gris oscuro)

### Tipografía
- **Familia**: Inter, system-ui, sans-serif
- **Títulos**: 24-32px, Bold
- **Subtítulos**: 18-20px, Semibold
- **Cuerpo**: 14-16px, Regular
- **Pequeño**: 12-14px, Regular

### Espaciado
- **Pequeño**: 8px
- **Medio**: 16px
- **Grande**: 24px
- **Extra Grande**: 32px

### Bordes
- **Radio**: 8px (botones, cards)
- **Radio pequeño**: 4px (inputs)
- **Radio grande**: 16px (modales)

### Sombras
- **Card**: 0 1px 3px rgba(0,0,0,0.1)
- **Hover**: 0 4px 6px rgba(0,0,0,0.1)
- **Modal**: 0 20px 25px rgba(0,0,0,0.15)

### Iconos
- **Biblioteca**: Lucide Icons
- **Tamaño**: 20-24px (UI), 32-48px (destacados)

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Adaptaciones Mobile
- Navegación inferior en lugar de sidebar
- Cards en columna única
- Formularios simplificados
- Botones de acción flotantes
- Gestos táctiles (swipe, pull-to-refresh)

---

## ♿ Accesibilidad

- Contraste mínimo 4.5:1 (texto normal)
- Contraste mínimo 3:1 (texto grande)
- Navegación por teclado
- Labels en todos los inputs
- Mensajes de error descriptivos
- Soporte para lectores de pantalla
- Tamaños de toque mínimo 44x44px
