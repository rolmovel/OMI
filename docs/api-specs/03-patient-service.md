# Patient Service API - Especificación

## 📋 Endpoints de Pacientes

### GET /api/patients

Listar pacientes con filtros y paginación.

**Headers**:
```
Authorization: Bearer <access_token>
X-Clinic-ID: 1
```

**Query Parameters**:
- `search`: Búsqueda por nombre, apellido o número de historia
- `riskLevel`: Filtrar por nivel de riesgo (GREEN, YELLOW, RED)
- `planType`: Filtrar por tipo de plan (PREVENTIVO, HIM, CRECIMIENTO)
- `isActive`: Filtrar por estado (true/false)
- `ageFrom`, `ageTo`: Filtrar por rango de edad
- `page`, `size`, `sort`

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "content": [
      {
        "id": 1,
        "medicalRecordNumber": "MRN001",
        "firstName": "Carlos",
        "lastName": "Rodríguez",
        "dateOfBirth": "2018-05-15",
        "age": 5,
        "gender": "M",
        "photoUrl": "https://cdn.omi.com/photos/patient1.jpg",
        "currentRiskLevel": "GREEN",
        "currentPlan": {
          "id": 1,
          "planType": "PREVENTIVO",
          "status": "ACTIVE",
          "startDate": "2024-01-01",
          "nextReviewDate": "2024-07-01"
        },
        "guardians": [
          {
            "id": 1,
            "firstName": "Ana",
            "lastName": "Rodríguez",
            "relationship": "MADRE",
            "email": "ana@email.com",
            "phone": "+34612345678",
            "isPrimary": true
          }
        ],
        "lastReviewDate": "2024-01-15",
        "totalReviews": 3,
        "achievementsCount": 2
      }
    ],
    "page": 0,
    "size": 20,
    "totalElements": 150,
    "totalPages": 8
  }
}
```

---

### GET /api/patients/{id}

Obtener detalles completos de un paciente.

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": 1,
    "clinicId": 1,
    "medicalRecordNumber": "MRN001",
    "firstName": "Carlos",
    "lastName": "Rodríguez",
    "dateOfBirth": "2018-05-15",
    "age": 5,
    "gender": "M",
    "photoUrl": "https://cdn.omi.com/photos/patient1.jpg",
    "dniNie": "12345678A",
    "currentRiskLevel": "GREEN",
    "isActive": true,
    "guardians": [
      {
        "id": 1,
        "firstName": "Ana",
        "lastName": "Rodríguez",
        "relationship": "MADRE",
        "email": "ana@email.com",
        "phone": "+34612345678",
        "isPrimary": true
      }
    ],
    "currentPlan": {
      "id": 1,
      "planType": "PREVENTIVO",
      "status": "ACTIVE",
      "startDate": "2024-01-01",
      "endDate": "2024-12-31",
      "annualPrice": 120.00,
      "paymentFrequency": "ANNUAL",
      "nextReviewDate": "2024-07-01"
    },
    "medicalHistory": {
      "allergies": "Ninguna",
      "currentMedications": "Ninguna",
      "medicalConditions": "Ninguna",
      "previousDentalTrauma": "No",
      "orthodonticHistory": "No",
      "notes": ""
    },
    "statistics": {
      "totalReviews": 3,
      "lastReviewDate": "2024-01-15",
      "achievementsCount": 2,
      "averagePlaqueIndex": 15.5,
      "cariesCount": 0
    },
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

---

### POST /api/patients

Crear nuevo paciente.

**Request**:
```json
{
  "firstName": "Carlos",
  "lastName": "Rodríguez",
  "dateOfBirth": "2018-05-15",
  "gender": "M",
  "dniNie": "12345678A",
  "photoUrl": "https://cdn.omi.com/photos/patient1.jpg",
  "guardians": [
    {
      "firstName": "Ana",
      "lastName": "Rodríguez",
      "relationship": "MADRE",
      "email": "ana@email.com",
      "phone": "+34612345678",
      "isPrimary": true
    }
  ],
  "healthPlan": {
    "planType": "PREVENTIVO",
    "startDate": "2024-01-01",
    "annualPrice": 120.00,
    "paymentFrequency": "ANNUAL"
  },
  "medicalHistory": {
    "allergies": "Ninguna",
    "currentMedications": "Ninguna"
  },
  "consentGiven": true
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "data": {
    "id": 1,
    "medicalRecordNumber": "MRN001",
    "firstName": "Carlos",
    "lastName": "Rodríguez",
    "qrCode": "QR_ABC123XYZ789",
    "qrCodeImage": "data:image/png;base64,iVBORw0KGgo...",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

---

### PUT /api/patients/{id}

Actualizar datos del paciente.

**Request**:
```json
{
  "firstName": "Carlos",
  "lastName": "Rodríguez García",
  "photoUrl": "https://cdn.omi.com/photos/patient1_new.jpg",
  "medicalHistory": {
    "allergies": "Penicilina",
    "notes": "Actualizado tras consulta"
  }
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": 1,
    "firstName": "Carlos",
    "lastName": "Rodríguez García",
    "updatedAt": "2024-01-15T11:00:00Z"
  }
}
```

---

### DELETE /api/patients/{id}

Desactivar paciente (soft delete).

**Response** (204 No Content)

---

## 📋 Endpoints de Revisiones

### GET /api/patients/{patientId}/reviews

Obtener historial de revisiones del paciente.

**Query Parameters**:
- `reviewType`: Filtrar por tipo
- `from`, `to`: Rango de fechas
- `page`, `size`, `sort`

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "content": [
      {
        "id": 1,
        "patientId": 1,
        "professional": {
          "id": 10,
          "firstName": "Dr. Juan",
          "lastName": "Pérez",
          "role": "ODONTOLOGO"
        },
        "reviewDate": "2024-01-15T10:00:00Z",
        "reviewType": "PREVENTIVA",
        "chiefComplaint": null,
        "findings": "Dentición temporal completa. Sin caries.",
        "plaqueIndex": 15.5,
        "riskLevel": "GREEN",
        "treatmentsApplied": [
          {
            "type": "FLUORACION",
            "productUsed": "Flúor barniz 5%",
            "notes": "Aplicado en todas las piezas"
          }
        ],
        "nextReviewDate": "2024-07-15",
        "hasPhotos": true,
        "hasReport": true,
        "createdAt": "2024-01-15T10:30:00Z"
      }
    ],
    "page": 0,
    "size": 20,
    "totalElements": 3
  }
}
```

---

### GET /api/patients/{patientId}/reviews/{reviewId}

Obtener detalles completos de una revisión.

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": 1,
    "patientId": 1,
    "professional": {
      "id": 10,
      "firstName": "Dr. Juan",
      "lastName": "Pérez"
    },
    "reviewDate": "2024-01-15T10:00:00Z",
    "reviewType": "PREVENTIVA",
    "chiefComplaint": null,
    "findings": "Dentición temporal completa. Sin caries.",
    "softTissueFindings": "Mucosa oral normal",
    "gumStatus": "Encías sanas, sin inflamación",
    "occlusion": "Clase I molar temporal",
    "plaqueIndex": 15.5,
    "brushingTechnique": "Técnica horizontal, necesita mejorar",
    "flossUsage": "NO_USA",
    "hygieneObservations": "Padres cepillan 2 veces al día",
    "odontogram": [
      {
        "toothNumber": 51,
        "status": "SANO",
        "surfaces": {
          "oclusal": "SANO",
          "mesial": "SANO",
          "distal": "SANO",
          "vestibular": "SANO",
          "palatino": "SANO"
        }
      }
    ],
    "treatmentsApplied": [
      {
        "id": 1,
        "type": "FLUORACION",
        "productUsed": "Flúor barniz 5%",
        "concentration": "22,600 ppm",
        "notes": "Aplicado en todas las piezas"
      }
    ],
    "treatmentPlan": "Continuar con revisiones semestrales",
    "recommendations": "Mejorar técnica de cepillado. Iniciar uso de hilo dental.",
    "nextReviewDate": "2024-07-15",
    "photos": [
      {
        "id": 1,
        "url": "https://cdn.omi.com/photos/review1_1.jpg",
        "thumbnailUrl": "https://cdn.omi.com/photos/review1_1_thumb.jpg",
        "category": "EXTRAORAL",
        "subcategory": "FRONTAL"
      }
    ],
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

---

### POST /api/patients/{patientId}/reviews

Crear nueva revisión.

**Request**:
```json
{
  "reviewDate": "2024-01-15T10:00:00Z",
  "reviewType": "PREVENTIVA",
  "chiefComplaint": null,
  "findings": "Dentición temporal completa. Sin caries.",
  "softTissueFindings": "Mucosa oral normal",
  "gumStatus": "Encías sanas",
  "occlusion": "Clase I molar temporal",
  "plaqueIndex": 15.5,
  "brushingTechnique": "Técnica horizontal",
  "flossUsage": "NO_USA",
  "hygieneObservations": "Padres cepillan 2 veces al día",
  "odontogram": [
    {
      "toothNumber": 51,
      "status": "SANO",
      "surfaces": {
        "oclusal": "SANO"
      }
    }
  ],
  "treatmentsApplied": [
    {
      "type": "FLUORACION",
      "productUsed": "Flúor barniz 5%",
      "concentration": "22,600 ppm"
    }
  ],
  "treatmentPlan": "Continuar con revisiones semestrales",
  "recommendations": "Mejorar técnica de cepillado",
  "nextReviewDate": "2024-07-15"
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "data": {
    "id": 1,
    "patientId": 1,
    "reviewDate": "2024-01-15T10:00:00Z",
    "riskLevelUpdated": true,
    "newRiskLevel": "GREEN",
    "achievementsEarned": [
      {
        "id": 1,
        "code": "HYGIENE_STAR",
        "name": "Estrella de Higiene"
      }
    ],
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

---

## 📋 Endpoints de Carnet Digital

### GET /api/patients/{patientId}/carnet

Obtener carnet digital del paciente.

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "patient": {
      "id": 1,
      "firstName": "Carlos",
      "lastName": "Rodríguez",
      "dateOfBirth": "2018-05-15",
      "age": 5,
      "photoUrl": "https://cdn.omi.com/photos/patient1.jpg"
    },
    "plan": {
      "planType": "PREVENTIVO",
      "startDate": "2024-01-01",
      "nextReviewDate": "2024-07-15"
    },
    "riskLevel": {
      "level": "GREEN",
      "lastUpdated": "2024-01-15T10:30:00Z",
      "description": "Riesgo bajo de caries"
    },
    "stamps": [
      {
        "id": 1,
        "reviewId": 1,
        "date": "2024-01-15",
        "type": "PREVENTIVA",
        "professional": "Dr. Juan Pérez",
        "comment": "¡Excelente higiene!"
      }
    ],
    "achievements": [
      {
        "id": 1,
        "code": "HYGIENE_STAR",
        "name": "Estrella de Higiene",
        "description": "Índice O'Leary < 20%",
        "iconUrl": "https://cdn.omi.com/icons/hygiene_star.png",
        "earnedAt": "2024-01-15T10:30:00Z"
      }
    ],
    "statistics": {
      "totalReviews": 3,
      "totalAchievements": 2,
      "consecutiveGoodHygiene": 3,
      "monthsWithoutCavities": 12
    }
  }
}
```

---

## 📋 Endpoints de Evaluación de Riesgo

### GET /api/patients/{patientId}/risk-assessments

Obtener historial de evaluaciones de riesgo.

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "content": [
      {
        "id": 1,
        "assessmentDate": "2024-01-15T10:30:00Z",
        "riskLevel": "GREEN",
        "cariesCount": 0,
        "plaqueIndex": 15.5,
        "attendanceRate": 100.0,
        "dietRisk": "LOW",
        "fluorideExposure": "ADEQUATE",
        "calculatedScore": 2,
        "manualOverride": false,
        "assessedBy": {
          "id": 10,
          "name": "Dr. Juan Pérez"
        }
      }
    ],
    "page": 0,
    "size": 20,
    "totalElements": 3
  }
}
```

