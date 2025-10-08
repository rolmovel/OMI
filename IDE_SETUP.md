# Configuración de IDEs para OMI

Esta guía te ayudará a configurar tu entorno de desarrollo para trabajar eficientemente con OMI.

## 🔧 IntelliJ IDEA (Backend)

### Instalación y Configuración Inicial

1. **Instalar IntelliJ IDEA Ultimate** (necesario para Spring Boot)
2. **Instalar Plugins Recomendados:**
   - Lombok
   - Spring Boot Assistant
   - SonarLint
   - GitToolBox
   - String Manipulation
   - Rainbow Brackets

### Configuración del Proyecto

1. **Abrir Proyecto:**
   ```bash
   File → Open → Seleccionar el directorio OMI/backend/
   ```

2. **Configurar JDK:**
   - File → Project Structure → Project
   - Project SDK: Java 17
   - Project language level: 17

3. **Configurar Maven:**
   - Settings → Build, Execution, Deployment → Build Tools → Maven
   - Maven home path: /opt/homebrew/Cellar/maven/3.9.6/libexec (o donde esté instalado)
   - User settings file: ~/.m2/settings.xml

4. **Configurar Encoding:**
   - Settings → Editor → File Encodings
   - Global encoding: UTF-8
   - Project encoding: UTF-8

### Configuración de Código

1. **Editor Config:**
   ```bash
   Settings → Editor → Code Style → Java
   - Scheme: Default
   - Imports: 2 imports por package
   - Blank lines: 1 después de package
   ```

2. **Configurar Inspecciones:**
   ```bash
   Settings → Editor → Inspections
   - Activar: @Autowired field injection warnings
   - Activar: Spring Boot annotations
   - Configurar severidad de SonarLint
   ```

3. **Configurar Live Templates:**
   ```bash
   Settings → Editor → Live Templates
   - Crear template para Logger:
     private static final Logger logger = LoggerFactory.getLogger($CLASS_NAME$.class);
   ```

### Atajos Útiles

- `Ctrl + Alt + L` - Formatear código
- `Ctrl + Shift + F` - Buscar en todo el proyecto
- `Ctrl + E` - Ver archivos recientes
- `Ctrl + Shift + A` - Buscar acciones
- `Alt + Enter` - Quick fixes

## 💻 Visual Studio Code (Frontend)

### Instalación y Configuración

1. **Instalar VS Code**
2. **Instalar Extensiones Esenciales:**
   ```bash
   - ES7+ React/Redux/React-Native snippets
   - Prettier - Code formatter
   - ESLint
   - TypeScript Hero
   - Tailwind CSS IntelliSense
   - Auto Rename Tag
   - Bracket Pair Colorizer 2
   - GitLens
   - Import Cost
   - Code Spell Checker
   ```

### Configuración del Workspace

1. **Abrir Proyecto:**
   ```bash
   File → Open Folder → Seleccionar OMI/frontend/
   ```

2. **Configurar Settings:**
   ```json
   // .vscode/settings.json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true,
       "source.organizeImports": true
     },
     "typescript.preferences.importModuleSpecifier": "relative",
     "emmet.includeLanguages": {
       "typescript": "typescriptreact",
       "javascript": "javascriptreact"
     },
     "tailwindCSS.includeLanguages": {
       "typescript": "html",
       "typescriptreact": "html"
     },
     "files.associations": {
       "*.css": "tailwindcss"
     }
   }
   ```

3. **Configurar ESLint:**
   ```json
   // .vscode/settings.json (continuación)
   {
     "eslint.validate": [
       "javascript",
       "javascriptreact",
       "typescript",
       "typescriptreact"
     ],
     "eslint.workingDirectories": ["frontend"]
   }
   ```

### Atajos Útiles

- `Ctrl + Shift + P` - Command Palette
- `Ctrl + P` - Quick Open
- `Ctrl + Shift + F` - Buscar en archivos
- `Ctrl + D` - Seleccionar siguiente ocurrencia
- `Alt + ↑/↓` - Mover línea arriba/abajo
- `Ctrl + /` - Comentar línea
- `Ctrl + Shift + K` - Eliminar línea

## 🎨 Figma (Diseño)

### Configuración Inicial

1. **Crear cuenta en Figma**
2. **Instalar Desktop App** (opcional pero recomendado)

### Organización del Proyecto

1. **Crear Team:** "OMI Health"
2. **Crear Proyecto:** "OMI - Plan de Salud Infantil"
3. **Estructura sugerida:**
   ```
   OMI - Plan de Salud Infantil/
   ├── 🎨 Design System/
   │   ├── Colors & Typography
   │   ├── Components
   │   └── Icons
   ├── 📱 Área Clínica/
   │   ├── Desktop Flows
   │   ├── Components
   │   └── Assets
   ├── 👨‍👩‍👧‍👦 Área Familias/
   │   ├── Mobile Flows
   │   ├── Web Flows
   │   └── Components
   └── 📋 Documentation/
       └── Design Guidelines
   ```

### Plugins Útiles

- **Unsplash** - Imágenes de stock
- **Iconify** - Iconos
- **Autoflow** - Generar diagramas de flujo
- **Stark** - Accesibilidad
- **Contrast** - Verificar contraste de colores

## 🗄️ PostgreSQL (Base de Datos)

### Instalación

