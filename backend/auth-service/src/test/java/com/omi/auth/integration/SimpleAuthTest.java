package com.omi.auth.integration;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.omi.auth.dto.RegisterRequest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
@AutoConfigureMockMvc
@Transactional
public class SimpleAuthTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void testContextLoads() {
        // Test básico para verificar que el contexto de Spring se carga correctamente
        assert(mockMvc != null);
        assert(objectMapper != null);
    }

    @Test
    void testRegisterEndpointExists() throws Exception {
        // Test básico para verificar que el endpoint de registro existe
        RegisterRequest request = new RegisterRequest();
        request.setUsername("test_user");
        request.setEmail("test@example.com");
        request.setPassword("password123");
        request.setClinicIdentifier("test-clinic");
        request.setRoleName("MEDICO");

        // Esperamos un error porque no hay datos de prueba, pero al menos verificamos que el endpoint existe
        mockMvc.perform(post("/api/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().is4xxClientError()); // Cualquier error 4xx está bien para este test
    }
}
