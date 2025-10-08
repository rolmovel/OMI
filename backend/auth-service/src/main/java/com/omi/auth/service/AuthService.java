package com.omi.auth.service;

import com.omi.auth.dto.JwtAuthenticationResponse;
import com.omi.auth.dto.LoginRequest;
import com.omi.auth.dto.RegisterRequest;

public interface AuthService {
    void register(RegisterRequest request);
    JwtAuthenticationResponse login(LoginRequest request);
}