```bash
# macOS
brew install postgresql@15
brew services start postgresql@15

# Linux
sudo apt install postgresql-15
sudo systemctl start postgresql

# Crear usuario y base de datos
createdb omi
psql -c "CREATE USER omi WITH PASSWORD 'omi_password';"
psql -c "GRANT ALL PRIVILEGES ON DATABASE omi TO omi;"
```

### Herramientas Recomendadas

1. **pgAdmin 4** - GUI para PostgreSQL
2. **DBeaver** - Cliente universal de BD
3. **Postico** - Cliente moderno (macOS)

### Configuración

```bash
# Editar configuración si es necesario
nano /opt/homebrew/var/postgresql@15/postgresql.conf

# Configuraciones importantes:
listen_addresses = '*'
port = 5432
max_connections = 100
shared_buffers = 256MB
effective_cache_size = 1GB
```

## 🚀 Docker Desktop

### Configuración

1. **Instalar Docker Desktop**
2. **Configurar Recursos:**
   - CPUs: 4
   - Memory: 8GB
   - Swap: 2GB
   - Disk image size: 64GB

3. **Configurar Docker Compose:**
   ```bash
   # Crear alias útil
   echo 'alias dc="docker-compose"' >> ~/.zshrc
   ```

## 🔧 Git y GitHub

### Configuración Inicial

```bash
# Configurar usuario global
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@ejemplo.com"

# Configurar editor por defecto
git config --global core.editor "code --wait"

# Configurar alias útiles
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage "reset HEAD --"
git config --global alias.last "log -1 HEAD"
```

### Configuración del Repositorio

```bash
# Clonar repositorio
git clone https://github.com/tu-org/omi.git
cd omi

# Crear rama de desarrollo
git checkout -b develop

# Configurar upstream
git remote add upstream https://github.com/tu-org/omi.git
```

### Hooks Útiles

Crear `.git/hooks/pre-commit`:

```bash
#!/bin/bash
# Run tests before commit
npm test
if [ $? -ne 0 ]; then
  echo "Tests failed. Please fix them before committing."
  exit 1
fi

# Run linting
npm run lint
if [ $? -ne 0 ]; then
  echo "Linting failed. Please fix the issues before committing."
  exit 1
fi
```

## 🧪 Testing

### Backend Testing

1. **JUnit 5** - Framework de testing
2. **Testcontainers** - Tests de integración con Docker
3. **Mockito** - Mocking
4. **AssertJ** - Assertions avanzadas

### Frontend Testing

1. **Jest** - Framework de testing
2. **React Testing Library** - Testing de componentes
3. **MSW** - Mocking de API
4. **Cypress** - E2E testing

### Configuración de Coverage

```bash
# Backend
mvn test jacoco:report

# Frontend
npm run test:coverage
```

## 📊 Monitorización

### Configurar Prometheus + Grafana

```yaml
# docker-compose.override.yml
version: '3.8'
services:
  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./monitoring/prometheus.yml:/etc/prometheus/prometheus.yml

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - grafana_data:/var/lib/grafana
```

## 🔒 Seguridad

### Configurar Pre-commit Hooks

```bash
# Instalar pre-commit
pip install pre-commit
cd omi
pre-commit install

# Configurar .pre-commit-config.yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.4.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-added-large-files

  - repo: https://github.com/psf/black
    rev: 22.10.0
    hooks:
      - id: black
        language_version: python3.9

  - repo: local
    hooks:
      - id: tests
        name: run tests
        entry: npm test
        language: system
        pass_filenames: false
```

## 📝 Productividad

### Extensiones Adicionales Recomendadas

#### VS Code
- **Error Lens** - Ver errores en línea
- **Git History** - Ver historial de archivos
- **TODO Highlight** - Resaltar TODOs
- **Bookmarks** - Marcar líneas importantes
- **Project Manager** - Gestionar múltiples proyectos

#### IntelliJ IDEA
- **Key Promoter X** - Aprender atajos
- **Grep Console** - Mejorar consola
- **Nyan Progress Bar** - Progress bar divertida
- **Rainbow CSV** - Mejorar visualización de CSV
- **Maven Helper** - Análisis de dependencias

### Temas Recomendados

#### VS Code
- **One Dark Pro** - Tema oscuro profesional
- **Dracula** - Tema popular oscuro
- **GitHub Light** - Tema claro oficial

#### IntelliJ IDEA
- **Material Theme UI** - Tema Material Design
- **Dracula** - Tema oscuro consistente
- **One Dark** - Tema de Atom

## 🚨 Troubleshooting

### Problemas Comunes

1. **Java 17 no encontrado:**
   ```bash
   # Verificar instalación
   java -version
   # Si no funciona, instalar:
   brew install openjdk@17
   ```

2. **Maven no encuentra dependencias:**
   ```bash
   # Limpiar cache local
   rm -rf ~/.m2/repository
   mvn clean install -U
   ```

3. **Node modules no se instalan:**
   ```bash
   # Limpiar cache de npm
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Docker containers no inician:**
   ```bash
   # Limpiar todo
   docker system prune -a
   docker-compose down -v
   docker-compose up -d
   ```

## 📞 Soporte

Si tienes problemas con la configuración:

1. Revisa esta documentación
2. Busca en issues de GitHub
3. Crea un nuevo issue con el template apropiado
4. Contacta al equipo técnico

---

**Configuración actualizada:** Enero 2024
**Mantenido por:** Equipo OMI
