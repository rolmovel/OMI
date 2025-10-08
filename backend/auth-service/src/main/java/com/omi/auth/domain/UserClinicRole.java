package com.omi.auth.domain;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "user_clinic_roles")
public class UserClinicRole {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "clinic_id")
    private Clinic clinic;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;
}
