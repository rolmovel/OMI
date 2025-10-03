# Guía de Contribución - OMI

¡Gracias por tu interés en contribuir a OMI! Este documento proporciona las pautas para contribuir al proyecto.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo Puedo Contribuir?](#cómo-puedo-contribuir)
- [Guías de Estilo](#guías-de-estilo)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Commits](#commits)
- [Pull Requests](#pull-requests)

## 📜 Código de Conducta

Este proyecto se adhiere a un Código de Conducta. Al participar, se espera que mantengas este código.

## 🤝 ¿Cómo Puedo Contribuir?

### Reportar Bugs

- Usa el template de issue para bugs
- Describe el bug claramente
- Incluye pasos para reproducir
- Añade capturas de pantalla si es posible
- Especifica tu entorno (OS, navegador, versión)

### Sugerir Mejoras

- Usa el template de issue para features
- Explica claramente el problema que resuelve
- Describe la solución propuesta
- Considera alternativas

### Contribuir Código

1. Fork el repositorio
2. Crea una rama desde `develop`
3. Realiza tus cambios
4. Escribe o actualiza tests
5. Asegúrate de que todos los tests pasen
6. Crea un Pull Request

## 🎨 Guías de Estilo

### Código JavaScript/TypeScript

```typescript
// ✅ Bueno
const getUserById = async (id: number): Promise<User> => {
  const user = await userRepository.findById(id);
  if (!user) {
    throw new NotFoundException(`User with id ${id} not found`);
  }
  return user;
};

// ❌ Malo
const getUser = async (id) => {
  return await userRepository.findById(id);
};
```

**Reglas:**
- Usar TypeScript estricto
- Nombres descriptivos en camelCase
- Funciones pequeñas y con una sola responsabilidad
- Comentarios solo cuando sea necesario explicar "por qué", no "qué"
- Usar async/await en lugar de Promises encadenadas
- Manejar errores apropiadamente

### Código Java

```java
// ✅ Bueno
@Service
@RequiredArgsConstructor
public class PatientService {
    private final PatientRepository patientRepository;
    
    public PatientDTO getPatientById(Long id) {
        Patient patient = patientRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Patient not found"));
        return PatientMapper.toDTO(patient);
    }
}

// ❌ Malo
public class PatientService {
    public Patient getPatient(Long id) {
        return patientRepository.findById(id).get();
    }
}
```

**Reglas:**
- Seguir convenciones de Java (PascalCase para clases, camelCase para métodos)
- Usar anotaciones de Spring apropiadamente
- Inyección de dependencias por constructor
- Usar Optional correctamente
- Manejar excepciones con clases personalizadas

### Código CSS/TailwindCSS

```tsx
// ✅ Bueno
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-xl font-semibold text-gray-900">Title</h2>
  <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
    Action
  </button>
</div>

// ❌ Malo
<div className="flex items-center justify-between p-4" style={{background: 'white'}}>
  <h2 style={{fontSize: '20px'}}>Title</h2>
</div>
```

**Reglas:**
- Preferir TailwindCSS sobre CSS inline
- Usar clases utilitarias de Tailwind
- Crear componentes reutilizables para patrones comunes
- Mantener consistencia en espaciado y colores

### Estructura de Archivos

```
frontend/
├── src/
│   ├── components/
│   │   ├── common/          # Componentes reutilizables
│   │   ├── patients/        # Componentes específicos de pacientes
│   │   └── appointments/    # Componentes específicos de citas
│   ├── hooks/               # Custom hooks
│   ├── services/            # API calls
│   ├── store/               # Estado global
│   ├── types/               # TypeScript types
│   ├── utils/               # Utilidades
│   └── pages/               # Páginas/rutas

backend/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/omi/
│       │       ├── controller/
│       │       ├── service/
│       │       ├── repository/
│       │       ├── model/
│       │       ├── dto/
│       │       ├── mapper/
│       │       ├── exception/
│       │       └── config/
│       └── resources/
│           ├── application.yml
│           └── db/migration/
```

## 🔄 Proceso de Desarrollo

### Branching Strategy

Usamos **Git Flow**:

- `main`: Código en producción
- `develop`: Rama de desarrollo principal
- `feature/*`: Nuevas funcionalidades
- `bugfix/*`: Corrección de bugs
- `hotfix/*`: Correcciones urgentes en producción
- `release/*`: Preparación de releases

### Workflow

1. **Crear rama**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/US-001-login-email
   ```

2. **Desarrollar**
   - Escribe código
   - Escribe tests
   - Ejecuta tests localmente
   - Commit frecuentemente

3. **Preparar PR**
   ```bash
   git fetch origin
   git rebase origin/develop
   git push origin feature/US-001-login-email
   ```

4. **Crear Pull Request**
   - Usa el template de PR
   - Asigna revisores
   - Enlaza issues relacionados
   - Espera aprobación

5. **Merge**
   - Squash commits si es necesario
   - Merge a `develop`
   - Elimina la rama

## 📝 Commits

### Formato de Commit

Usamos **Conventional Commits**:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Formateo, punto y coma, etc.
- `refactor`: Refactorización de código
- `perf`: Mejoras de rendimiento
- `test`: Añadir o corregir tests
- `chore`: Cambios en build, herramientas, etc.

**Ejemplos:**

```bash
feat(auth): add email login functionality

Implement email and password authentication with JWT tokens.
Includes password validation and error handling.

Closes #123

---

fix(patients): correct risk level calculation

The risk level was not updating correctly when plaque index changed.
Fixed the calculation logic in RiskAssessmentService.

Fixes #456

---

docs(api): update patient service endpoints

Add documentation for new search endpoint and update
existing endpoint descriptions.
```

### Reglas de Commits

- Usa el imperativo ("add" no "added" ni "adds")
- Primera línea máximo 72 caracteres
- Cuerpo del commit opcional pero recomendado
- Referencia issues cuando sea relevante
- Un commit = un cambio lógico

## 🔍 Pull Requests

### Antes de Crear un PR

- [ ] El código compila sin errores
- [ ] Todos los tests pasan
- [ ] Has añadido tests para nuevo código
- [ ] Has actualizado la documentación
- [ ] El código sigue las guías de estilo
- [ ] Has hecho rebase con develop

### Descripción del PR

- Describe claramente qué cambia y por qué
- Enlaza issues relacionados
- Añade capturas de pantalla si hay cambios visuales
- Menciona breaking changes si los hay
- Lista las dependencias del PR

### Code Review

**Como Autor:**
- Responde a comentarios constructivamente
- Realiza cambios solicitados
- Marca conversaciones como resueltas
- Notifica cuando esté listo para re-review

**Como Revisor:**
- Sé constructivo y respetuoso
- Explica el "por qué" de tus sugerencias
- Aprueba cuando el código cumple los estándares
- Usa labels: `needs-changes`, `approved`, `blocked`

### Criterios de Aprobación

Un PR necesita:
- ✅ Al menos 1 aprobación de otro desarrollador
- ✅ Todos los tests pasando en CI
- ✅ Sin conflictos con develop
- ✅ Code coverage no disminuye
- ✅ Sin vulnerabilidades de seguridad

## 🧪 Testing

### Tests Unitarios

```typescript
describe('PatientService', () => {
  it('should return patient by id', async () => {
    const patient = await patientService.getById(1);
    expect(patient).toBeDefined();
    expect(patient.id).toBe(1);
  });

  it('should throw error when patient not found', async () => {
    await expect(patientService.getById(999))
      .rejects
      .toThrow('Patient not found');
  });
});
```

### Tests de Integración

```java
@SpringBootTest
@AutoConfigureMockMvc
class PatientControllerTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @Test
    void shouldReturnPatientById() throws Exception {
        mockMvc.perform(get("/api/patients/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(1))
            .andExpect(jsonPath("$.firstName").exists());
    }
}
```

### Cobertura de Tests

- Mínimo 80% de cobertura
- 100% en lógica de negocio crítica
- Tests para casos edge
- Tests para manejo de errores

## 📚 Documentación

### Código

```typescript
/**
 * Retrieves a patient by their ID.
 * 
 * @param id - The unique identifier of the patient
 * @returns Promise resolving to the patient data
 * @throws {NotFoundException} When patient is not found
 * 
 * @example
 * const patient = await getPatientById(123);
 */
async function getPatientById(id: number): Promise<Patient> {
  // ...
}
```

### API

- Documenta todos los endpoints en Swagger/OpenAPI
- Incluye ejemplos de request/response
- Documenta códigos de error posibles
- Mantén la documentación actualizada

### README

- Actualiza README cuando cambies setup
- Documenta nuevas variables de entorno
- Actualiza instrucciones de instalación
- Añade troubleshooting común

## 🚀 Releases

### Versionado

Usamos **Semantic Versioning** (SemVer):

- `MAJOR.MINOR.PATCH` (ej. 1.2.3)
- MAJOR: Cambios incompatibles en API
- MINOR: Nueva funcionalidad compatible
- PATCH: Bug fixes compatibles

### Proceso de Release

1. Crear rama `release/v1.2.0` desde `develop`
2. Actualizar versión en archivos de configuración
3. Actualizar CHANGELOG.md
4. Crear PR a `main`
5. Merge a `main` y tag
6. Merge de vuelta a `develop`
7. Deploy a producción

## ❓ Preguntas

Si tienes preguntas sobre cómo contribuir:

1. Revisa la documentación en `/docs`
2. Busca en issues existentes
3. Crea un issue con la etiqueta `question`
4. Contacta al equipo en [email/slack]

## 🙏 Agradecimientos

¡Gracias por contribuir a OMI y ayudar a mejorar la salud bucodental infantil!