---

### POST /api/patients/{patientId}/risk-assessments

Crear evaluación de riesgo manual.

**Request**:
```json
{
  "riskLevel": "YELLOW",
  "overrideReason": "Paciente con dieta alta en azúcares no reflejada en índice",
  "cariesCount": 1,
  "plaqueIndex": 25.0,
  "dietRisk": "HIGH"
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "data": {
    "id": 2,
    "riskLevel": "YELLOW",
    "manualOverride": true,
    "createdAt": "2024-01-15T11:00:00Z"
  }
}
```

---

## 📋 Endpoints de Logros

### GET /api/patients/{patientId}/achievements

Obtener logros del paciente.

**Response** (200 OK):
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "achievement": {
        "code": "HYGIENE_STAR",
        "name": "Estrella de Higiene",
        "description": "Índice O'Leary < 20%",
        "iconUrl": "https://cdn.omi.com/icons/hygiene_star.png",
        "category": "HIGIENE"
      },
      "earnedAt": "2024-01-15T10:30:00Z",
      "reviewId": 1
    }
  ]
}
```

---

### GET /api/achievements

Listar todos los logros disponibles.

**Response** (200 OK):
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "code": "BRONZE_ATTENDANCE",
      "name": "Medalla de Bronce",
      "description": "3 revisiones completadas",
      "iconUrl": "https://cdn.omi.com/icons/bronze.png",
      "category": "ASISTENCIA",
      "criteria": {
        "reviewsCount": 3
      }
    }
  ]
}
```

