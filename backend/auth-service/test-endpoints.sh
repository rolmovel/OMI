#!/bin/bash

echo "🧪 Iniciando pruebas del Auth Service..."
echo ""

BASE_URL="http://localhost:8081/api/auth"

# Colores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para verificar si el servicio está disponible
check_service() {
    echo "🔍 Verificando disponibilidad del servicio..."
    for i in {1..5}; do
        if curl -s -o /dev/null -w "%{http_code}" $BASE_URL/register > /dev/null 2>&1; then
            echo -e "${GREEN}✅ Servicio disponible${NC}"
            return 0
        fi
        echo "   Intento $i/5... esperando"
        sleep 2
    done
    echo -e "${RED}❌ Servicio no disponible${NC}"
    exit 1
}

# Test 1: Registro exitoso
test_register_success() {
    echo ""
    echo "📝 Test 1: Registro de usuario exitoso"
    RESPONSE=$(curl -s -w "\n%{http_code}" -X POST $BASE_URL/register \
        -H "Content-Type: application/json" \
        -d '{
            "username": "test_doctor",
            "email": "test_doctor@clinic.com",
            "password": "SecurePass123!",
            "clinicIdentifier": "CLINIC001",
            "roleName": "DOCTOR"
        }')
    
    HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
    BODY=$(echo "$RESPONSE" | head -n-1)
    
    if [ "$HTTP_CODE" = "200" ]; then
        echo -e "${GREEN}✅ PASS${NC} - Usuario registrado correctamente"
    else
        echo -e "${RED}❌ FAIL${NC} - HTTP $HTTP_CODE - $BODY"
    fi
}

# Test 2: Login exitoso
test_login_success() {
    echo ""
    echo "🔐 Test 2: Login exitoso"
    RESPONSE=$(curl -s -X POST $BASE_URL/login \
        -H "Content-Type: application/json" \
        -d '{
            "username": "test_doctor",
            "password": "SecurePass123!"
        }')
    
    TOKEN=$(echo "$RESPONSE" | jq -r '.token // empty')
    
    if [ -n "$TOKEN" ] && [ "$TOKEN" != "null" ]; then
        echo -e "${GREEN}✅ PASS${NC} - Token JWT generado"
        echo "   Token: ${TOKEN:0:50}..."
        export AUTH_TOKEN="$TOKEN"
    else
        echo -e "${RED}❌ FAIL${NC} - No se generó token"
        echo "   Response: $RESPONSE"
    fi
}

# Test 3: Usuario duplicado
test_duplicate_user() {
    echo ""
    echo "👥 Test 3: Validación de usuario duplicado"
    RESPONSE=$(curl -s -X POST $BASE_URL/register \
        -H "Content-Type: application/json" \
        -d '{
            "username": "test_doctor",
            "email": "another@clinic.com",
            "password": "SecurePass123!",
            "clinicIdentifier": "CLINIC001",
            "roleName": "DOCTOR"
        }')
    
    ERROR=$(echo "$RESPONSE" | jq -r '.error // empty')
    
    if [[ "$ERROR" == *"already exists"* ]]; then
        echo -e "${GREEN}✅ PASS${NC} - Error de duplicado detectado correctamente"
    else
        echo -e "${RED}❌ FAIL${NC} - No se detectó el duplicado"
        echo "   Response: $RESPONSE"
    fi
}

# Test 4: Credenciales incorrectas
test_wrong_credentials() {
    echo ""
    echo "🔒 Test 4: Login con credenciales incorrectas"
    RESPONSE=$(curl -s -X POST $BASE_URL/login \
        -H "Content-Type: application/json" \
        -d '{
            "username": "test_doctor",
            "password": "WrongPassword!"
        }')
    
    ERROR=$(echo "$RESPONSE" | jq -r '.error // empty')
    
    if [ -n "$ERROR" ]; then
        echo -e "${GREEN}✅ PASS${NC} - Error de autenticación detectado"
    else
        echo -e "${RED}❌ FAIL${NC} - Debería haber fallado"
        echo "   Response: $RESPONSE"
    fi
}

# Test 5: Clínica no existente
test_invalid_clinic() {
    echo ""
    echo "🏥 Test 5: Registro con clínica inexistente"
    RESPONSE=$(curl -s -X POST $BASE_URL/register \
        -H "Content-Type: application/json" \
        -d '{
            "username": "test_user_invalid",
            "email": "invalid@clinic.com",
            "password": "SecurePass123!",
            "clinicIdentifier": "INVALID_CLINIC",
            "roleName": "DOCTOR"
        }')
    
    ERROR=$(echo "$RESPONSE" | jq -r '.error // empty')
    
    if [[ "$ERROR" == *"not found"* ]]; then
        echo -e "${GREEN}✅ PASS${NC} - Error de clínica no encontrada detectado"
    else
        echo -e "${RED}❌ FAIL${NC} - Debería haber fallado"
        echo "   Response: $RESPONSE"
    fi
}

# Test 6: Múltiples roles
test_multiple_roles() {
    echo ""
    echo "👨‍⚕️ Test 6: Registro de usuarios con diferentes roles"
    
    ROLES=("NURSE" "ADMIN" "RECEPTIONIST" "TECHNICIAN")
    PASS_COUNT=0
    
    for ROLE in "${ROLES[@]}"; do
        USERNAME="test_${ROLE,,}"
        RESPONSE=$(curl -s -w "\n%{http_code}" -X POST $BASE_URL/register \
            -H "Content-Type: application/json" \
            -d "{
                \"username\": \"$USERNAME\",
                \"email\": \"${USERNAME}@clinic.com\",
                \"password\": \"SecurePass123!\",
                \"clinicIdentifier\": \"CLINIC001\",
                \"roleName\": \"$ROLE\"
            }")
        
        HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
        
        if [ "$HTTP_CODE" = "200" ]; then
            ((PASS_COUNT++))
            echo -e "   ${GREEN}✓${NC} $ROLE registrado"
        else
            echo -e "   ${RED}✗${NC} $ROLE falló"
        fi
    done
    
    if [ $PASS_COUNT -eq ${#ROLES[@]} ]; then
        echo -e "${GREEN}✅ PASS${NC} - Todos los roles registrados correctamente"
    else
        echo -e "${YELLOW}⚠️  PARTIAL${NC} - $PASS_COUNT/${#ROLES[@]} roles registrados"
    fi
}

# Ejecutar tests
check_service
test_register_success
test_login_success
test_duplicate_user
test_wrong_credentials
test_invalid_clinic
test_multiple_roles

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎉 Pruebas completadas"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
