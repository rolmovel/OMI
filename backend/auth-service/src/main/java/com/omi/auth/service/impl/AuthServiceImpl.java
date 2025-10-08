package com.omi.auth.service.impl;

import com.omi.auth.domain.Clinic;
import com.omi.auth.domain.Role;
import com.omi.auth.domain.User;
import com.omi.auth.domain.UserClinicRole;
import com.omi.auth.dto.JwtAuthenticationResponse;
import com.omi.auth.dto.LoginRequest;
import com.omi.auth.dto.RegisterRequest;
import com.omi.auth.repository.ClinicRepository;
import com.omi.auth.repository.RoleRepository;
import com.omi.auth.repository.UserClinicRoleRepository;
import com.omi.auth.repository.UserRepository;
import com.omi.auth.service.AuthService;
import com.omi.auth.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final ClinicRepository clinicRepository;
    private final RoleRepository roleRepository;
    private final UserClinicRoleRepository userClinicRoleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Transactional
    @Override
    public void register(RegisterRequest request) {
        userRepository.findByUsername(request.getUsername()).ifPresent(u -> {
            throw new IllegalArgumentException("Username already exists.");
        });

        Clinic clinic = clinicRepository.findByIdentifier(request.getClinicIdentifier())
                .orElseThrow(() -> new IllegalArgumentException("Clinic not found."));

        Role role = roleRepository.findByName(request.getRoleName())
                .orElseThrow(() -> new IllegalArgumentException("Role not found."));

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        User savedUser = userRepository.save(user);

        UserClinicRole userClinicRole = new UserClinicRole();
        userClinicRole.setUser(savedUser);
        userClinicRole.setClinic(clinic);
        userClinicRole.setRole(role);
        userClinicRoleRepository.save(userClinicRole);
    }

    @Override
    public JwtAuthenticationResponse login(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

        var user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new IllegalArgumentException("Invalid username or password."));
        
        var jwt = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(new HashMap<>(), user);

        return JwtAuthenticationResponse.builder().token(jwt).refreshToken(refreshToken).build();
    }
}
