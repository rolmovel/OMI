# 🔧 Ejemplos Prácticos - Auth Service

## 📋 Índice de Ejemplos

1. [Ejemplos de API REST](#ejemplos-de-api-rest)
2. [Ejemplos de Uso de Servicios](#ejemplos-de-uso-de-servicios)
3. [Ejemplos de Testing](#ejemplos-de-testing)
4. [Ejemplos de Configuración](#ejemplos-de-configuración)
5. [Ejemplos de Integración](#ejemplos-de-integración)

---

## 🌐 Ejemplos de API REST

### 1. Registro de Usuario Médico

#### Request
```bash
curl -X POST http://localhost:8081/api/auth/register \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{
    "username": "dr_rodriguez",
    "email": "rodriguez@clinicacentral.com",
    "password": "MedicoSeguro123!",
    "clinicIdentifier": "clinica-central-madrid",
    "roleName": "MEDICO"
  }'
```

#### Response Exitosa (200 OK)
```json
{
  "message": "Usuario registrado exitosamente"
}
```

#### Response de Error (400 Bad Request)
```json
{
  "error": "Bad Request",
  "message": "Username already exists.",
  "timestamp": "2025-10-08T15:30:00Z"
}
```

### 2. Registro de Enfermero

#### Request
```bash
curl -X POST http://localhost:8081/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "enf_maria",
    "email": "maria.gonzalez@clinicacentral.com",
    "password": "EnfermeroSeguro456!",
    "clinicIdentifier": "clinica-central-madrid",
    "roleName": "ENFERMERO"
  }'
```

### 3. Login de Usuario

#### Request
```bash
curl -X POST http://localhost:8081/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "dr_rodriguez",
    "password": "MedicoSeguro123!"
  }'
```

#### Response Exitosa (200 OK)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkcl9yb2RyaWd1ZXoiLCJpYXQiOjE2OTg2NzIwMDAsImV4cCI6MTY5ODY3MjkwMH0.example-signature",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkcl9yb2RyaWd1ZXoiLCJpYXQiOjE2OTg2NzIwMDAsImV4cCI6MTY5OTI3NjgwMH0.example-refresh-signature"
}
```

### 4. Uso del Token JWT

#### Request Autenticado
```bash
curl -X GET http://localhost:8081/api/protected-endpoint \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkcl9yb2RyaWd1ZXoiLCJpYXQiOjE2OTg2NzIwMDAsImV4cCI6MTY5ODY3MjkwMH0.example-signature" \
  -H "Content-Type: application/json"
```

---

## 🔧 Ejemplos de Uso de Servicios

### 1. Uso del AuthService

```java
@Service
public class ClinicManagementService {
    
    @Autowired
    private AuthService authService;
    
    public void registerNewDoctor(String clinicId, String doctorEmail, String doctorName) {
        RegisterRequest request = new RegisterRequest();
        request.setUsername(generateUsername(doctorName));
        request.setEmail(doctorEmail);
        request.setPassword(generateTemporaryPassword());
        request.setClinicIdentifier(clinicId);
        request.setRoleName("MEDICO");
        
        try {
            authService.register(request);
            // Enviar email con credenciales temporales
            sendWelcomeEmail(doctorEmail, request.getUsername(), request.getPassword());
        } catch (IllegalArgumentException e) {
            // Manejar error de registro
            log.error("Error registrando doctor: {}", e.getMessage());
            throw new RegistrationException("No se pudo registrar el doctor", e);
        }
    }
    
    public String authenticateUser(String username, String password) {
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setUsername(username);
        loginRequest.setPassword(password);
        
        try {
            JwtAuthenticationResponse response = authService.login(loginRequest);
            return response.getToken();
        } catch (IllegalArgumentException e) {
            log.warn("Intento de login fallido para usuario: {}", username);
            throw new AuthenticationException("Credenciales inválidas");
        }
    }
}
```

### 2. Uso del JwtService

```java
@Component
public class TokenValidator {
    
    @Autowired
    private JwtService jwtService;
    
    @Autowired
    private UserRepository userRepository;
    
    public boolean validateTokenForUser(String token, String username) {
        try {
            // Extraer username del token
            String tokenUsername = jwtService.extractUserName(token);
            
            // Verificar que coincida con el username esperado
            if (!username.equals(tokenUsername)) {
                return false;
            }
            
            // Cargar usuario de la base de datos
            Optional<User> userOpt = userRepository.findByUsername(username);
            if (userOpt.isEmpty()) {
                return false;
            }
            
            // Validar token contra usuario
            return jwtService.isTokenValid(token, userOpt.get());
            
        } catch (Exception e) {
            log.error("Error validando token: {}", e.getMessage());
            return false;
        }
    }
    
    public String refreshUserToken(String username) {
        Optional<User> userOpt = userRepository.findByUsername(username);
        if (userOpt.isPresent()) {
            return jwtService.generateToken(userOpt.get());
        }
        throw new UserNotFoundException("Usuario no encontrado: " + username);
    }
}
```

### 3. Integración con Spring Security

```java
@RestController
@RequestMapping("/api/clinic")
@PreAuthorize("hasRole('MEDICO') or hasRole('ADMIN')")
public class ClinicController {
    
    @GetMapping("/patients")
    @PreAuthorize("hasRole('MEDICO')")
    public ResponseEntity<List<Patient>> getPatients(Authentication authentication) {
        // El usuario autenticado está disponible en el contexto
        String username = authentication.getName();
        User currentUser = (User) authentication.getPrincipal();
        
        // Obtener pacientes basado en la clínica del usuario
        List<Patient> patients = patientService.getPatientsByUserClinic(currentUser);
        
        return ResponseEntity.ok(patients);
    }
    
    @PostMapping("/appointments")
    @PreAuthorize("hasRole('MEDICO') or hasRole('ENFERMERO')")
    public ResponseEntity<Appointment> createAppointment(
            @RequestBody CreateAppointmentRequest request,
            Authentication authentication) {
        
        User currentUser = (User) authentication.getPrincipal();
        Appointment appointment = appointmentService.createAppointment(request, currentUser);
        
        return ResponseEntity.ok(appointment);
    }
}
```

---

## 🧪 Ejemplos de Testing

### 1. Test de Integración Completo

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
@AutoConfigureMockMvc
@Transactional
public class AuthFlowIntegrationTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @Autowired
    private ObjectMapper objectMapper;
    
    @Autowired
    private TestDataHelper testDataHelper;
    
    @Test
    void completeAuthenticationFlow() throws Exception {
        // 1. Preparar datos de test
        testDataHelper.createTestClinic("test-clinic", "Clínica de Prueba");
        testDataHelper.createTestRole("MEDICO");
        
        // 2. Registrar usuario
        RegisterRequest registerRequest = new RegisterRequest();
        registerRequest.setUsername("test_doctor");
        registerRequest.setEmail("doctor@test.com");
        registerRequest.setPassword("password123");
        registerRequest.setClinicIdentifier("test-clinic");
        registerRequest.setRoleName("MEDICO");
        
        mockMvc.perform(post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(registerRequest)))
                .andExpect(status().isOk());
        
        // 3. Hacer login
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setUsername("test_doctor");
        loginRequest.setPassword("password123");
        
        MvcResult loginResult = mockMvc.perform(post("/api/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(loginRequest)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token").isNotEmpty())
                .andExpect(jsonPath("$.refreshToken").isNotEmpty())
                .andReturn();
        
        // 4. Extraer token de la respuesta
        String responseBody = loginResult.getResponse().getContentAsString();
        JwtAuthenticationResponse authResponse = objectMapper.readValue(responseBody, JwtAuthenticationResponse.class);
        String token = authResponse.getToken();
        
        // 5. Usar token para acceder a endpoint protegido
        mockMvc.perform(get("/api/protected-endpoint")
                .header("Authorization", "Bearer " + token))
                .andExpect(status().isOk());
    }
}
```

### 2. Test Unitario de AuthService

```java
@ExtendWith(MockitoExtension.class)
class AuthServiceTest {
    
    @Mock
    private UserRepository userRepository;
    
    @Mock
    private ClinicRepository clinicRepository;
    
    @Mock
    private RoleRepository roleRepository;
    
    @Mock
    private UserClinicRoleRepository userClinicRoleRepository;
    
    @Mock
    private PasswordEncoder passwordEncoder;
    
    @Mock
    private JwtService jwtService;
    
    @Mock
    private AuthenticationManager authenticationManager;
    
    @InjectMocks
    private AuthServiceImpl authService;
    
    @Test
    void shouldRegisterUserSuccessfully() {
        // Given
        RegisterRequest request = createRegisterRequest();
        Clinic clinic = createTestClinic();
        Role role = createTestRole();
        
        when(userRepository.findByUsername(request.getUsername())).thenReturn(Optional.empty());
        when(clinicRepository.findByIdentifier(request.getClinicIdentifier())).thenReturn(Optional.of(clinic));
        when(roleRepository.findByName(request.getRoleName())).thenReturn(Optional.of(role));
        when(passwordEncoder.encode(request.getPassword())).thenReturn("encoded-password");
        when(userRepository.save(any(User.class))).thenReturn(createTestUser());
        
        // When
        assertDoesNotThrow(() -> authService.register(request));
        
        // Then
        verify(userRepository).save(any(User.class));
        verify(userClinicRoleRepository).save(any(UserClinicRole.class));
    }
    
    @Test
    void shouldThrowExceptionWhenUserAlreadyExists() {
        // Given
        RegisterRequest request = createRegisterRequest();
        when(userRepository.findByUsername(request.getUsername())).thenReturn(Optional.of(new User()));
        
        // When & Then
        IllegalArgumentException exception = assertThrows(
            IllegalArgumentException.class,
            () -> authService.register(request)
        );
        
        assertEquals("Username already exists.", exception.getMessage());
    }
}
```

### 3. Test de JwtService

```java
@ExtendWith(MockitoExtension.class)
class JwtServiceTest {
    
    @InjectMocks
    private JwtServiceImpl jwtService;
    
    @BeforeEach
    void setUp() {
        ReflectionTestUtils.setField(jwtService, "jwtSecret", "test-secret-key-that-is-long-enough-for-hmac-sha256");
        ReflectionTestUtils.setField(jwtService, "jwtExpiration", 900000L);
        ReflectionTestUtils.setField(jwtService, "refreshExpiration", 604800000L);
    }
    
    @Test
    void shouldGenerateAndValidateToken() {
        // Given
        User user = createTestUser();
        
        // When
        String token = jwtService.generateToken(user);
        
        // Then
        assertNotNull(token);
        assertTrue(jwtService.isTokenValid(token, user));
        assertEquals(user.getUsername(), jwtService.extractUserName(token));
    }
    
    @Test
    void shouldDetectExpiredToken() {
        // Given
        ReflectionTestUtils.setField(jwtService, "jwtExpiration", 1L); // 1ms
        User user = createTestUser();
        String token = jwtService.generateToken(user);
        
        // When - wait for token to expire
        try {
            Thread.sleep(10);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        // Then
        assertFalse(jwtService.isTokenValid(token, user));
    }
}
```

---

## ⚙️ Ejemplos de Configuración

### 1. Configuración de Desarrollo

```yaml
# application-dev.yml
spring:
  application:
    name: auth-service-dev
  datasource:
    url: jdbc:postgresql://localhost:5432/auth_dev_db
    username: dev_user
    password: dev_password
    hikari:
      maximum-pool-size: 5
      minimum-idle: 2
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        format_sql: true

app:
  jwt:
    secret: dev-secret-key-for-development-only
    expiration: 3600000  # 1 hora para desarrollo
    refresh-expiration: 86400000 # 1 día para desarrollo

logging:
  level:
    com.omi.auth: DEBUG
    org.springframework.security: DEBUG
```

### 2. Configuración de Producción

```yaml
# application-prod.yml
spring:
  application:
    name: auth-service
  datasource:
    url: jdbc:postgresql://${DB_HOST:postgres}:${DB_PORT:5432}/${DB_NAME:auth_db}
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    hikari:
      maximum-pool-size: 20
      minimum-idle: 5
      connection-timeout: 30000
      idle-timeout: 600000
      max-lifetime: 1800000
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect

app:
  jwt:
    secret: ${JWT_SECRET}
    expiration: 900000  # 15 minutos
    refresh-expiration: 604800000 # 7 días

logging:
  level:
    com.omi.auth: INFO
    org.springframework.security: WARN
  pattern:
    console: "%d{yyyy-MM-dd HH:mm:ss} - %msg%n"
    file: "%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n"
  file:
    name: /var/log/auth-service.log
```

### 3. Configuración Docker

```dockerfile
# Dockerfile
FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/auth-service-*.jar app.jar

EXPOSE 8081

ENV JAVA_OPTS="-Xmx512m -Xms256m"

ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
```

```yaml
# docker-compose.yml
version: '3.8'
services:
  auth-service:
    build: .
    ports:
      - "8081:8081"
    environment:
      - SPRING_PROFILES_ACTIVE=docker
      - DB_HOST=postgres
      - DB_USERNAME=omi
      - DB_PASSWORD=omi_password
      - JWT_SECRET=${JWT_SECRET}
    depends_on:
      postgres:
        condition: service_healthy
    restart: unless-stopped

  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=auth_db
      - POSTGRES_USER=omi
      - POSTGRES_PASSWORD=omi_password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U omi -d auth_db"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  postgres_data:
```

---

## 🔗 Ejemplos de Integración

### 1. Integración con Frontend (JavaScript)

```javascript
// auth-service-client.js
class AuthServiceClient {
    constructor(baseUrl = 'http://localhost:8081/api/auth') {
        this.baseUrl = baseUrl;
        this.token = localStorage.getItem('authToken');
        this.refreshToken = localStorage.getItem('refreshToken');
    }
    
    async register(userData) {
        try {
            const response = await fetch(`${this.baseUrl}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });
            
            if (!response.ok) {
                throw new Error(`Registration failed: ${response.statusText}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    }
    
    async login(username, password) {
        try {
            const response = await fetch(`${this.baseUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });
            
            if (!response.ok) {
                throw new Error(`Login failed: ${response.statusText}`);
            }
            
            const data = await response.json();
            
            // Guardar tokens
            this.token = data.token;
            this.refreshToken = data.refreshToken;
            localStorage.setItem('authToken', this.token);
            localStorage.setItem('refreshToken', this.refreshToken);
            
            return data;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }
    
    async makeAuthenticatedRequest(url, options = {}) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`,
            ...options.headers
        };
        
        try {
            const response = await fetch(url, {
                ...options,
                headers
            });
            
            if (response.status === 401) {
                // Token expirado, intentar refresh
                await this.refreshTokens();
                // Reintentar request con nuevo token
                headers['Authorization'] = `Bearer ${this.token}`;
                return await fetch(url, { ...options, headers });
            }
            
            return response;
        } catch (error) {
            console.error('Authenticated request error:', error);
            throw error;
        }
    }
    
    logout() {
        this.token = null;
        this.refreshToken = null;
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
    }
}

// Uso del cliente
const authClient = new AuthServiceClient();

// Registro
authClient.register({
    username: 'dr_smith',
    email: 'smith@clinic.com',
    password: 'securePassword123',
    clinicIdentifier: 'main-clinic',
    roleName: 'MEDICO'
}).then(() => {
    console.log('Usuario registrado exitosamente');
}).catch(error => {
    console.error('Error en registro:', error);
});

// Login
authClient.login('dr_smith', 'securePassword123')
    .then(response => {
        console.log('Login exitoso:', response);
        // Redirigir a dashboard
        window.location.href = '/dashboard';
    })
    .catch(error => {
        console.error('Error en login:', error);
        // Mostrar mensaje de error al usuario
    });
```

### 2. Integración con Otro Microservicio

```java
// PatientService - Otro microservicio que consume Auth Service
@Service
public class PatientService {
    
    @Autowired
    private AuthServiceClient authServiceClient;
    
    @Autowired
    private PatientRepository patientRepository;
    
    public List<Patient> getPatientsByDoctor(String doctorToken) {
        // Validar token con Auth Service
        UserInfo userInfo = authServiceClient.validateToken(doctorToken);
        
        if (userInfo == null || !userInfo.hasRole("MEDICO")) {
            throw new UnauthorizedException("Token inválido o permisos insuficientes");
        }
        
        // Obtener pacientes del doctor
        return patientRepository.findByDoctorId(userInfo.getUserId());
    }
}

@Component
public class AuthServiceClient {
    
    @Value("${auth-service.url}")
    private String authServiceUrl;
    
    @Autowired
    private RestTemplate restTemplate;
    
    public UserInfo validateToken(String token) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setBearerAuth(token);
            HttpEntity<String> entity = new HttpEntity<>(headers);
            
            ResponseEntity<UserInfo> response = restTemplate.exchange(
                authServiceUrl + "/validate",
                HttpMethod.GET,
                entity,
                UserInfo.class
            );
            
            return response.getBody();
        } catch (Exception e) {
            log.error("Error validating token: {}", e.getMessage());
            return null;
        }
    }
}
```

### 3. Integración con API Gateway

```yaml
# application.yml del API Gateway
spring:
  cloud:
    gateway:
      routes:
        - id: auth-service
          uri: http://auth-service:8081
          predicates:
            - Path=/api/auth/**
          filters:
            - StripPrefix=0
            
        - id: patient-service
          uri: http://patient-service:8082
          predicates:
            - Path=/api/patients/**
          filters:
            - StripPrefix=0
            - name: AuthenticationFilter
              args:
                auth-service-url: http://auth-service:8081
```

```java
// Filtro de autenticación en API Gateway
@Component
public class AuthenticationFilter implements GatewayFilter {
    
    @Autowired
    private AuthServiceClient authServiceClient;
    
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();
        
        // Extraer token del header
        String authHeader = request.getHeaders().getFirst("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return unauthorized(exchange);
        }
        
        String token = authHeader.substring(7);
        
        // Validar token con Auth Service
        return authServiceClient.validateTokenAsync(token)
            .flatMap(userInfo -> {
                if (userInfo != null) {
                    // Agregar información del usuario a los headers
                    ServerHttpRequest modifiedRequest = request.mutate()
                        .header("X-User-Id", userInfo.getUserId())
                        .header("X-User-Role", userInfo.getRole())
                        .header("X-User-Clinic", userInfo.getClinicId())
                        .build();
                    
                    return chain.filter(exchange.mutate().request(modifiedRequest).build());
                } else {
                    return unauthorized(exchange);
                }
            });
    }
    
    private Mono<Void> unauthorized(ServerWebExchange exchange) {
        ServerHttpResponse response = exchange.getResponse();
        response.setStatusCode(HttpStatus.UNAUTHORIZED);
        return response.setComplete();
    }
}
```

---

Estos ejemplos proporcionan una guía completa para utilizar el Auth Service en diferentes escenarios y contextos. Cada ejemplo incluye código funcional que puedes adaptar según tus necesidades específicas.