---

## 📋 Endpoints de Búsqueda

### GET /api/patients/search

Búsqueda avanzada de pacientes.

**Query Parameters**:
- `q`: Término de búsqueda (nombre, apellido, email tutor, teléfono)
- `filters`: Filtros adicionales en formato JSON

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "results": [
      {
        "id": 1,
        "medicalRecordNumber": "MRN001",
        "fullName": "Carlos Rodríguez",
        "age": 5,
        "photoUrl": "https://cdn.omi.com/photos/patient1.jpg",
        "riskLevel": "GREEN",
        "planType": "PREVENTIVO",
        "guardianEmail": "ana@email.com",
        "guardianPhone": "+34612345678"
      }
    ],
    "totalResults": 1
  }
}
```

---

## 📊 Modelos de Datos

### Patient
```typescript
interface Patient {
  id: number;
  clinicId: number;
  medicalRecordNumber: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string; // ISO 8601
  age: number;
  gender: 'M' | 'F' | 'OTHER';
  photoUrl?: string;
  dniNie?: string;
  currentRiskLevel: 'GREEN' | 'YELLOW' | 'RED';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
```

### Review
```typescript
interface Review {
  id: number;
  patientId: number;
  professionalId: number;
  reviewDate: string;
  reviewType: 'PREVENTIVA' | 'URGENCIA' | 'SEGUIMIENTO' | 'HIM';
  chiefComplaint?: string;
  findings: string;
  plaqueIndex?: number;
  treatmentsApplied: Treatment[];
  nextReviewDate?: string;
  createdAt: string;
}
```

### HealthPlan
```typescript
interface HealthPlan {
  id: number;
  patientId: number;
  planType: 'PREVENTIVO' | 'HIM' | 'CRECIMIENTO';
  status: 'ACTIVE' | 'EXPIRED' | 'CANCELLED';
  startDate: string;
  endDate?: string;
  annualPrice: number;
  paymentFrequency: 'ANNUAL' | 'QUARTERLY' | 'MONTHLY';
}
```

---

## 📝 Notas de Implementación

### Validaciones
- Fecha de nacimiento no puede ser futura
- Al menos un tutor debe ser marcado como primario
- El índice de placa debe estar entre 0 y 100
- El número de historia clínica debe ser único por clínica

### Reglas de Negocio
- Al crear una revisión, se actualiza automáticamente el nivel de riesgo
- Se verifica automáticamente si se han ganado logros
- La próxima fecha de revisión se sugiere según el tipo de plan
- Las fotos clínicas se encriptan automáticamente

### Performance
- Cachear carnets digitales (TTL: 1 hora)
- Índices en campos de búsqueda frecuente
- Paginación obligatoria para listados
- Lazy loading de relaciones en JPA
