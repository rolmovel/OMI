# Modelo de Datos - OMI

## 🗄️ Esquema de Base de Datos

### Convenciones

- **Nomenclatura**: snake_case para tablas y columnas
- **Primary Keys**: `id` (BIGSERIAL)
- **Timestamps**: `created_at`, `updated_at` en todas las tablas
- **Soft Delete**: `deleted_at` para eliminación lógica
- **Foreign Keys**: `{tabla}_id`

---

## 📊 Auth Database (auth_db)

### Tabla: users

```sql
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL, -- ADMIN, ODONTOLOGO, HIGIENISTA, RECEPCION, PADRE
    clinic_id BIGINT,
    is_active BOOLEAN DEFAULT true,
    email_verified BOOLEAN DEFAULT false,
    phone_verified BOOLEAN DEFAULT false,
    two_factor_enabled BOOLEAN DEFAULT false,
    two_factor_secret VARCHAR(255),
    last_login_at TIMESTAMP,
    failed_login_attempts INT DEFAULT 0,
    locked_until TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_clinic_id ON users(clinic_id);
CREATE INDEX idx_users_role ON users(role);
```

### Tabla: roles

```sql
CREATE TABLE roles (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Tabla: permissions

```sql
CREATE TABLE permissions (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    resource VARCHAR(50) NOT NULL, -- patients, appointments, reports, etc.
    action VARCHAR(50) NOT NULL, -- create, read, update, delete
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Tabla: role_permissions

```sql
CREATE TABLE role_permissions (
    role_id BIGINT REFERENCES roles(id) ON DELETE CASCADE,
    permission_id BIGINT REFERENCES permissions(id) ON DELETE CASCADE,
    PRIMARY KEY (role_id, permission_id)
);
```

### Tabla: refresh_tokens

```sql
CREATE TABLE refresh_tokens (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id) ON DELETE CASCADE,
    token VARCHAR(500) UNIQUE NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    revoked_at TIMESTAMP
);

CREATE INDEX idx_refresh_tokens_user_id ON refresh_tokens(user_id);
CREATE INDEX idx_refresh_tokens_token ON refresh_tokens(token);
```

### Tabla: qr_codes

```sql
CREATE TABLE qr_codes (
    id BIGSERIAL PRIMARY KEY,
    code VARCHAR(100) UNIQUE NOT NULL,
    user_id BIGINT REFERENCES users(id) ON DELETE CASCADE,
    expires_at TIMESTAMP,
    used_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_qr_codes_code ON qr_codes(code);
```

### Tabla: audit_logs

```sql
CREATE TABLE audit_logs (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    resource_type VARCHAR(50),
    resource_id BIGINT,
    ip_address VARCHAR(45),
    user_agent TEXT,
    details JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);
CREATE INDEX idx_audit_logs_resource ON audit_logs(resource_type, resource_id);
```

---

## 📊 Patient Database (patient_db)

### Tabla: clinics

```sql
CREATE TABLE clinics (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo_url VARCHAR(500),
    primary_color VARCHAR(7), -- #RRGGBB
    secondary_color VARCHAR(7),
    address TEXT,
    phone VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Tabla: patients

```sql
CREATE TABLE patients (
    id BIGSERIAL PRIMARY KEY,
    clinic_id BIGINT REFERENCES clinics(id),
    medical_record_number VARCHAR(50) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender VARCHAR(10),
    photo_url VARCHAR(500),
    dni_nie VARCHAR(20),
    current_risk_level VARCHAR(20) DEFAULT 'GREEN', -- GREEN, YELLOW, RED
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE INDEX idx_patients_clinic_id ON patients(clinic_id);
CREATE INDEX idx_patients_medical_record ON patients(medical_record_number);
CREATE INDEX idx_patients_risk_level ON patients(current_risk_level);
```

### Tabla: guardians

```sql
CREATE TABLE guardians (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL, -- Referencia a auth_db.users
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    relationship VARCHAR(50) NOT NULL, -- PADRE, MADRE, TUTOR_LEGAL
    email VARCHAR(255),
    phone VARCHAR(20),
    is_primary BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_guardians_user_id ON guardians(user_id);
```

### Tabla: patient_guardians

```sql
CREATE TABLE patient_guardians (
    patient_id BIGINT REFERENCES patients(id) ON DELETE CASCADE,
    guardian_id BIGINT REFERENCES guardians(id) ON DELETE CASCADE,
    PRIMARY KEY (patient_id, guardian_id)
);
```

### Tabla: health_plans

```sql
CREATE TABLE health_plans (
    id BIGSERIAL PRIMARY KEY,
    patient_id BIGINT REFERENCES patients(id) ON DELETE CASCADE,
    plan_type VARCHAR(50) NOT NULL, -- PREVENTIVO, HIM, CRECIMIENTO
    start_date DATE NOT NULL,
    end_date DATE,
    status VARCHAR(20) DEFAULT 'ACTIVE', -- ACTIVE, EXPIRED, CANCELLED
    annual_price DECIMAL(10,2),
    payment_frequency VARCHAR(20), -- ANNUAL, QUARTERLY, MONTHLY
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_health_plans_patient_id ON health_plans(patient_id);
CREATE INDEX idx_health_plans_status ON health_plans(status);
```

### Tabla: reviews

```sql
CREATE TABLE reviews (
    id BIGSERIAL PRIMARY KEY,
    patient_id BIGINT REFERENCES patients(id) ON DELETE CASCADE,
    professional_id BIGINT NOT NULL, -- Referencia a auth_db.users
    review_date TIMESTAMP NOT NULL,
    review_type VARCHAR(50) NOT NULL, -- PREVENTIVA, URGENCIA, SEGUIMIENTO, HIM
    chief_complaint TEXT,
    findings TEXT,
    soft_tissue_findings TEXT,
    gum_status TEXT,
    occlusion TEXT,
    plaque_index DECIMAL(5,2), -- O'Leary index
    brushing_technique TEXT,
    floss_usage VARCHAR(50),
    hygiene_observations TEXT,
    treatment_plan TEXT,
    recommendations TEXT,
    next_review_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_reviews_patient_id ON reviews(patient_id);
CREATE INDEX idx_reviews_review_date ON reviews(review_date);
CREATE INDEX idx_reviews_professional_id ON reviews(professional_id);
```

### Tabla: odontograms

```sql
CREATE TABLE odontograms (
    id BIGSERIAL PRIMARY KEY,
    review_id BIGINT REFERENCES reviews(id) ON DELETE CASCADE,
    tooth_number INT NOT NULL, -- 11-18, 21-28, 31-38, 41-48, 51-55, 61-65, 71-75, 81-85
    status VARCHAR(50) NOT NULL, -- SANO, CARIES, OBTURADO, SELLADOR, AUSENTE, EN_ERUPCION
    surfaces JSONB, -- {"oclusal": "CARIES", "mesial": "SANO", ...}
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_odontograms_review_id ON odontograms(review_id);
CREATE INDEX idx_odontograms_tooth_number ON odontograms(tooth_number);
```

### Tabla: treatments_applied

```sql
CREATE TABLE treatments_applied (
    id BIGSERIAL PRIMARY KEY,
    review_id BIGINT REFERENCES reviews(id) ON DELETE CASCADE,
    treatment_type VARCHAR(100) NOT NULL, -- FLUORACION, SELLADOR, LIMPIEZA, etc.
    tooth_number INT,
    surface VARCHAR(50),
    product_used VARCHAR(255),
    concentration VARCHAR(50),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_treatments_applied_review_id ON treatments_applied(review_id);
CREATE INDEX idx_treatments_applied_type ON treatments_applied(treatment_type);
```

### Tabla: risk_assessments

```sql
CREATE TABLE risk_assessments (
    id BIGSERIAL PRIMARY KEY,
    patient_id BIGINT REFERENCES patients(id) ON DELETE CASCADE,
    review_id BIGINT REFERENCES reviews(id),
    assessment_date TIMESTAMP NOT NULL,
    risk_level VARCHAR(20) NOT NULL, -- GREEN, YELLOW, RED
    caries_count INT DEFAULT 0,
    plaque_index DECIMAL(5,2),
    attendance_rate DECIMAL(5,2),
    diet_risk VARCHAR(20), -- LOW, MODERATE, HIGH
    fluoride_exposure VARCHAR(20), -- ADEQUATE, INADEQUATE
    calculated_score INT,
    manual_override BOOLEAN DEFAULT false,
    override_reason TEXT,
    assessed_by BIGINT NOT NULL, -- Referencia a auth_db.users
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_risk_assessments_patient_id ON risk_assessments(patient_id);
CREATE INDEX idx_risk_assessments_date ON risk_assessments(assessment_date);
```

### Tabla: achievements

```sql
CREATE TABLE achievements (
    id BIGSERIAL PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    icon_url VARCHAR(500),
    category VARCHAR(50), -- ASISTENCIA, HIGIENE, ESPECIAL
    criteria JSONB, -- Criterios para obtener el logro
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Tabla: patient_achievements

```sql
CREATE TABLE patient_achievements (
    id BIGSERIAL PRIMARY KEY,
    patient_id BIGINT REFERENCES patients(id) ON DELETE CASCADE,
    achievement_id BIGINT REFERENCES achievements(id),
    earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    review_id BIGINT REFERENCES reviews(id)
);

CREATE INDEX idx_patient_achievements_patient_id ON patient_achievements(patient_id);
```

### Tabla: medical_history

```sql
CREATE TABLE medical_history (
    id BIGSERIAL PRIMARY KEY,
    patient_id BIGINT REFERENCES patients(id) ON DELETE CASCADE,
    allergies TEXT,
    current_medications TEXT,
    medical_conditions TEXT,
    previous_dental_trauma TEXT,
    orthodontic_history TEXT,
    notes TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_medical_history_patient_id ON medical_history(patient_id);
```

---

## 📊 Appointment Database (appointment_db)

### Tabla: appointments

```sql
CREATE TABLE appointments (
    id BIGSERIAL PRIMARY KEY,
    clinic_id BIGINT NOT NULL,
    patient_id BIGINT NOT NULL, -- Referencia a patient_db.patients
    professional_id BIGINT NOT NULL, -- Referencia a auth_db.users
    appointment_type VARCHAR(50) NOT NULL, -- REVISION, URGENCIA, SEGUIMIENTO, HIM
    scheduled_date TIMESTAMP NOT NULL,
    duration_minutes INT DEFAULT 30,
    status VARCHAR(20) DEFAULT 'SCHEDULED', -- SCHEDULED, CONFIRMED, COMPLETED, CANCELLED, NO_SHOW
    cancellation_reason TEXT,
    notes TEXT,
    reminder_sent BOOLEAN DEFAULT false,
    confirmation_sent BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_appointments_clinic_id ON appointments(clinic_id);
CREATE INDEX idx_appointments_patient_id ON appointments(patient_id);
CREATE INDEX idx_appointments_professional_id ON appointments(professional_id);
CREATE INDEX idx_appointments_scheduled_date ON appointments(scheduled_date);
CREATE INDEX idx_appointments_status ON appointments(status);
```

### Tabla: availability

```sql
CREATE TABLE availability (
    id BIGSERIAL PRIMARY KEY,
    professional_id BIGINT NOT NULL, -- Referencia a auth_db.users
    day_of_week INT NOT NULL, -- 0=Domingo, 1=Lunes, ..., 6=Sábado
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_availability_professional_id ON availability(professional_id);
```

### Tabla: availability_exceptions

```sql
CREATE TABLE availability_exceptions (
    id BIGSERIAL PRIMARY KEY,
    professional_id BIGINT NOT NULL,
    exception_date DATE NOT NULL,
    exception_type VARCHAR(20) NOT NULL, -- VACATION, SICK_LEAVE, TRAINING, BLOCKED
    start_time TIME,
    end_time TIME,
    reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_availability_exceptions_professional_id ON availability_exceptions(professional_id);
CREATE INDEX idx_availability_exceptions_date ON availability_exceptions(exception_date);
```

### Tabla: waiting_list

```sql
CREATE TABLE waiting_list (
    id BIGSERIAL PRIMARY KEY,
    clinic_id BIGINT NOT NULL,
    patient_id BIGINT NOT NULL,
    appointment_type VARCHAR(50) NOT NULL,
    preferred_professional_id BIGINT,
    preferred_date_from DATE,
    preferred_date_to DATE,
    preferred_time_of_day VARCHAR(20), -- MORNING, AFTERNOON, ANY
    priority VARCHAR(20) DEFAULT 'NORMAL', -- URGENT, HIGH, NORMAL, LOW
    notes TEXT,
    status VARCHAR(20) DEFAULT 'WAITING', -- WAITING, CONTACTED, SCHEDULED, CANCELLED
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_waiting_list_clinic_id ON waiting_list(clinic_id);
CREATE INDEX idx_waiting_list_patient_id ON waiting_list(patient_id);
CREATE INDEX idx_waiting_list_status ON waiting_list(status);
```

---

## 📊 Notification Database (notification_db)

### Tabla: notifications

```sql
CREATE TABLE notifications (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL, -- Referencia a auth_db.users
    type VARCHAR(50) NOT NULL, -- APPOINTMENT_REMINDER, REPORT_READY, ACHIEVEMENT, MESSAGE, etc.
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    channel VARCHAR(20) NOT NULL, -- PUSH, EMAIL, SMS
    status VARCHAR(20) DEFAULT 'PENDING', -- PENDING, SENT, FAILED, READ
    priority VARCHAR(20) DEFAULT 'NORMAL', -- LOW, NORMAL, HIGH, URGENT
    scheduled_for TIMESTAMP,
    sent_at TIMESTAMP,
    read_at TIMESTAMP,
    metadata JSONB,
    error_message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_status ON notifications(status);
CREATE INDEX idx_notifications_scheduled_for ON notifications(scheduled_for);
```

### Tabla: notification_templates

```sql
CREATE TABLE notification_templates (
    id BIGSERIAL PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    channel VARCHAR(20) NOT NULL, -- PUSH, EMAIL, SMS
    subject VARCHAR(255),
    body_template TEXT NOT NULL,
    variables JSONB, -- Lista de variables disponibles
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Tabla: notification_preferences

```sql
CREATE TABLE notification_preferences (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT UNIQUE NOT NULL, -- Referencia a auth_db.users
    appointment_reminders BOOLEAN DEFAULT true,
    appointment_reminders_channel VARCHAR(20) DEFAULT 'PUSH',
    report_notifications BOOLEAN DEFAULT true,
    achievement_notifications BOOLEAN DEFAULT true,
    educational_content BOOLEAN DEFAULT true,
    marketing_communications BOOLEAN DEFAULT false,
    do_not_disturb_start TIME,
    do_not_disturb_end TIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_notification_preferences_user_id ON notification_preferences(user_id);
```

---

## 📊 Report Database (report_db)

### Tabla: reports

```sql
CREATE TABLE reports (
    id BIGSERIAL PRIMARY KEY,
    patient_id BIGINT NOT NULL, -- Referencia a patient_db.patients
    review_id BIGINT NOT NULL, -- Referencia a patient_db.reviews
    generated_by BIGINT NOT NULL, -- Referencia a auth_db.users
    report_type VARCHAR(50) DEFAULT 'REVIEW', -- REVIEW, ANNUAL, CUSTOM
    file_url VARCHAR(500),
    file_size_bytes BIGINT,
    status VARCHAR(20) DEFAULT 'GENERATED', -- GENERATING, GENERATED, SENT, ERROR
    sent_at TIMESTAMP,
    sent_to TEXT, -- Lista de emails separados por coma
    viewed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_reports_patient_id ON reports(patient_id);
CREATE INDEX idx_reports_review_id ON reports(review_id);
CREATE INDEX idx_reports_created_at ON reports(created_at);
```

### Tabla: report_templates

```sql
CREATE TABLE report_templates (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    template_type VARCHAR(50) NOT NULL, -- HTML, DOCX
    template_content TEXT,
    is_default BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📊 Payment Database (payment_db)

### Tabla: payments

```sql
CREATE TABLE payments (
    id BIGSERIAL PRIMARY KEY,
    patient_id BIGINT NOT NULL, -- Referencia a patient_db.patients
    health_plan_id BIGINT, -- Referencia a patient_db.health_plans
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'EUR',
    payment_method VARCHAR(50) NOT NULL, -- CARD, TRANSFER, CASH, SEPA
    payment_type VARCHAR(50) NOT NULL, -- PLAN_SUBSCRIPTION, ORTHODONTICS, TREATMENT
    status VARCHAR(20) DEFAULT 'PENDING', -- PENDING, COMPLETED, FAILED, REFUNDED
    transaction_id VARCHAR(255),
    payment_gateway VARCHAR(50),
    payment_date TIMESTAMP,
    description TEXT,
    metadata JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_payments_patient_id ON payments(patient_id);
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_payments_payment_date ON payments(payment_date);
```

### Tabla: subscriptions

```sql
CREATE TABLE subscriptions (
    id BIGSERIAL PRIMARY KEY,
    patient_id BIGINT NOT NULL,
    health_plan_id BIGINT REFERENCES health_plans(id),
    subscription_type VARCHAR(50) NOT NULL, -- ANNUAL, QUARTERLY, MONTHLY
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'EUR',
    status VARCHAR(20) DEFAULT 'ACTIVE', -- ACTIVE, CANCELLED, EXPIRED
    start_date DATE NOT NULL,
    end_date DATE,
    next_billing_date DATE,
    payment_method VARCHAR(50),
    auto_renew BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_subscriptions_patient_id ON subscriptions(patient_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
CREATE INDEX idx_subscriptions_next_billing_date ON subscriptions(next_billing_date);
```

### Tabla: invoices

```sql
CREATE TABLE invoices (
    id BIGSERIAL PRIMARY KEY,
    invoice_number VARCHAR(50) UNIQUE NOT NULL,
    patient_id BIGINT NOT NULL,
    payment_id BIGINT REFERENCES payments(id),
    issue_date DATE NOT NULL,
    due_date DATE,
    subtotal DECIMAL(10,2) NOT NULL,
    tax_rate DECIMAL(5,2) DEFAULT 0,
    tax_amount DECIMAL(10,2) DEFAULT 0,
    total DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'EUR',
    status VARCHAR(20) DEFAULT 'ISSUED', -- ISSUED, PAID, OVERDUE, CANCELLED
    file_url VARCHAR(500),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_invoices_patient_id ON invoices(patient_id);
CREATE INDEX idx_invoices_invoice_number ON invoices(invoice_number);
CREATE INDEX idx_invoices_status ON invoices(status);
```

### Tabla: sepa_mandates

```sql
CREATE TABLE sepa_mandates (
    id BIGSERIAL PRIMARY KEY,
    patient_id BIGINT NOT NULL,
    mandate_reference VARCHAR(100) UNIQUE NOT NULL,
    iban VARCHAR(34) NOT NULL,
    bic VARCHAR(11),
    account_holder_name VARCHAR(255) NOT NULL,
    signature_date DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'ACTIVE', -- ACTIVE, CANCELLED, EXPIRED
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_sepa_mandates_patient_id ON sepa_mandates(patient_id);
```

---

## 📊 Media Database (media_db)

### Tabla: media_files

```sql
CREATE TABLE media_files (
    id BIGSERIAL PRIMARY KEY,
    patient_id BIGINT, -- Referencia a patient_db.patients (null si es recurso educativo)
    review_id BIGINT, -- Referencia a patient_db.reviews (null si no está asociado a revisión)
    uploaded_by BIGINT NOT NULL, -- Referencia a auth_db.users
    file_type VARCHAR(50) NOT NULL, -- IMAGE, VIDEO, DOCUMENT, PDF
    media_category VARCHAR(50) NOT NULL, -- CLINICAL_PHOTO, PATIENT_PHOTO, EDUCATIONAL, XRAY
    subcategory VARCHAR(50), -- EXTRAORAL, INTRAORAL, HIM, etc.
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    file_size_bytes BIGINT,
    mime_type VARCHAR(100),
    width INT,
    height INT,
    is_encrypted BOOLEAN DEFAULT false,
    thumbnail_path VARCHAR(500),
    description TEXT,
    tags TEXT[],
    metadata JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE INDEX idx_media_files_patient_id ON media_files(patient_id);
CREATE INDEX idx_media_files_review_id ON media_files(review_id);
CREATE INDEX idx_media_files_category ON media_files(media_category);
CREATE INDEX idx_media_files_created_at ON media_files(created_at);
```

### Tabla: educational_resources

```sql
CREATE TABLE educational_resources (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    resource_type VARCHAR(50) NOT NULL, -- VIDEO, INFOGRAPHIC, ARTICLE, GAME
    category VARCHAR(50) NOT NULL, -- HIGIENE, ALIMENTACION, PREVENCION, ORTODONCIA
    age_group VARCHAR(50), -- 0-3, 3-6, 6-12, 12+, ADULTOS
    media_file_id BIGINT REFERENCES media_files(id),
    external_url VARCHAR(500),
    duration_seconds INT, -- Para videos
    views_count INT DEFAULT 0,
    is_featured BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_educational_resources_category ON educational_resources(category);
CREATE INDEX idx_educational_resources_age_group ON educational_resources(age_group);
```

---

## 📊 Analytics Database (analytics_db)

### Tabla: patient_metrics

```sql
CREATE TABLE patient_metrics (
    id BIGSERIAL PRIMARY KEY,
    clinic_id BIGINT NOT NULL,
    metric_date DATE NOT NULL,
    total_patients INT DEFAULT 0,
    active_patients INT DEFAULT 0,
    new_patients INT DEFAULT 0,
    patients_by_plan JSONB, -- {"PREVENTIVO": 50, "HIM": 30, "CRECIMIENTO": 20}
    patients_by_risk JSONB, -- {"GREEN": 60, "YELLOW": 30, "RED": 10}
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_patient_metrics_clinic_id ON patient_metrics(clinic_id);
CREATE INDEX idx_patient_metrics_date ON patient_metrics(metric_date);
```

### Tabla: appointment_metrics

```sql
CREATE TABLE appointment_metrics (
    id BIGSERIAL PRIMARY KEY,
    clinic_id BIGINT NOT NULL,
    metric_date DATE NOT NULL,
    total_appointments INT DEFAULT 0,
    completed_appointments INT DEFAULT 0,
    cancelled_appointments INT DEFAULT 0,
    no_show_appointments INT DEFAULT 0,
    attendance_rate DECIMAL(5,2),
    cancellation_rate DECIMAL(5,2),
    average_duration_minutes DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_appointment_metrics_clinic_id ON appointment_metrics(clinic_id);
CREATE INDEX idx_appointment_metrics_date ON appointment_metrics(metric_date);
```

### Tabla: revenue_metrics

```sql
CREATE TABLE revenue_metrics (
    id BIGSERIAL PRIMARY KEY,
    clinic_id BIGINT NOT NULL,
    metric_date DATE NOT NULL,
    total_revenue DECIMAL(10,2) DEFAULT 0,
    plan_revenue DECIMAL(10,2) DEFAULT 0,
    treatment_revenue DECIMAL(10,2) DEFAULT 0,
    orthodontics_revenue DECIMAL(10,2) DEFAULT 0,
    new_subscriptions INT DEFAULT 0,
    cancelled_subscriptions INT DEFAULT 0,
    renewal_rate DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_revenue_metrics_clinic_id ON revenue_metrics(clinic_id);
CREATE INDEX idx_revenue_metrics_date ON revenue_metrics(metric_date);
```

---

## 🔗 Relaciones entre Bases de Datos

### Referencias Cross-Database

Dado que cada microservicio tiene su propia base de datos, las referencias entre bases de datos se manejan a nivel de aplicación, no con foreign keys:

```
auth_db.users.id
    ↓ (referenciado por)
patient_db.reviews.professional_id
patient_db.guardians.user_id
appointment_db.appointments.professional_id
notification_db.notifications.user_id
report_db.reports.generated_by
media_db.media_files.uploaded_by

patient_db.patients.id
    ↓ (referenciado por)
appointment_db.appointments.patient_id
notification_db.notifications.user_id (cuando es padre)
report_db.reports.patient_id
payment_db.payments.patient_id
media_db.media_files.patient_id
```

### Consistencia Eventual

Para mantener la consistencia entre bases de datos:

1. **Eventos de Dominio**: Cuando se crea/actualiza/elimina una entidad, se publica un evento
2. **Event Sourcing**: Los servicios suscritos procesan los eventos
3. **Compensación**: Si falla una operación, se ejecutan transacciones compensatorias

**Ejemplo**:
```
1. Patient Service crea paciente → Publica "PatientCreated" event
2. Auth Service escucha → Crea usuario para el padre
3. Notification Service escucha → Envía email de bienvenida
4. Analytics Service escucha → Actualiza métricas
```

---

## 📝 Datos de Ejemplo

### Tipos de Plan

```sql
INSERT INTO health_plans (patient_id, plan_type, start_date, annual_price) VALUES
(1, 'PREVENTIVO', '2024-01-01', 120.00),
(2, 'HIM', '2024-01-01', 180.00),
(3, 'CRECIMIENTO', '2024-01-01', 240.00);
```

### Logros

```sql
INSERT INTO achievements (code, name, description, category) VALUES
('BRONZE_ATTENDANCE', 'Medalla de Bronce', '3 revisiones completadas', 'ASISTENCIA'),
('SILVER_ATTENDANCE', 'Medalla de Plata', '6 revisiones completadas', 'ASISTENCIA'),
('GOLD_ATTENDANCE', 'Medalla de Oro', '12 revisiones completadas', 'ASISTENCIA'),
('HYGIENE_STAR', 'Estrella de Higiene', 'Índice O''Leary < 20%', 'HIGIENE'),
('NO_CAVITIES', 'Sin Caries', '1 año sin caries nuevas', 'ESPECIAL');
```

### Plantillas de Notificación

```sql
INSERT INTO notification_templates (code, name, channel, subject, body_template) VALUES
('APPOINTMENT_REMINDER_7D', 'Recordatorio 7 días', 'EMAIL', 
 'Recordatorio: Cita en 7 días', 
 'Hola {{guardian_name}}, te recordamos que {{patient_name}} tiene cita el {{appointment_date}} a las {{appointment_time}}.'),
 
('REPORT_READY', 'Informe disponible', 'PUSH',
 'Nuevo informe disponible',
 'El informe de la revisión de {{patient_name}} ya está disponible.'),
 
('ACHIEVEMENT_EARNED', 'Logro obtenido', 'PUSH',
 '¡Felicidades! Nuevo logro',
 '{{patient_name}} ha obtenido el logro: {{achievement_name}}');
```

---

## 🔧 Consideraciones de Implementación

### Migraciones

Usar **Flyway** o **Liquibase** para gestionar migraciones:

```
src/main/resources/db/migration/
├── V1__create_users_table.sql
├── V2__create_roles_table.sql
├── V3__create_permissions_table.sql
└── V4__insert_default_roles.sql
```

### Índices

- Crear índices en columnas usadas frecuentemente en WHERE, JOIN, ORDER BY
- Índices compuestos para queries complejas
- Monitorizar y optimizar según uso real

### Particionamiento

Para tablas grandes (audit_logs, notifications):

```sql
CREATE TABLE audit_logs (
    ...
) PARTITION BY RANGE (created_at);

CREATE TABLE audit_logs_2024_01 PARTITION OF audit_logs
    FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');
```

### Backup y Recuperación

- **Backup diario** completo
- **Backup incremental** cada hora
- **Retención**: 30 días online, 1 año archivo
- **Ubicación**: Servidor secundario en otra región

---

## 📚 Convenciones de Código

### Entidades JPA

```java
@Entity
@Table(name = "patients")
@EntityListeners(AuditingEntityListener.class)
public class Patient {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "clinic_id", nullable = false)
    private Long clinicId;
    
    @Column(name = "medical_record_number", unique = true, nullable = false)
    private String medicalRecordNumber;
    
    @Column(name = "first_name", nullable = false)
    private String firstName;
    
    @Column(name = "last_name", nullable = false)
    private String lastName;
    
    @Column(name = "date_of_birth", nullable = false)
    private LocalDate dateOfBirth;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "current_risk_level")
    private RiskLevel currentRiskLevel = RiskLevel.GREEN;
    
    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @Column(name = "deleted_at")
    private LocalDateTime deletedAt;
    
    // Getters, setters, constructors
}
```

### DTOs

```java
public record PatientDTO(
    Long id,
    String medicalRecordNumber,
    String firstName,
    String lastName,
    LocalDate dateOfBirth,
    String photoUrl,
    RiskLevel currentRiskLevel,
    HealthPlanDTO currentPlan
) {}
```

---

## 🎯 Próximos Pasos

1. Crear scripts SQL de inicialización
2. Implementar entidades JPA
3. Crear repositorios Spring Data
4. Implementar servicios de negocio
5. Crear tests de integración con base de datos en memoria (H2)
